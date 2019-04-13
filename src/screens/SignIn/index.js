// @flow

import React, { Component } from 'react'
import { TextInput, Button } from 'react-native'

type LoginProps = {
  navigation: any
}

type LoginState = {
  email: string,
  pass: string
}

class SignIn extends Component<LoginProps, LoginState> {
  state = {
    email: '',
    pass: '',
  }

  static navigationOptions = {
    title: 'Sign in',
  }

  handleSubmit = () => {
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <>
        <TextInput
          onChangeText={val => this.setState({ email: val })}
          placeholder="email"
          style={{
            width: 250,
            alignSelf: 'center',
            marginVertical: 5,
            height: 30,
            padding: 5,
            borderColor: 'grey',
            borderWidth: 1,
          }}
          value={this.state.email}
        />
        <TextInput
          onChangeText={val => this.setState({ pass: val })}
          placeholder="password"
          secureTextEntry
          style={{
            width: 250,
            alignSelf: 'center',
            marginVertical: 5,
            height: 30,
            padding: 5,
            borderColor: 'grey',
            borderWidth: 1,
          }}
          value={this.state.pass}
        />
        <Button onPress={this.handleSubmit} title="Sign in" />
      </>
    )
  }
}

export default SignIn
