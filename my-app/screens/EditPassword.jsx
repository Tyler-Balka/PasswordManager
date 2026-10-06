import { View, Text, TextInput, Image, Pressable, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import * as SecureStorage from 'expo-secure-store'

export default function EditPassword() {
    const [appName, setAppName] = useState('')
    const [emailUsed, setEmailUsed] = useState('')
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchPasswordInfo = () => {
            SecureStorage.getItemAsync('token').then((token) => {
                return fetch('http://10.1.10.242:3000/api/profile/retrieve-full', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }).then((response) => {
                    const data = response.json

                    const appName = data.appName
                    const emailUsed = data.emailUsed
                    const password = data.password
                    const url = data.url

                    setAppName(appName)
                    setEmailUsed(emailUsed)
                    setPassword(password)
                    setUrl(url)
                }).catch((error) => {
                    console.error(error)
                })
            })
        }

        fetchPasswordInfo()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={require('../assets/back-arrow.png')} style={{width: 16, height: 16}}/>
                </Pressable>
                <Text style={{fontSize: 16, fontWeight: '600'}}>Edit Password</Text>
                <Pressable>
                    <Image source={require('../assets/trash-icon.png')} style={{width: 16, height: 18}}/>
                </Pressable>
            </View>
            <View style={styles.body}>
                <View style={styles.bodyContainer}>
                    <View style={styles.innerContainer}>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        justifyContent: 'space-between'
    },
    body: {
        flex: 1
    },
    bodyContainer: {
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginHorizontal: 16,
        marginTop: 8,
        width: '92.5%',
        height: '60%'
    },
    innerContainer: {
        margin: 24,
    }
})