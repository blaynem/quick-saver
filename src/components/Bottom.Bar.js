import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 40,
    borderTopWidth: 2,
    borderColor: "#1c1c1c"
  },
  linkStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  linkText: {
    color: "white",
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: "#1c1c1c",
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: "#1c1c1c",
  }
})

export default BottomBar;