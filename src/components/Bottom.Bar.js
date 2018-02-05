import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import { bottomBarStyles as styles } from './Styles.Components'

class BottomBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Link style={[styles.linkStyle, styles.borderRight]} to="/">
            <Text style={styles.linkText}>HOME</Text>
        </Link>
        <Link style={[styles.linkStyle, styles.borderLeft]} to="/transactions">
            <Text style={styles.linkText}>TRANSACTIONS</Text>
        </Link>
      </View>
    )
  }
}

export default BottomBar;