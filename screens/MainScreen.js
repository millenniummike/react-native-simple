import React from 'react';
import { View, ScrollView, } from 'react-native';
import AnotherScreen from './AnotherScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import PlayGameScreen from './PlayGameScreen';
import PostLoginForm1 from './PostLoginForm1';
import PostLoginForm2 from './PostLoginForm2';

import styles from '../Styles';
import { connect } from 'react-redux';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    renderScreen(){
        const {showScreen} = this.props
        switch (showScreen) {
            case 1: return <HomeScreen />;
            case 2: return <GameScreen />;
            case 3: return <LoginScreen />;
            case 4: return <RegisterScreen />;
            case 5: return <AnotherScreen />;
            case 6: return <PlayGameScreen />;
            case 7: return <PostLoginForm1 />;
            case 8: return <PostLoginForm2 />;
            default: return <HomeScreen />;
        }
    }
    render() {
        return <View style={styles.main}>
        <ScrollView>
            {this.renderScreen()}
        </ScrollView>
        </View>
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
