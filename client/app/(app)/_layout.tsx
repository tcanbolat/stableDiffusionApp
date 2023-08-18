import { Button } from 'react-native'
import { Stack, useRouter } from 'expo-router'

const StackLayout = () => {
  const router = useRouter()

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={
          {
            headerTitle: 'Login',
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name='register'
        options={
          {
            headerTitle: 'Create account',
            headerRight: () =>
              <Button
                title='Open'
                onPress={() => router.push('modal')}
              />
          }
        }
      />
      <Stack.Screen
        name='modal'
        options={
          {
            presentation: 'modal',
            headerShown: true,
            headerLeft: () =>
              <Button
                title='Close'
                onPress={() => router.back()}
              />
          }
        }
      />
    </Stack>
  )
}

export default StackLayout
