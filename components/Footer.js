import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { setScreen, toggleMenu, displayMenu } from '../reducer';
import { SCREEN_HOME, SCREEN_AZ, SCREEN_IN_PLAY, SCREEN_SPORTS, SCREEN_MYBETS } from '../reducer'
import { theme } from '../Styles'

class BottomTabs extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.bottom}>
      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.setScreen(SCREEN_HOME);
          this.props.displayMenu(false);
        }}>
          <Image style={styles.imageBottomNav} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.textBottomNav}>Home</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.setScreen(SCREEN_IN_PLAY);
          this.props.displayMenu(false);
        }}>
        <Image style={styles.imageBottomNav} source={require("../media/tab_list.png")}></Image>
        <Text style={styles.textBottomNav}>In Play</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.setScreen(SCREEN_AZ);
          this.props.displayMenu(false);
        }}>
        <Image style={styles.imageBottomNav} source={require("../media/tab_list.png")}></Image>
        <Text style={styles.textBottomNav}>A-Z</Text>

      </TouchableOpacity>
      

      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.setScreen(SCREEN_MYBETS);
          this.props.displayMenu(false);
        }}>
        <Image style={styles.imageBottomNav} source={require("../media/tab_list.png")}></Image>
        <Text style={styles.textBottomNav}>My Bets</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.toggleMenu();
        }}>
        <Image style={styles.imageBottomNav} source={require("../media/tab_menu.png")}></Image>
        <Text style={styles.textBottomNav}>Menu</Text>

      </TouchableOpacity>
    </View>
  }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  setScreen, toggleMenu, displayMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs);