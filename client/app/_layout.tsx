import React from 'react'
import { Stack } from 'expo-router'

import StoreWrapper from 'context/storeWrapper'

import { config } from "../gluestack-style.config"
import { StyledProvider } from "@gluestack-style/react"
import FontWrapper from 'context/FontsWrapper'

const AppLayout = () => {

  return (
    <StoreWrapper>
      <StyledProvider config={config}>
        <FontWrapper>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name='(app)'
              options={{ headerShown: false }}
            />
          </Stack>
        </FontWrapper>
      </StyledProvider>
    </StoreWrapper>
  )
}

export default AppLayout
