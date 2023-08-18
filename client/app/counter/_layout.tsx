import { Button } from 'react-native'
import { Stack, useRouter } from 'expo-router'

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
