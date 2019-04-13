// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Navigation from '@navigation'



class App extends React.Component {
  render() {
    return (
                  <View style={{ flex: 1 }}>
        <Navigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
