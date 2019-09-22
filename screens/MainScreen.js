import React from 'react';
import { View, ScrollView, } from 'react-native';
import AZScreen from './AZScreen';
import PlayScreen from './PlayScreen';
import MyBetsScreen from './MyBetsScreen';
import HomeScreen from './HomeScreen';
import SportScreen from './SportScreen';
import LoginScreen from './LoginScreen';
import PostLoginForm1 from './PostLoginForm1';
import PostLoginForm2 from './PostLoginForm2';
import RegisterScreen from './RegisterScreen';

import { SCREEN_HOME, SCREEN_SPORT, SCREEN_BLANK, SCREEN_IN_PLAY, SCREEN_AZ, SCREEN_REGISTER, SCREEN_POSTLOGIN_FORM1, SCREEN_POSTLOGIN_FORM2, SCREEN_LOGIN, SCREEN_MYBETS, SCREEN_GEOBLOCKED} from '../reducer'

import styles from '../Styles';
import { connect } from 'react-redux';
import BlankScreen from './BlankScreen';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    renderScreen(){
        const {showScreen} = this.props
        switch (showScreen) {
            case SCREEN_HOME: return <HomeScreen />;
            case SCREEN_SPORT: return <SportScreen />;
            case SCREEN_IN_PLAY: return <PlayScreen />;
            case SCREEN_AZ: return <AZScreen />;
            case SCREEN_LOGIN: return <LoginScreen />;
            case SCREEN_REGISTER: return <RegisterScreen />;
            case SCREEN_MYBETS: return <MyBetsScreen />;
            case SCREEN_POSTLOGIN_FORM1: return <PostLoginForm1 />;
            case SCREEN_POSTLOGIN_FORM2: return <PostLoginForm2 />;
            case SCREEN_GEOBLOCKED: return <AnotherScreen />;
            case SCREEN_BLANK: return <BlankScreen />;
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
