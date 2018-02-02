import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { addTransaction } from '../actions';

class AddTransaction extends Component {
  state = {
    price: "",
    description: ""
  }
  handleTextChange = (name, val) => {
    this.setState({ [name]: val })
  }
  handleButtonPress = () => {
    this.props.addTransaction(this.state)
    this.setState({
      price: "",
      description: ""
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Price</Text>
        <TextInput
          onChangeText={(val) => this.handleTextChange("price", val)}
          value={this.state.price}
          style={styles.inputs} keyboardType={'numeric'}/>
        <Text style={styles.text}>Description</Text>        
        <TextInput
          onChangeText={(val) => this.handleTextChange("description", val)}
          value={this.state.description}
          style={styles.inputs} />
        <Button onPress={this.handleButtonPress} title="Submit"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: "#212121",
    margin: 10,
    padding: 15,
    elevation: 3
  },
  text: {
    color: "white"
  },
  inputs: {
    color: "white",
    borderColor: "white",
    marginBottom: 10
  }
})

export default connect(null, { addTransaction })(AddTransaction);