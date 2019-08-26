import React from "react";
import { View, Image, Text, TouchableOpacity} from "react-native";
import styles from '../Styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.header}>
          <Image style={styles.imageLogo}
            source={require('../media/logo.png')}
          />
        <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Register')}
              style={styles.buttonTopNav}>
                <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Login')}
              style={styles.buttonTopNav}>
                <Text>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

export default Header;