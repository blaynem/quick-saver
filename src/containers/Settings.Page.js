import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { changeUserSettings } from '../actions';

class SettingsPage extends Component {
  constructor(props){
    super(props)

    const { monthlyBudget } = this.props.userSettings
    this.state = { monthlyBudget: monthlyBudget.toString() }
  }
  handleSave = () => {
    const { monthlyBudget } = this.state
    this.props.changeUserSettings({
      monthlyBudget: parseFloat(monthlyBudget)
    })
  }
  render() {
    return (
      <View style={{ margin: 10, padding: 10, backgroundColor: "#212121" }} >
        <Text style={{color:"white", textAlign:"center", paddingBottom: 10 }}>Settings</Text>
        <Text style={{color:"white" }}>Monthly Budget</Text>
        <TextInput
          onChangeText={(val) => this.setState({ monthlyBudget: val })}
          value={this.state.monthlyBudget}
          keyboardType="numeric"
          style={{ color: "white" }}/>
        <TouchableOpacity style={styles.button} onPress={this.handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "gray",
    padding: 10
  },
  buttonText: {
    backgroundColor: "#212121",
    color: "white"
  }
}

const mapStateToProps = state => {
  return {
    userSettings: state.userSettings
  }
}

export default connect(mapStateToProps, { changeUserSettings })(SettingsPage);