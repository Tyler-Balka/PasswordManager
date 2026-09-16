import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function AddPassword() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>

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