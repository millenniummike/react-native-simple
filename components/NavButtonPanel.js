import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../Styles';

class NavButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { onClick} = this.props;
      return (
        <View style={styles.buttonPanel}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map(item => (
              <TouchableOpacity onPress={() => onClick(item.sport)} style={styles.iconContainer} key={item.sport}>
                <Image style={styles.iconImage} source={{uri: item.uri}}/>
                <Text style={styles.iconLabelWhite}>{item.sport}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )
    }
}

export default NavButtonPanel;