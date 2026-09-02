import React from "react"
import { View, Text, TextInput, Pressable, Image } from "react-native"

export default function Login() {
    return (
        <View style={{flex: 1}}>
            <View style={{justifyContent: 'center', marginVertical: 113, marginHorizontal: 24, flexDirection: 'column', gap: 32}}>
                <View style={{flexDirection: 'column', gap: 8}}>
                    <View style={{flexDirection: 'row', gap: 8, alignItems: 'center', paddingBottom: 16}}>
                        <View style={{backgroundColor: '#4F46E5', padding: 8, borderRadius: 12}}>
                            <Image source={require('../assets/Shield-lock.png')} style={{width: 13.33, height: 16.67}} />
                        </View>
                        <Text style={{color: '#0F172A', fontWeight: 'bold', fontSize: 24}}>PassVault</Text>
                    </View>
                    <Text style={{color: '#0F172A', fontWeight: 'bold', fontSize: 32}}>Welcome Back</Text>
                    <Text style={{color: '#64748B', fontSize: 16}}>Access your secure vault</Text>
                </View>
                <View style={{flexDirection: 'column', gap: 24}}>
                    <View style={{flexDirection: 'column', gap: 8}}>
                        <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Email Address</Text>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, paddingVertical: 18, paddingHorizontal: 16}}>
                            <TextInput placeholder="name@company.com" />
                        </View>
                    </View>
                    <View style={{flexDirection: 'column', gap: 8}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Password</Text>
                            <Text style={{color: '#4F46E5', fontWeight: 'bold'}}>Forgot Password?</Text>
                        </View>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, paddingVertical: 18, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput placeholder="password" style={{flex: 1}} />
                            <Image source={require('../assets/eye-icon.png')} style={{width: 18.33, height: 12.5}}/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                        <Pressable style={{paddingVertical: 16, borderRadius: 12, backgroundColor: '#4F46E5', width: '85%', height: 56, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Login</Text>
                        </Pressable>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, justifyContent: 'center', alignItems: 'center', width: 56, height: 56}}>
                            <Pressable>
                                <Image source={require('../assets/fingerprint-icon.png')} style={{width: 18.05, height: 19.96}}/> 
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 24}}>
                    <View style={{borderWidth: 1, borderColor: '#E2E8F0', flex: 1}}></View>
                    <Text style={{color: '#64748B', fontWeight: 'bold'}}>OR</Text>
                    <View style={{borderWidth: 1, borderColor: '#E2E8F0', flex: 1}}></View>
                </View>
                <View style={{flexDirection: 'row', gap: 16, justifyContent: 'center'}}>
                   <View style={{flexDirection: 'row', gap: 8, borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 42, paddingVertical: 14}}>
                        <Image source={require('../assets/google.png')} style={{width: 20, height: 20}}/>
                        <Text>Google</Text>
                   </View>
                    <View style={{flexDirection: 'row', gap: 8, borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 42, paddingVertical: 14}}>
                        <Image source={require('../assets/apple-logo.png')} style={{width: 20, height: 20}}/>
                        <Text>Apple</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', gap: 4, justifyContent: 'center', marginTop: 16}}>
                    <Text style={{color: '#64748B'}}>Don't have an account?</Text>
                    <Pressable><Text style={{color: '#4F46E5', fontWeight: 'bold'}}>Sign Up</Text></Pressable>
                </View>
            </View>
        </View>
    )
}