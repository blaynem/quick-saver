import React, { Component } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import convertDate from '../helper-functions/convertDate';

class PastTransactions extends Component {
  renderItems = () => {
    return this.props.transactions.map( item => {
      return (
        <View
          style={styles.transactionCard}
          key={item.timeStamp + item.price}>
          <View style={styles.transactionLeft}>
            <Text style={[styles.text, styles.paddingBottom]}>{convertDate(item.timeStamp)}</Text>
            <Text style={styles.text}>Description: {item.description}</Text>
          </View>
          <Text style={[styles.text, styles.transactionPrice]}>$ {item.price}</Text>
        </View>
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
    padding: 15,
    elevation: 1,
    flex: 2
  },
  text: {
    color: "white"
  },
  paddingBottom: {
    paddingBottom: 10
  },
  transactionCard: {
    backgroundColor: "#272727",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    elevation: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  transactionPrice: {
    alignSelf: "center",
    fontSize: 24,
    flex: 1,
    textAlign: "right"
  },
  transactionLeft: {
    flex: 2
  }
})

const mapStateToProps = state => {
  return {
    transactions: state.transactions.data
  }
}

export default connect(mapStateToProps, {})(PastTransactions);