import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../Styles';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class PlayingGameScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>ACTUAL GAME!!</Text>
                <WebView 
                style={{ height:height*0.8 }}
                source={{ uri: 'https://ellisonleao.github.io/clumsy-bird/' }} />
            </View>
        );
    }
}

export default PlayingGameScreen;