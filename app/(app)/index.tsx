import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { Link, useRouter } from 'expo-router';

import { config } from "../../gluestack-style.config"
import { StyledProvider, styled } from "@gluestack-style/react"

import Logo from '@/base/splash.png'
import { useFonts } from '../../hooks/useFonts'

import store from '$/store'
import { Provider } from 'react-redux'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const { fontsLoaded, onLayoutRootView } = useFonts()
  if (!fontsLoaded) return null

  const router = useRouter()

  const TextBox = styled(Text, {
    ff: '$black',
    bc: '$primary400',
    // @ts-expect-error
    bw: '$4',
    _web: {
      bw: 2
    },
  })

  const handlePress = () => {
    router.replace('tabs')
  }

  return (
    <Provider store={store}>
      <StyledProvider config={config}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <Pressable onPress={handlePress}>
            <TextBox>
              Tabs Screen
            </TextBox>
          </Pressable>
          <Image style={styles.image} source={Logo} />
          <Link href='/(app)/register' asChild>
            <Pressable>
              <TextBox>
                Register | Create Account
              </TextBox>
            </Pressable>
          </Link>
          <StatusBar style="auto" />
        </View>
      </StyledProvider>
    </Provider>

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
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  }
})
