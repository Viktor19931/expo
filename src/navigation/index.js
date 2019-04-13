import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'

import SignIn from '@screens/SignIn'
import SignUp from '@screens/SignUp'
import ForgotPass from '@screens/ForgotPass'

import Home from '@screens/Home'
import Details from '@screens/Details'

const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    ForgotPass: { screen: ForgotPass },
  },
  {
    initialRouteName: 'SignIn',
  }
)

const AppStack = createStackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
  },
  {
    initialRouteName: 'Home',
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
