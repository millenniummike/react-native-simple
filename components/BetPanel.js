import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import BetButton from './BetButton'

class BetPanel extends React.Component {
  render() {
      return (
        <View style={styles.container}>
           <Text style={styles.text}>Event Name</Text>
           <Text style={styles.text}>Time</Text>
           <Text style={styles.text}>Home</Text>
           <Text style={styles.text}>Away</Text>
           <Text style={styles.text}>Home</Text>
           <View style={styles.betButtonContainer}>
            <BetButton odds="21/20"></BetButton>
            <BetButton odds="23/10"></BetButton>
           </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 5,
      margin:2
    },
    betButtonContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    text: {
      color: "black",
      fontSize: 16,
      textAlign: "left",
    }
  });

export default BetPanel;
