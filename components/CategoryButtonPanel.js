import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import styles from '../Styles';

class CategoryButtonPanel extends React.Component {
  render() {
    const { data } = this.props;
    if (data && data.length) {
      return (
        <View style={{marginBottom:15}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {data.map(item => (
              <View style={styles.container} key={item.id}>
                <Text style={styles.textDefault}>{item.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }
    console.log('Please provide images');
    return null;
  }
}

export default CategoryButtonPanel;
