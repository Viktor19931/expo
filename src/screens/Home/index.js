// @flow

import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { inject, observer } from 'mobx-react'

import CountStore from 'stores/countStore'
import { Avatar, Wrapper } from './style'

type HomeProps = {
  navigation: any,
  countStore: CountStore,
}

@inject('countStore')
@observer
class HomeScreen extends Component<HomeProps> {
  static navigationOptions = {
    title: 'Dashboard',
  }

  render() {
    console.log('props -->', this.props.countStore.fbUser)
    const {
      navigation,
      countStore: {
        price,
        reset,
        add,
        fbUser: { email, picture, name },
      },
    } = this.props
    return (
      <Wrapper>
        <Avatar source={{ uri: picture.data.url }} width={picture.data.width} height={picture.data.height} />
        <Text>Email: {email}</Text>
        <Text>Name is {name}</Text>
        <Text>Counter = {price}</Text>
        <Button onPress={() => navigation.navigate('Auth')} title="Auth" />
        <Button onPress={() => navigation.navigate('Details')} title="Details" />
        <Button onPress={() => add()} title="add 1" />
        <Button onPress={reset} title="reset counter" />
      </Wrapper>
    )
  }
}

export default HomeScreen
