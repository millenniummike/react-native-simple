import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import SvgUri from 'react-native-svg-uri'

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { onClick } = this.props;

    return (
      <View style={styles.buttonPanel}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map(item => (
            <TouchableOpacity onPress={() => onClick(item.sport)} key={item.sport}>
              <View style={{width:60,height:60, marginTop:20, marginLeft:8, padding:6, backgroundColor:"white"}}>
                <SvgUri style={styles.iconImage}
                  width="30"
                  height="30"
                  source={{ uri: 'https://static.kambicdn.com/client/ubuk/icons/navicons/sports/' + item.sportIcon + '.svg' }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default ButtonPanel;