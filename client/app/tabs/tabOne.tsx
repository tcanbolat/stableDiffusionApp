import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useRouter } from 'expo-router'

import { styled } from "@gluestack-style/react"

import { useEffect, useState } from 'react'

export default function TabOne() {
  const [requestData, setrequestData] = useState({})

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

  useEffect(() => {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the GET request
    xhr.open('GET', 'http://localhost:8000/', true);

    // Set up a callback function to handle the response
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Request was successful
        var responseData = JSON.parse(xhr.responseText);
        console.log('Response:', responseData);
        setrequestData(responseData)
      } else {
        // Request was not successful
        console.error('Request failed with status:', xhr.status);
      }
    };

    // Set up a callback function to handle errors
    xhr.onerror = function() {
      console.error('Request error');
    };

    // Send the request
    xhr.send();

  }, [])

  return (
        <View style={styles.container}>
          <Pressable onPress={handlePress}>
            <TextBox>
              Tabs Screen
            </TextBox>
          </Pressable>
          <TextBox>
            {requestData.hello}
          </TextBox>
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
