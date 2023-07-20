import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { config } from "./gluestack-style.config"
import { StyledProvider, styled } from "@gluestack-style/react"

import Logo from './assets/base/splash.png'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Thin': require('./assets/fonts/Inter-Thin.otf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const TextBox = styled(Text, {
    ff: '$black',
  })

  return (
    <StyledProvider config={config}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Text>Open up App.tsx to start working on your app</Text>
        <Image style={styles.image} source={Logo} />
        <TextBox>
        Open up App.tsx to start working on your app
        </TextBox>
        <StatusBar style="auto" />
      </View>
    </StyledProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 65,
    height: 65,
  }
})
