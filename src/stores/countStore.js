// @flow

import { observable } from 'mobx'
import remotedev from 'mobx-remotedev'
import { Constants, Facebook } from 'expo'

@remotedev
class Store {
  @observable price = 10
  @observable error = null
  @observable fbUser = {
    email: '',
    name: '',
    picture: {
      data: {
        url: '',
        width: 0,
        height: 0,
      },
    },
  }

  add = () => this.price++

  reset = () => (this.price = 0)

  fbLogin = async (navigation: any) => {
    try {
      const fbData = await Facebook.logInWithReadPermissionsAsync(Constants.manifest.facebookAppId, {
        permissions: ['public_profile'],
      })

      const { type, token } = fbData

      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large),first_name,email`
        )
        const user = await response.json()
        // console.log(user)
        this.fbUser = user
        navigation.navigate('App')
      } else {
        // type === 'cancel'
      }
    } catch (error) {
      this.error = error.message
    }
  }
}

export default Store
