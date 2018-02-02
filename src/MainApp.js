import React, { Component } from 'react'
import { Button, Text, View } from 'react-native';

import { connect } from 'react-redux';

import { testAction } from './actions';

class MainApp extends Component {
  render() {
    return (
      <View>
        <Text>Testing the thing here</Text>
        <Button title="Press Me!" onPress={() => this.props.testAction()}/>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    allState: state
  })
}

export default connect(mapStateToProps, { testAction })(MainApp);