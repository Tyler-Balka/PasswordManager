import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native'
import { useState, useEffect } from 'react'
import zxcvbn from 'zxcvbn'

export default function AddPassword() {
    const [appTitle, setAppTitle] = useState('')
    const [url, setUrl] = useState('')
    const [emailUsed, setEmailUsed] = useState('')
    const [password, setPassword] = useState('')
    const items = [
        {
            title: 'App Name',
            placeholder: 'e.g. Netflix, Github',
            image: require('../assets/app-icon.png')
        }, 
        {
            title: 'URL',
            placeholder: 'https://example.com',
            image: require('../assets/url-icon.png')
        },
        {
            title: 'Email Used',
            placeholder: 'name@example.com',
            image: require('../assets/email-icon.png')
        },
        {
            title: 'Password',
            placeholder: 'password',
            image: require('../assets/lock-icon.png')
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {items.map((item) => {
                    return (
                        <View style={{marginHorizontal: 8, marginBottom: 8, flexDirection: 'column', gap: 8}}>
                            <Text style={{color: '#0F172A', fontWeight: 'bold'}}>{item.title}</Text>
                            <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, flexDirection: 'row', gap: 8, alignItems: 'center', padding: 8, paddingLeft: 16}}>
                                <Image source={item.image} style={() => {
                                    if (item.title == 'App Name') {
                                        return {width: 16, height: 16}
                                    } else if (item.title == 'URL') {
                                        return {width: 20, height: 20}
                                    } else if (item.title == 'Email Used') {
                                        return {width: 16, height: 16}
                                    } else if (item.title == 'Password') {
                                        return {width: 16, height: 21}
                                    } else {
                                        return 
                                    }
                                }}/>
                                <TextInput 
                                    placeholder={item.placeholder} 
                                    style={{flex: 1}} 
                                    value={() => {
                                        if (item.title == 'App Name') {
                                            return appTitle
                                        } else if (item.title == 'URL') {
                                            return url
                                        } else if (item.title == 'Email Used') {
                                            return emailUsed
                                        } else if (item.title == 'Password') {
                                            return password
                                        } else {
                                            return
                                        }
                                    }}
                                    onChangeText={() => {
                                        if (item.title == 'App Name') {
                                            return setAppTitle
                                        } else if (item.title == 'URL') {
                                            return setUrl
                                        } else if (item.title == 'Email Used') {
                                            return setEmailUsed
                                        } else if (item.title == 'Password') {
                                            return setPassword
                                        } else {
                                            return
                                        }
                                    }}/>
                            </View>
                        </View>
                    )
                })}
            </View>
            <View style={styles.passwordContainer}>
                <Pressable style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save Password</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        gap: 32,
        marginTop: 16,
        marginHorizontal: 16,
        marginBottom: 96,
    },
    body: {
        flex: 1,
        padding: 24,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 16,
    },
    passwordContainer : {
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#4F46E5',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: 358,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
})