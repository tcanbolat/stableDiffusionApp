import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useGlobalSearchParams } from 'expo-router'

export default function NewsDetailsPage() {

  const { id } = useGlobalSearchParams()

  return (
    <View style={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Stack.Screen options={{headerTitle: `News #${ id }`}}/>
      <Text>News Details Page</Text>
      <Text>My News: { id }</Text>
    </View>
  )
}

