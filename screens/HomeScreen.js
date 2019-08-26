import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from '../Styles';
import { connect } from 'react-redux';
import { } from '../reducer';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.disableYellowBox = true;

        return (
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.textTitle}>Home Screen</Text>
                </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
