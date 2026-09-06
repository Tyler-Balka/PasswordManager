import { View, Text, StyleSheet } from 'react-native'
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
                <View>
                    <Text>{getTimeOfDay()}</Text>
                    <Text>{userProfile?.fullName}</Text>
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
    }
})