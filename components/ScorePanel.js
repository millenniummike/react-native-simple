import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

class ScorePanel extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
           <Text style={styles.text}>Score Panel</Text>
          </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      padding: 5
    },
    text: {
      color: "black",
      fontSize: 8,
      textAlign: "center"
    }
  });

export default ScorePanel;
