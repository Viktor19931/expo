import React from 'react'
import { Text, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Text>Home created !</Text>
      <Button
        title="Auth"
        onPress={() => navigation.navigate('Auth')}
      />
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
    </>
  )
}

export default HomeScreen
