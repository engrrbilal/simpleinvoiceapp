import React from 'react'
import { InvoicesScreen } from '@/Screens'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Home"
        component={InvoicesScreen}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
