import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Register Screen</Text>
            </View>
        );
    }
}

export default RegisterScreen;