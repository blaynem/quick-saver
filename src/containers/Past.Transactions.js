import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    margin: 10,
    padding: 10,
    elevation: 1,
    flex: 2
  },
  text: {
    color: "white",
    textAlign: "center",
    paddingBottom: 10
  }
})

const mapStateToProps = state => {
  return {
    transactions: state.transactions.data
  }
}

export default connect(mapStateToProps, {})(PastTransactions);