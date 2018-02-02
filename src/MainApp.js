import React, { Component } from 'react'
import { View } from 'react-native';

import Landing from './screens/Landing';

class MainApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Landing />
      </View>
    )
  }
}


export default MainApp;