import React from 'react';
import { View, ScrollView, } from 'react-native';
import AnotherScreen from './AnotherScreen';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';

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
            case 3: return <AnotherScreen />;
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
