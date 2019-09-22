import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

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
                <Text style={styles.text}>{item.name}</Text>
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

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#147b45',
      margin:5
    },
    text: {
      color: "white",
      fontSize: 16,
      textAlign: "center"
    }
  });

export default CategoryButtonPanel;
