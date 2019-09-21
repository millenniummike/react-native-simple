import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from '../Styles';
import { setScreen, toggleMenu } from '../reducer';
import { connect } from 'react-redux';
import { SCREEN_LOGIN, SCREEN_REGISTER } from '../reducer'
import { styleTheme } from '../Styles'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedIn } = this.props
    const { websocketMessage } = this.props
    console.log(loggedIn)
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          { styleTheme == "Maria" ? 
          <Image style={styles.imageLogo}
            source={require('../media/mariaLogo.png')}
          />
          :
          <Image style={styles.imageLogo}
            source={require('../media/unibetLogo.png')}
          />
          }
        </View>
        { loggedIn ?
        <View style={styles.headerRight}>
          <Text style={{ color: "white" }}>Balance:</Text>
          <Text style={{ color: "white" }}>£{websocketMessage}</Text>
      </View>
         :
         <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => this.props.setScreen(SCREEN_REGISTER)}
            style={styles.buttonTopNav2}>
            <Text style={{ color: "black" }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.setScreen(SCREEN_LOGIN)}
            style={styles.buttonTopNav}>
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>
        </View>
        
        }
      </View>
    )
  }
};

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  setScreen, toggleMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);