import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link, withRouter } from 'react-router-native';

import { sideBarStyles as styles } from './Styles.Components'

class SideBar extends Component {
  componentWillReceiveProps(nextProps){
    // if the route changes, it will close the sidebar
    if ( this.props.location.pathname !== nextProps.location.pathname ){
      this.props.closeSidebar();
    }
  }
  render() {
    const { sidebarOpen } = this.props
    const containerStyle = sidebarOpen ? styles.container : styles.containerHidden
    return (
      <View style={containerStyle}>
        <Link style={styles.linkStyle} to="/">
            <Text style={styles.linkText}>HOME</Text>
        </Link>
        <Link style={styles.linkStyle} to="/transactions">
            <Text style={styles.linkText}>TRANSACTIONS</Text>
        </Link>
        <Link style={styles.linkStyle} to="/settings">
            <Text style={styles.linkText}>SETTINGS</Text>
        </Link>
      </View>
    )
  }
}

export default withRouter(SideBar);