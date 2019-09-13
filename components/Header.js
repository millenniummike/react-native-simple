import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from '../Styles';
import { setScreen, toggleMenu } from '../reducer';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedIn } = this.props
    console.log(loggedIn)
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image style={styles.imageLogo}
            source={require('../media/logo.png')}
          />
        </View>
        { loggedIn ?
        <View style={styles.headerRight}>
          <Text style={{ color: "black" }}>Balance</Text>
          <Text style={{ color: "white" }}> £333.00</Text>
      </View>
         :
         <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => this.props.setScreen(4)}
            style={styles.buttonTopNav2}>
            <Text style={{ color: "black" }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.setScreen(3)}
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