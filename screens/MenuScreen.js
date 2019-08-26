import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';

class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text>Menu Screen</Text>
            </View>
        );
    }
}

export default MenuScreen;