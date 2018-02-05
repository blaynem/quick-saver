import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { pastTransactionStyles as styles } from './Styles.Containers';

import TransactionCard from '../components/Transaction.Card';

class PastTransactions extends Component {
  renderItems = () => {
    return this.props.transactions.map( item => {
      return (
        <TransactionCard
          data={item}
          key={item.timeStamp + item.price}/>
      )
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Past Transactions</Text>
        <ScrollView>
          {this.renderItems()}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.transactions.data
  }
}

export default connect(mapStateToProps, {})(PastTransactions);