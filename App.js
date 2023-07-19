import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import Logo from "./assets/splash.png"

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        <Text>Hello world</Text>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '25%',
    height: '25%'
  }
})
