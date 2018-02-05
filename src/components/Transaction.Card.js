import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import convertDate from '../helper-functions/convertDate';

class TransactionCard extends Component {
  renderCategory = ()  => {
    const { data } = this.props
    if ( data.category ){
      return <Text style={[styles.text, styles.category]}>{data.category.toUpperCase()}</Text>
    }
  }
  render() {
    const { data } = this.props
    return (
      <View style={styles.transactionCard}>
        <View style={styles.cardSideLeft}>
          <Text style={[styles.text, styles.paddingBottom]}>{convertDate(data.timeStamp)}</Text>
          <Text style={[styles.text, styles.paddingBottom]}>
            {data.description || "No Description"}
          </Text>
        </View>
        <Text style={[styles.text, styles.cardSideRight]}>$ {data.price}</Text>
        {this.renderCategory()}
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
    justifyContent: "space-between",
    borderRadius: 5
  },
  cardSideRight: {
    alignSelf: "center",
    fontSize: 24,
    flex: 1,
    textAlign: "right"
  },
  cardSideLeft: {
    flex: 2
  },
  category: {
    backgroundColor: "gray",
    maxWidth: 50,
    textAlign: "center",
    padding: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    fontSize: 10,
    position: "absolute",
    top: 1,
    right: 1
  }
})

export default TransactionCard;