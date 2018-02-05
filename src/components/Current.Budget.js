import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { currentBudgetStyles as styles } from './Styles.Components';

class CurrentBudget extends Component {
  render() {
    const { monthlyBudget } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{monthlyBudget}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    monthlyBudget: state.userSettings.monthlyBudget
  }
}

export default connect(mapStateToProps, {})(CurrentBudget);