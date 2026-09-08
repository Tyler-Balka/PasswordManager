import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'

export default function Vault() {
    const getTimeOfDay = () => {
        const date = new Date()
        if (date.getHours() > 0 && date.getHours() < 12) {
            return 'Good Morning'
        } else if (date.getHours() >= 12 && date.getHours() <= 19) {
            return 'Good Afternoon'
        } else {
            return 'Good Evening'
        }
    }

    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = await SecureStore.getItemAsync('token')
                const response = await fetch('http://10.1.10.242:3000/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                const data = await response.json()
                if (response.ok) {
                    setUserProfile(data)
                }
            } catch (error) {
                console.error('Failed to fetch user profile:', error)
            }
        }

        fetchUserProfile()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={{ color: '#64748B', fontSize: 16 }}>{getTimeOfDay()}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#0F172A' }}>{userProfile?.fullName}</Text>
                    </View>
                    <Pressable style={{ width: 48, height: 48, backgroundColor: '#E2E8F0', borderRadius: 20, marginLeft: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#0F172A' }}>{userProfile?.fullName?.[0]}</Text>
                    </Pressable>
                </View>
                <View style={styles.body}>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInput}>
                            <Image source={require('../assets/search-icon.png')} style={{ width: 15, height: 15 }} />
                            <TextInput placeholder='Search vault...'/>
                        </View>
                        <Pressable style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 24, padding: 12 }}>
                            <Image source={require('../assets/filter-icon.png')} style={{ width: 18, height: 18 }} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 124
    },
    headerContainer: {
        marginHorizontal: 24,
        marginVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 32,
        paddingBottom: 24,
        paddingRight: 24,
    },
    body: {
        flex: 1,
        marginHorizontal: 32,
    },
    searchContainer: {
        flexDirection: 'row',
        gap: 12,
        paddingRight: 24,
        width: 358,
        height: 46
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 24,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    }
})