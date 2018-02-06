import React, { Component } from 'react'
import { Platform, StatusBar, View, Text } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

import Header from './components/Header';
import SideBar from './components/Side.Bar';
import Landing from './containers/Landing';
import PastTransactions from './containers/Past.Transactions';
import SettingsPage from './containers/Settings.Page';

class MainApp extends Component {
  state = {
    sidebarOpen: false
  }
  handleToggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }
  handleCloseSidebar = () => {
    this.setState({ sidebarOpen: false})
  }
  render() {
    return (
      <NativeRouter>
        <View style={viewStyle}>
          <Header toggleSidebar={this.handleToggleSidebar}/>
          <SideBar sidebarOpen={this.state.sidebarOpen} closeSidebar={this.handleCloseSidebar}/>
          <Switch>
            <Route path="/transactions" component={PastTransactions} />
            <Route path="/settings" component={SettingsPage} />
            <Route exact path="/" component={Landing}/>
          </Switch>
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