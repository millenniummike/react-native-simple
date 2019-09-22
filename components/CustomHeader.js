import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import styles from '../Styles';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.header}>
          <Image style={styles.logoImage}
            source={require('../media/unibet.png')}
          />
        <View style={styles.topNavButtons}>
        <TouchableOpacity onPress={() => alert('To do!')}
              style={styles.buttonRegister}>
                <Text style={{color:"black", textAlign:"center"}}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('To do!')}
              style={styles.buttonLogin}>
                <Text style={{color:"white", textAlign:"center"}}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

export default CustomHeader;