import { useEffect, useState, useCallback } from 'react'
import { loadAsync as expoLoadAsync } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  useEffect(() => {
    const loadFonts = async () => {
      await expoLoadAsync({
        'Inter-Thin': require('../assets/fonts/Inter-Thin.otf'),
        'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
        'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
        'Inter-Light': require('../assets/fonts/Inter-Light.otf'),
      })

      // Font loading is completed, hide the splash screen
      await SplashScreen.hideAsync()

      // Update the state to indicate that the fonts are loaded
      setFontsLoaded(true)
    }

    loadFonts()
  }, [])

  return { fontsLoaded, onLayoutRootView }
}
