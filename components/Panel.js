import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { setScreen } from '../reducer';

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { showMenu } = this.props

        if (showMenu) {
            return <View style={styles.panel}>
                <Text>Menu PANEL</Text>
                <Text>1</Text>
                <Text>2</Text>
            </View>
        } else {
            return <View></View>
        }
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    setScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);