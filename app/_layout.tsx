import React from 'react'
import { Stack, useRouter } from 'expo-router'
import StoreWrapper from '$/storeWrapper'
import { config } from "../gluestack-style.config"
import { StyledProvider } from "@gluestack-style/react"

const StackLayout = () => {
  const router = useRouter()

  return (
    <StoreWrapper>
      <StyledProvider config={config}>
        <Stack
          screenOptions={{
            headerStyle:
            {
              backgroundColor: '#10101E',
            },
            headerTitleStyle:
            {
              fontWeight: 'bold',
            },
            headerTintColor: '#fff',
            headerShown: false
          }}
        >
          <Stack.Screen
            name='(app)'
            options={
              {
                headerTitle: 'LandingPage',
                headerShown: true,
              }
            }
          />
        </Stack>
      </StyledProvider>
    </StoreWrapper>
  )
}

export default StackLayout
