import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import SvgUri from 'react-native-svg-uri'
import { setScreen } from '../reducer';

class BottomTabs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={styles.bottom}>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          this.props.setScreen(1);
        }}>
        <Image style={styles.bottomIcon} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.bottomText}>Home</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          this.props.setScreen(2);
        }}>
        <Image style={styles.bottomIcon} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.bottomText}>In Play</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => {
          this.props.setScreen(3);
        }}>
        <Image style={styles.bottomIcon} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.bottomText}>A-Z</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => {
          this.props.setScreen(4);
        }}>
        <Image style={styles.bottomIcon} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.bottomText}>My Bets</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => {
          this.props.setScreen(5);
        }}>
        <Image style={styles.bottomIcon} source={require("../media/tab_home.png")}></Image>
        <Text style={styles.bottomText}>Menu</Text>

      </TouchableOpacity>
    </View>
  }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  setScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs);