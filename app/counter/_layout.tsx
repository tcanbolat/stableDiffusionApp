import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { Button } from 'react-native'

const router = useRouter()

const StackLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={
          {
            headerTitle: 'Counter',
            headerShown: true,
            headerLeft: () =>
            <Button
              title='Back'
              onPress={() => router.back()}
            />
          }
        }
      />
    </Stack>
  )
}

export default StackLayout
