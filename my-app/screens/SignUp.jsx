import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Image } from 'react-native';


export default function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ScrollView style={{flex: 1}}>
                    <View style={{ margin: 32}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#4F46E5', borderRadius: 12, width: 40, height: 40, shadowColor: '#000', shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}><Image source={require('../assets/Shield-lock.png')} style={{ width: 13.33, height: 16.67 }} /></View>
                            <Text style={{ marginLeft: 8, fontSize: 18, fontWeight: 'bold' }}>PassVault</Text>
                        </View>
            
                        <Text style={{ color: '#0F172A', fontSize: 24, fontWeight: 'bold', marginBottom: 8, paddingRight: 128 }}>Create your account</Text>
                        <Text style={{ color: '#64748B', fontSize: 16, paddingRight: 64 }}>Join thousands of users securing their digital life.</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 16, marginHorizontal: 32, marginBottom: 32, justifyContent: 'center'}}>
                        <View style={{borderWidth: 1, borderRadius: 12, borderColor: '#E2E8F0', flexDirection: 'row', gap: 8, paddingHorizontal: 30, paddingVertical: 15 }}>
                            <Image source={require('../assets/google.png')} style={{width: 20, height: 20}}></Image>
                            <Text>Google</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 12, borderColor: '#E2E8F0', flexDirection: 'row', gap: 8, paddingHorizontal: 30, paddingVertical: 15}}>
                            <Image source={require('../assets/apple-logo.png')} style={{width: 20, height: 20}}></Image>
                            <Text>Apple</Text>
                        </View>
                    </View>
                    <View style={{marginHorizontal: 32, justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                        <View style={{borderWidth: 1, borderColor: '#64748B', flex: 1,}}></View>
                        <Text style={{color: '#64748B',}}>Or continue with email</Text>
                        <View style={{borderWidth: 1, borderColor: '#64748B', flex: 1,}}></View>
                    </View>
                    <View style={{margin: 32, flexDirection: 'column', gap: 8,}}>
                        <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Full Name</Text>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, padding: 16, flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                            <Image source={require('../assets/person-icon.png')} style={{width: 13.33, height: 13.33}}></Image>
                            <TextInput multiline={false} keyboardType='default' autoCapitalize='words' placeholder='John Doe'></TextInput>
                        </View>
                    </View>
                    <View style={{marginHorizontal: 32, flexDirection: 'column', gap: 8}}>
                        <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Email Address</Text>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, padding: 16, flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                            <Image source={require('../assets/email-icon.png')} style={{width: 16.67, height: 13.33}}></Image>
                            <TextInput multiline={false} keyboardType='email-address' placeholder='name@example.com'></TextInput>
                        </View>
                    </View>
                     <View style={{margin: 32, flexDirection: 'column', gap: 8}}>
                        <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Password</Text>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, padding: 16, flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                            <Image source={require('../assets/lock-icon.png')} style={{width: 13.33, height: 17.5}}></Image>
                            <TextInput multiline={false} keyboardType='default' placeholder='password' secureTextEntry={true}></TextInput>
                            {/* Logic to determine how strong password is, goes here */}
                        </View>
                    </View>
                    <View style={{marginHorizontal: 32, flexDirection: 'column', gap: 8}}>
                        <Text style={{color: '#0F172A', fontWeight: 'bold'}}>Confirm Password</Text>
                        <View style={{borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 12, padding: 16, flexDirection: 'row', gap: 8, alignItems: 'center',}}>
                            <Image source={require('../assets/password-icon.png')} style={{width: 16.67, height: 16.67}}></Image>
                            <TextInput multiline={false} keyboardType='email-address' placeholder='confirm password'></TextInput>
                        </View>
                    </View>
                    <View style={{margin: 32, justifyContent: 'center', alignItems: 'center',}}>
                        <Pressable style={{backgroundColor: '#4F46E5', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 16, width: 315, height: 56}}>
                            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Create Account</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row', gap: 8, justifyContent: 'center', marginBottom: 32}}>
                        <Text style={{color: '#64748B'}}>Already have an account?</Text>
                        <Pressable onPress={() => {
                            navigation.navigate('Login')
                        }}>
                            <Text style={{color: '#4F46E5', fontWeight: 'bold'}}>Login</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC'
    }, 
    innerContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 16,
        margin: 16,
        justifyContent: 'center',
    }
})