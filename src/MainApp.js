import React, { Component } from 'react'
import { Platform, StatusBar, View, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Landing from './containers/Landing';
import PastTransactions from './containers/Past.Transactions';
import BottomBar from './components/Bottom.Bar';

class MainApp extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={viewStyle}>
          <Route exact path="/" component={Landing}/>
          <Route path="/transactions" component={PastTransactions} />
          <BottomBar />
        </View>
      </NativeRouter>
    )
  }
}

const viewStyle = {
  flex: 1,
  backgroundColor:"#333333",
  // creates a padding on top of the app equal to status bar.
  paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
}


export default MainApp;