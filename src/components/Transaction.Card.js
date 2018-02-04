import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import convertDate from '../helper-functions/convertDate';

class TransactionCard extends Component {
  render() {
    const { data } = this.props
    return (
      <View style={styles.transactionCard}>
        <View style={styles.cardSideLeft}>
          <Text style={[styles.text, styles.paddingBottom]}>{convertDate(data.timeStamp)}</Text>
          <Text style={styles.text}>Description: {data.description}</Text>
        </View>
        <Text style={[styles.text, styles.cardSideRight]}>$ {data.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
  cardSideRight: {
    alignSelf: "center",
    fontSize: 24,
    flex: 1,
    textAlign: "right"
  },
  cardSideLeft: {
    flex: 2
  }
})

export default TransactionCard;