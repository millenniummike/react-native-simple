import React from 'react';
import { View, ScrollView, } from 'react-native';
import AnotherScreen from './AnotherScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import PreGameScreen from './PreGameScreen';
import PostLoginForm1 from './PostLoginForm1';
import PostLoginForm2 from './PostLoginForm2';
import PlayingGameScreen from './PlayingGameScreen'

import styles from '../Styles';
import { connect } from 'react-redux';

import { SCREEN_HOME, SCREEN_PLAYING_GAME, SCREEN_GEOBLOCKED, SCREEN_GAME, SCREEN_PRE_GAME, SCREEN_LOGIN, SCREEN_POSTLOGIN_FORM1, SCREEN_POSTLOGIN_FORM2, SCREEN_REGISTER } from '../reducer'

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    renderScreen(){
        const {showScreen} = this.props
        switch (showScreen) {
            case SCREEN_HOME: return <HomeScreen />;
            case SCREEN_GAME: return <GameScreen />;
            case SCREEN_LOGIN: return <LoginScreen />;
            case SCREEN_REGISTER: return <RegisterScreen />;
            case SCREEN_PRE_GAME: return <PreGameScreen />;
            case SCREEN_POSTLOGIN_FORM1: return <PostLoginForm1 />;
            case SCREEN_POSTLOGIN_FORM2: return <PostLoginForm2 />;
            case SCREEN_GEOBLOCKED: return <AnotherScreen />;
            case SCREEN_PLAYING_GAME: return <PlayingGameScreen />;
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
