import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { currentBudgetStyles as styles } from './Styles.Components';

class CurrentBudget extends Component {
  render() {
    const { totals, monthlyBudget } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Spent: {totals.allTransactions}</Text>
        <Text style={styles.text}>Budget: {monthlyBudget}</Text>
        <Text style={styles.text}>Left: {monthlyBudget - totals.allTransactions}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    monthlyBudget: state.userSettings.monthlyBudget,
    totals: state.transactions.totals
  }
}

export default connect(mapStateToProps, {})(CurrentBudget);