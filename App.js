import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font'
//import { Roboto_300Light, Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { Ubuntu_300Light, Ubuntu_400Regular, Ubuntu_700Bold, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu'
import { StatusBar } from 'expo-status-bar';
import Routes from './src/Navigation/routes'

import { NavigationContainer } from '@react-navigation/native'

export default function App() {

  const [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Ubuntu_500Medium
    
  })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor="#ccc" style="dark" />
      </NavigationContainer>
    </>
  );
}


