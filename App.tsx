import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

import { config } from "./gluestack-style.config"
import { StyledProvider } from "@gluestack-style/react"

import Logo from './assets/icon.png'


export default function App() {
  return (
    <StyledProvider config={config}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app</Text>
        <Image style={styles.image} source={Logo} />
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
