import React from 'react';
import { View, ScrollView, } from 'react-native';
import MenuScreen from './MenuScreen';
import HomeScreen from './HomeScreen';
import ListScreen from './ListScreen';

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
            case 2: return <ListScreen />;
            case 3: return <MenuScreen />;
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
