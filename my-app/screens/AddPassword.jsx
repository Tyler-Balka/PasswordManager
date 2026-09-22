import { Alert, View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as SecureStorage from 'expo-secure-store'
import zxcvbn from 'zxcvbn'

export default function AddPassword() {
    const [appTitle, setAppTitle] = useState('')
    const [url, setUrl] = useState('')
    const [emailUsed, setEmailUsed] = useState('')
    const [password, setPassword] = useState('')
    const [notes, setNotes] = useState('')
    const [score, setScore] = useState(0)

    const navigation = useNavigation()

    useEffect(() => {
        const checkPasswordStrength = () => {
            const score = zxcvbn(password).score
            setScore(score)
        }

        checkPasswordStrength()
    }, [password])

    const getScore = (score) => {
        if (score == 1) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{color: '#64748B', marginLeft: 8}}>Security Strength</Text>
                    <Text style={{color: '#EF4444', fontWeight: '300', marginTop: 4, marginBottom: 6, marginRight: 8}}>Weak</Text>
                </View>
            )
        } else if (score == 2) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{color: '#64748B', marginLeft: 8}}>Security Strength</Text>
                    <Text style={{color: '#FACC15', fontWeight: '500', marginTop: 4, marginBottom: 6, marginRight: 8}}>Fair</Text>
                </View>
            )
        } else if (score == 3) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{color: '#64748B', marginLeft: 8}}>Security Strength</Text>
                    <Text style={{color: '#86EFAC', fontWeight: '700', marginTop: 4, marginBottom: 6, marginRight: 8}}>Strong</Text>
                </View>
            )
        } else if (score == 4) {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',}}>
                    <Text style={{color: '#64748B', marginLeft: 8}}>Security Strength</Text>
                    <Text style={{color: '#22C55E', fontWeight: 'bold', marginTop: 4, marginBottom: 6, marginRight: 8}}>Very Strong</Text>
                </View>
            )
        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{color: '#64748B', marginLeft: 8}}>Security Strength</Text>
                    <Text style={{color: '#EF4444', fontWeight: '300', marginTop: 4, marginBottom: 6, marginRight: 8}}>Weak</Text>
                </View>
            )
        }
    }

    const renderScore = (score) => {
        if (score == 1) {
            return <View style={{marginLeft: 8}}>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#EF4444'}}></View>
            </View>
        } else if (score == 2) {
            return <View style={{flexDirection: 'row', gap: 8, marginLeft: 8}}>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#FACC15'}}></View>
                    <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#FACC15'}}></View>
            </View>
        } else if (score == 3) {
            return <View style={{flexDirection: 'row', gap: 8, marginLeft: 8}}>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#86EFAC'}}></View>
                    <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#86EFAC'}}></View>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#86EFAC'}}></View>
            </View>
        } else if (score == 4) {
            return <View style={{flexDirection: 'row', gap: 8, marginLeft: 8}}>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#22C55E'}}></View>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#22C55E'}}></View>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#22C55E'}}></View>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#22C55E'}}></View>
            </View>
        } else {
            return <View style={{marginLeft: 8}}>
                <View style={{borderRadius: 9999, width: 68.5, height: 6, backgroundColor: '#EF4444'}}></View>
            </View>
        }
    }
    
    const items = [
        {
            title: 'App Name',
            placeholder: 'e.g. Netflix, Github',
            image: require('../assets/app-icon.png'),
            key: 1
        }, 
        {
            title: 'URL',
            placeholder: 'https://example.com',
            image: require('../assets/url-icon.png'),
            key: 2
        },
        {
            title: 'Email Used',
            placeholder: 'name@example.com',
            image: require('../assets/email-icon.png'),
            key: 3
        },
        {
            title: 'Password',
            placeholder: 'password',
            image: require('../assets/lock-icon.png'),
            key: 4
        }
    ]

    const sendPostRequest = async () => {
        try {
            const token = await SecureStorage.getItemAsync('token')
            const response = await fetch('http://10.1.10.242:3000/api/profile/add-password', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    appName: appTitle,
                    url,
                    emailUsed,
                    password,
                    notes
                })
            })

            if (response.ok) {
                navigation.navigate('Tabs')
            }

        } catch (error) {
            console.error('There was an error making this request.', error)
            Alert.alert('Could not save password', 'Please try again.')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                {items.map((item) => {
                    return (
                        <View 
                            style={{marginHorizontal: 8, marginBottom: 8, flexDirection: 'column', gap: 8}}
                            key={item.key}>
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
                                    value={
                                        item.title == 'App Name' ? appTitle :
                                        item.title == 'URL' ? url :
                                        item.title == 'Email Used' ? emailUsed :
                                        item.title == 'Password' ? password :
                                        ''
                                    }
                                    onChangeText={(text) => {
                                        if (item.title == 'App Name') {
                                            return setAppTitle(text)
                                        } else if (item.title == 'URL') {
                                            return setUrl(text)
                                        } else if (item.title == 'Email Used') {
                                            return setEmailUsed(text)
                                        } else if (item.title == 'Password') {
                                            return setPassword(text)
                                        } else {
                                            return
                                        }
                                    }}/>
                            </View>
                        </View>
                    )
                })}
                <View style={{ marginLeft: 8 }}>
                    {getScore(score)}
                    {renderScore(score)}
                </View>
                <View style={{marginHorizontal: 8, marginBottom: 8, marginTop: 24, flexDirection: 'column', gap: 8}}>
                    <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Notes</Text>
                    <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, flexDirection: 'row', gap: 8, alignItems: 'baseline', padding: 8, paddingLeft: 16, width: 308, height: 98}}>
                        <Image source={require('../assets/notes-icon.png')} style={{width: 18, height: 18}}/>
                        <TextInput placeholder='Add additional details...' multiline={true} style={{flex: 1}} value={notes} onChangeText={setNotes}/>
                    </View>
                </View>
            </View>
            <View style={styles.passwordContainer}>
                <Pressable 
                    style={styles.saveButton}
                    onPress={() => sendPostRequest()}>
                    <Text style={styles.saveButtonText}>Save Password</Text>
                </Pressable>
                <Pressable onPress={() => {navigation.goBack()}}>
                    <Text>Cancel</Text>
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
        flexDirection: 'column',
        gap: 12
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