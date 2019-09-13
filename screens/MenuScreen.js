import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, toggleMenu } from '../reducer';

class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Menu Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
  };
  
  const mapDispatchToProps = {
    setScreen, toggleMenu
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);