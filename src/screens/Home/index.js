// @flow

import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { inject, observer } from 'mobx-react'
import CountStore from 'stores/countStore'

type HomeProps = {
  navigation: any,
  countStore: CountStore,
}

@inject('countStore')
@observer
class HomeScreen extends Component<HomeProps> {
  render() {
    const { navigation } = this.props
    const {
      countStore: { price, reset, add },
    } = this.props
    return (
      <>
        <Text>Home created !</Text>
        <Text>Counter ={price}</Text>
                  <Button onPress={() => navigation.navigate('Auth')} title="Auth" />
        <Button onPress={() => navigation.navigate('Details')} title="Details" />
        <Button onPress={() => add()} title="add 1" />
        <Button onPress={reset} title="reset counter" />
      </>
    )
  }
}

export default HomeScreen
