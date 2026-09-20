const express = require('express')
const app = express()

require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql2')
const crypto = require('crypto')

// create a database connection
const db = mysql.createConnection({
    host: process.env.HOST,
    password: process.env.PASSWORD,
    user: process.env.USER,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
})

// connect to database
db.connect((err) => {
    if (!err){
        console.log('Sucessfully connected to database')
    } else {
        console.log('Failed to connect to database successfully')
    }
})

// middleware
app.use(express.json())

// routes
// sign-up route
app.post('/api/sign-up', (req, res) => {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({
            message: 'One or more of the forms were not filled properly'
        })
    }

    // hash password
    const passwordHash = bcrypt.hashSync(password, 10)

    const query = `INSERT INTO users(full_name, email_address, password_hash) VALUES (?, ?, ?)`
    db.query(query, [fullName, email, passwordHash], (err) => {
        if (!err) {
            console.log('Successfully inserted into the users table')
            return res.status(201).json({
                message: 'Successfully created a user'
            })
        } else {
            console.log('Failed to insert user into database')
            return res.status(500).json({
                message: 'Failed to insert user into database',
                err: err.message
            })
        }
    } )
})

// login route
app.post('/api/login', (req, res) => {
    const { email, password } = req.body
    
    const query = `SELECT password_hash FROM users WHERE email_address = ?`
    db.query(query, [email], (err, result) => {
        if (!err) {
            const password_hash_result = bcrypt.compareSync(password, result[0].password_hash)
            if (password_hash_result === true) {
                const payload = {
                    email: email
                }

                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'})
                res.status(200).json({
                    message: 'Login successful',
                    token: token
                })
            } else {
                res.status(400).json({
                    message: 'Failed to login successfully. Please enter the correct email or password.'
                })
            }
        } else {
            res.status(400).json({
                message: 'Failed to query database'
            })
        }
    })
})

// profile route
app.get('/api/profile', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        const query = `SELECT full_name, email_address FROM users WHERE email_address = ?`
        db.query(query, [decode.email], (err, result) => {
            if (!err) {
                return res.status(200).json({
                    fullName: result[0].full_name,
                    email: result[0].email_address
                })
            } else {
                return res.status(500).json({
                    message: 'Failed to query database',
                    err: err.message
                })
            }
        })
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token',
            err: error.message
        })
    }
})

// add password route
app.post('/api/profile/add-password', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    const { appName, url, emailUsed, password, notes } = req.body
    if (!token) {
        return res.json({
            message: 'No token provided'
        })
    }
    
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        // process for encrypting password
            // generate a random initialization vector
            const iv = crypto.randomBytes(12) 

            // create cipher with AES-256-GCM
            const cipher = crypto.createCipheriv('aes-256-gcm', process.env.ENCRYPTION_KEY, iv)

            // encrypt password
            let encrypted = cipher.update(password, 'utf-8', 'hex')
            encrypted += cipher.final('hex')
        
        // execute database query to store password
        const query = `INSERT INTO stored_passwords(app_name, url, email_used, encrypted_password, password_notes, iv, email_address)
                            VALUES (?, ?, ?, ?, ?, ?, ?)`
        db.query(query, [appName, url, emailUsed, encrypted, notes, iv, decode.email], (err, result) => {
            if (!err) {
                res.status(201).json({
                    message: 'Successfully inserted values into database',
                })
            } else {
                return res.status(500).json({
                    message: "Couldn't insert values into database, sorry."
                })
            }
        })
    } catch(error) {
        res.status(401).json({
            message: 'Invalid token',
            err: error.message
        })
    }
})

// retrieve app name and emails used for passwords
app.get('/api/profile/retrieve', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        res.json({
            message: 'No token provided. Please provide a token.'
        })
    } else {
        try {
            // verify user through token provided
            const decode = jwt.verify(token, process.env.JWT_SECRET)

            // execute database query to retrieve specific user information
            const query = `SELECT app_name, email_used FROM stored_passwords 
                            JOIN users ON stored_passwords.email_address = users.email_address 
                            WHERE users.email_address = ?`
            db.query(query, [decode.email], (err, result) => {
                if (!err) {
                    return res.status(200).json({
                        message: 'Successfully retrieved passwords.',
                        data: {
                            appName: result[0].app_name,
                            emailUsed: result[0].email_used
                        }
                    })
                } else {
                    res.status(500).json({
                        message: "Couldn't retrieve items from database.",
                        error: err
                    })
                }
            })
        } catch (error) {
            res.status(401).json({
                message: 'Invalid token',
                err: error.message
            })
        }
    }
})

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})