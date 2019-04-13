import React, { Component } from 'react'
import { TextInput, Button, View } from 'react-native'

class SignIn extends Component {
  state = {
    email: '',
    pass: '',
  }

  static navigationOptions = {
    title: 'Sign in',
  }

  handleSubmit = () => {
    console.log(this.state.email, this.state.pass)
    this.props.navigation.navigate('App')
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
      </>
    )
  }
}

export default SignIn
