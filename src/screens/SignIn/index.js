import React, { Component } from 'react'
import { TextInput, Button } from 'react-native'
import { inject, observer } from 'mobx-react'

import CountStore from '../../stores/countStore'

type LoginProps = {
  navigation: any,
  countStore: CountStore,
}

type LoginState = {
  email: string,
  pass: string,
}

@inject('countStore')
@observer
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

  onFbLogin = async () => {
    this.props.countStore.fbLogin(this.props.navigation)
  }

  render() {
    return (
      <>
        <TextInput
          style={{
            width: 250,
            alignSelf: 'center',
            marginVertical: 5,
            height: 30,
            padding: 5,
            borderColor: 'grey',
            borderWidth: 1,
          }}
          placeholder="email"
          value={this.state.email}
          onChangeText={val => this.setState({ email: val })}
        />
        <TextInput
          style={{
            width: 250,
            alignSelf: 'center',
            marginVertical: 5,
            height: 30,
            padding: 5,
            borderColor: 'grey',
            borderWidth: 1,
          }}
          placeholder="password"
          secureTextEntry
          value={this.state.pass}
          onChangeText={val => this.setState({ pass: val })}
        />
        <Button title="Sign in" onPress={this.handleSubmit} />
        <Button title="Facebook login" onPress={this.onFbLogin} />
      </>
    )
  }
}

export default SignIn
