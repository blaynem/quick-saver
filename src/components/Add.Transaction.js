import React, { Component } from 'react';
import { Picker, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';

import { addTransaction } from '../actions';

class AddTransaction extends Component {
  state = {
    price: null,
    description: null,
    category: null
  }
  handleTextChange = (name, val) => {
    this.setState({ [name]: val })
  }
  handleButtonPress = () => {
    this.props.addTransaction(this.state)
    this.setState({
      category: null,
      description: null,
      price: null
    })
  }
  handleCategorySelect = (value) => {
    if ( value === null ) return;
    this.setState({ category: value })
  }
  renderMessage = () => {
    const { error, message } = this.props;
    if ( error ) return <Text style={[styles.buttonResponse, styles.negativeResponse]}>{error}</Text>
    if ( message ) return <Text style={[styles.buttonResponse, styles.positiveResponse]}>{message}</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Price</Text>
        <TextInput
          onChangeText={(val) => this.handleTextChange("price", val)}
          value={this.state.price}
          style={styles.inputs} keyboardType={'numeric'}/>
        <Text style={styles.text}>Categories</Text>
        <Picker
          style={styles.text}
          mode="dropdown"
          onValueChange={ (val) => this.handleCategorySelect(val) }
          selectedValue={this.state.category}>
          <Picker.Item label="Select a category" value={null} />
          <Picker.Item label="Food" value="food"/>
          <Picker.Item label="Fun" value="fun"/>
        </Picker>
        <Text style={styles.text}>Description</Text>        
        <TextInput
          onChangeText={(val) => this.handleTextChange("description", val)}
          value={this.state.description}
          style={styles.inputs} />
        <TouchableOpacity style={styles.button} onPress={this.handleButtonPress}>
          <Text style={styles.buttonText}>Add Transaction</Text>
        </TouchableOpacity>
        {this.renderMessage()}
      </View>
    )
  }
}

// categories

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "gray",
    padding: 10
  },
  buttonText: {
    backgroundColor: "#212121",
    color: "white"
  },
  buttonResponse: {
    paddingTop: 10,
    textAlign: "center"
  },
  negativeResponse: {
    color: "red"
  },
  positiveResponse: {
    color: "green"
  },
  container: {
    backgroundColor: "#212121",
    margin: 10,
    padding: 15,
    elevation: 3,
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

const mapStateToProps = (state) => {
  return {
    error: state.transactions.error,
    message: state.transactions.message,
  }
}

export default connect(mapStateToProps, { addTransaction })(AddTransaction);