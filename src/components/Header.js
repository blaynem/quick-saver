import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

class Header extends Component {
  render() {
    const wordStyle = {
      color: "white",
      lineHeight: 4,
      fontSize: 24
    }
    const containerLines = {
      width: 30,
      height: 20,
      justifyContent: "center",
      alignItems: "center"
    }
    return (
      <View style={{ padding: 10, paddingBottom: 0 }}>
        <TouchableOpacity style={containerLines} onPress={this.props.toggleSidebar}>
          <Text style={wordStyle}>__</Text>
          <Text style={wordStyle}>__</Text>
          <Text style={wordStyle}>__</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Header;