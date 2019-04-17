import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { Image, Text } from 'react-native'
import React from 'react'

import SignIn from 'screens/SignIn'
import SignUp from 'screens/SignUp'
import ForgotPass from 'screens/ForgotPass'

import Home from 'screens/Home'
import Details from 'screens/Details'
import backIco from '../../assets/back.png'

export const options = navigation => ({
  headerBackImage: <Image source={backIco} style={{ height: 30, width: 50, resizeMode: 'contain' }} />,
  headerStyle: { backgroundColor: 'yellow' },
  headerBackTitle: null,
  headerRight: <Text onPress={() => navigation.navigate('Home')}>Logo</Text>,
})

export const navigationOptions = ({ navigation }) => options(navigation)

const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    ForgotPass: { screen: ForgotPass },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'float',
  }
)

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
      navigationOptions,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
  }
)

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
)

export default AppNavigator
