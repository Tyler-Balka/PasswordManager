import { View, Image, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import heroIcon from '../assets/heroIcon.png';
import SecurityIcon from '../assets/Security Badge.png';
import shieldIcon from '../assets/Shield-icon.png';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.heroContainer}>
                <Image source={heroIcon} style={{ width: 128, height: 128, marginBottom: 20 }}/>
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>PassVault</Text>
                <Text style={{ fontSize: 16, color: '#666' }}>Secure. Simple. Yours.</Text>
            </View>

            <View>
                <ProgressBar progress={.4} color="#4F46E5" />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40, marginTop: 25,borderRadius: 9999, borderWidth: 1, paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#F8FAFC', borderColor: '#E2E8F0' }}>
                    <Image source={shieldIcon} style={{ width: 12.72, height: 15.74,}}/>
                    <Text style={{ marginLeft: 8, fontWeight: 'bold', color: '#4F46E5' }}>AES-256 ENCRYPTED</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    heroContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})