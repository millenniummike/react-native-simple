import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';

class MenuScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text>Menu Screen</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);