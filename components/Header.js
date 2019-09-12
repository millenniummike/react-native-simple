import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from '../Styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image style={styles.imageLogo}
            source={require('../media/logo.png')}
          />
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => alert('Register')}
            style={styles.buttonTopNav2}>
            <Text style={{ color: "black" }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Login')}
            style={styles.buttonTopNav}>
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

export default Header;