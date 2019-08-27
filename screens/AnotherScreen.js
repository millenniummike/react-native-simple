import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

class AnotherScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Another Screen</Text>
            </View>
        );
    }
}

export default AnotherScreen;