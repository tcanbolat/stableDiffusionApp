import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Link, useRouter } from 'expo-router'

import { styled } from "@gluestack-style/react"

import Logo from '@/base/splash.png'

export default function App() {

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
  const handleCounterPress = () => {
    router.push('counter')
  }

  return (
        <View style={styles.container}>
          <Pressable onPress={handlePress}>
            <TextBox>
              Tabs Screen
            </TextBox>
          </Pressable>
          <Pressable onPress={handleCounterPress}>
            <TextBox>
              Counter Screen
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
