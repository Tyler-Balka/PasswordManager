import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import SignUp from './screens/SignUp';
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const splashDuration = 5000; // 5 seconds delay

  useEffect(() => {
    const timer = setInterval(() => {
      setShowSplash(false);
    }, splashDuration);

    return () => clearInterval(timer);
  }, []);

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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

