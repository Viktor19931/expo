// @flow

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Navigation from '@navigation'

type AppProps = {}

class App extends React.Component<AppProps> {
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
