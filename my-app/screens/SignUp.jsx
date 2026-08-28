import {View, Text, TextInput, Pressable, ScrollView, StyleSheet, Image} from 'react-native';
import google from '../assets/google.png';
import apple from '../assets/apple-logo.png';

export default function SignUp() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ScrollView>
                    <View style={{ margin: 32}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#4F46E5', borderRadius: 12, width: 40, height: 40, shadowColor: '#000', shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}><Image source={require('../assets/Shield-lock.png')} style={{ width: 13.33, height: 16.67 }} /></View>
                            <Text style={{ marginLeft: 8, fontSize: 18, fontWeight: 'bold' }}>PassVault</Text>
                        </View>
            
                        <Text style={{ color: '#0F172A', fontSize: 24, fontWeight: 'bold', marginBottom: 8, paddingRight: 128 }}>Create your account</Text>
                        <Text style={{ color: '#64748B', fontSize: 16, paddingRight: 64 }}>Join thousands of users securing their digital life.</Text>
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