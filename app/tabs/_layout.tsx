import { Tabs } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='tabOne'
        options={
          {
            tabBarLabel: 'one',
            headerTitle: 'Tab one',
            tabBarIcon: ({ color, size }) => <FontAwesome5 name='user' size={size} color={color} />
          }
        }
      />
      <Tabs.Screen
        name='tabTwo'
        options={
          {
            tabBarLabel: 'two',
            headerTitle: 'Tab two',
            tabBarIcon: ({ color, size }) => <FontAwesome5 name='list' size={size} color={color} />
          }
        }
      />
      <Tabs.Screen
        name='list'
        options={
          {
            tabBarLabel: 'News',
            headerShown: false,
            // href: null, // Hides the Tab from the bottm Tab Bar
            tabBarIcon: ({ color, size }) => <FontAwesome5 name='newspaper' size={size} color={color} />
          }
        }
      />
      </Tabs>
  )
}
