import React, { Component } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';


class PastTransactions extends Component {
  renderItems = () => {
    return this.props.transactions.map( item => {
      return (
        <View
          style={styles.transactions}
          key={item.timeStamp + item.price}>
          <Text style={styles.text}>Time: {item.timeStamp}</Text>
          <Text style={styles.text}>${item.price}</Text>
          <Text style={styles.text}>Description: {item.description}</Text>
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
  inputs: {
    color: "white",
    borderColor: "white",
    marginBottom: 10
  },
  transactions: {
    backgroundColor: "#272727",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    elevation: 2
  }
})

const mapStateToProps = state => {
  return {
    transactions: state.transactions.data
  }
}

export default connect(mapStateToProps, {})(PastTransactions);