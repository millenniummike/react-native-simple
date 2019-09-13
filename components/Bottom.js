import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { setScreen, toggleMenu, displayMenu } from '../reducer';

class BottomTabs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.bottom}>
      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.setScreen(1);
          this.props.displayMenu(false);
        }}>
        <Image style={styles.imageBottomNav} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.textBottomNav}>Home</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBottomNav}
        onPress={() => {
          this.props.setScreen(2);
          this.props.displayMenu(false);
        }}>
        <Image style={styles.imageBottomNav} source={require("../media/tab_list.png")}></Image>
        <Text style={styles.textBottomNav}>Games</Text>

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