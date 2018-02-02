import React, { Component } from 'react'
import { Text, View } from 'react-native';

import AddTransaction from '../components/Add.Transaction';
import PastTransactions from '../containers/Past.Transactions';

class Landing extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20, backgroundColor:"#333333"}}>
        <AddTransaction />
        <PastTransactions />
      </View>
    )
  }
}

export default Landing;