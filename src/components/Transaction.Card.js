import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { transactionCardStyles as styles } from './Styles.Components';
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

export default TransactionCard;