import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { Link } from 'expo-router';

import { config } from "../../gluestack-style.config"
import { StyledProvider, styled } from "@gluestack-style/react"

import Logo from '@/base/splash.png'
import { useFonts } from '../../hooks/useFonts'

SplashScreen.preventAutoHideAsync();

export default function App () {

  const { fontsLoaded, onLayoutRootView } = useFonts()
  if (!fontsLoaded) return null

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
        <Link href='/(app)/register'>Register</Link>
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
