import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import SignUp from './screens/SignUp';
import Login from './screens/Login'
import Vault from './screens/Vault';
import Generator from './screens/Generator';
import Security from './screens/Security';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const splashDuration = 5000; // 5 seconds delay

  useEffect(() => {
    const timer = setInterval(() => {
      setShowSplash(false);
    }, splashDuration);

    return () => clearInterval(timer);
  }, []);

  const icons = {
    Vault: require('./assets/vault-icon.png'),
    Generator: require('./assets/generator-key.png'),
    Security: require('./assets/security-tab-icon.png'),
    Settings: require('./assets/settings-tab-icon.png')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplash ? (
          <Stack.Screen name="Splash" >
            {() => <SplashScreen duration={splashDuration} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Tabs' children={() => {
              return (
                <Tab.Navigator screenOptions={({ route }) => {
                  return {
                    headerShown: false,
                    tabBarStyle: {
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      borderRadius: 9999,
                      marginBottom: 32,
                      marginHorizontal: 16,
                      backgroundColor: '#fff',
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                      elevation: 5,
                    },
                    tabBarInactiveTintColor: '#64748B',
                    tabBarActiveTintColor: '#4F46E5',
                    tabBarLabelStyle: {
                      fontSize: 12,
                      fontWeight: 'bold',
                    },
                    tabBarItemStyle: {
                      paddingVertical: 8,
                    },
                    tabBarIcon: () => {
                      const icon = icons[route.name];
                      return <Image source={icon} style={() => {
                        if (route.name === 'Vault') {
                          return { width: 16, height: 20}
                        } else if (route.name === 'Generator') {
                          return { width: 22, height: 12}
                        } else if (route.name === 'Security') {
                          return { width: 16, height: 20 }
                        } else if (route.name === 'Settings') {
                          return { width: 20.1, height: 20 }
                        } 
                      }} />;
                    },
                  };
                }}>
                  <Tab.Screen name='Vault' component={Vault}/>
                  <Tab.Screen name='Generator' component={Generator}/>
                  <Tab.Screen name='Security' component={Security}/>
                  <Tab.Screen name='Settings' component={Settings}/>

                </Tab.Navigator>
              );
            }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

