import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen } from '../reducer';

class BlankScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Empty Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
  };
  
  const mapDispatchToProps = {

  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BlankScreen);