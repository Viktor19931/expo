// @flow

import React from 'react'
import { Provider } from 'mobx-react'

import Navigation from 'navigation'
import CountStore from 'stores/countStore'

const countStore = new CountStore()
const stores = {
  countStore,
}

type AppProps = {}

class App extends React.Component<AppProps> {
  
  render() {
    return (
      <Provider {...stores}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
