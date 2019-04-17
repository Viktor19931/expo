import React, { Component } from 'react'
import { TextInput, Button, Slider, Text, View } from 'react-native'
import { inject, observer } from 'mobx-react'
import { Brightness, Permissions } from 'expo'

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
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
    }
    this.setPermissions()
    this.getBrightnessVal()
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

  getBrightnessVal = async () => {
    const res = await Brightness.getBrightnessAsync()
    this.setState({ b: res })
  }

  setPermissions = () => {
    Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS)
    Permissions.getAsync(Permissions.SYSTEM_BRIGHTNESS)
  }

  render() {
    return (
      <View style={{ paddingHorizontal: 10 }}>
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
        <Text>Change Brightness</Text>
        <Slider
          maximumValue={1}
          minimumValue={0}
          value={this.state.b}
          onValueChange={Brightness.setBrightnessAsync}
          // onSlidingComplete={this.setBrightness}
        />
      </View>
    )
  }
}

export default SignIn
