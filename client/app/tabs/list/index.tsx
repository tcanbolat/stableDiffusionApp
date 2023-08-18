import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ListPage = () => {
  return (
    <View style={{ display: 'flex', justifyContent: 'center', flex: 1, alignItems: 'center' }}>
      <Text> List Page</Text>
      <Link href='/tabs/list/1'>Link One</Link>
      <Link href='/tabs/list/2'>Link Two</Link>
      <Link href={'/tabs/list/3'}>Link Three</Link>
    </View>
  )
}

export default ListPage
