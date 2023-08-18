
import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { useFonts } from '../hooks/useFonts'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

interface FontWrapperProps {
  children: ReactNode
}

const FontWrapper: React.FC<FontWrapperProps> = ({ children }) => {

  const { fontsLoaded, onLayoutRootView } = useFonts()

  if (!fontsLoaded) return null

  return (
    <View style={styles.body} onLayout={onLayoutRootView}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
})

export default FontWrapper
