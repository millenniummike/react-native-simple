import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';

class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editName: 'Enter text'
        };
    }

    componentDidMount() {
        //this.props.clearList()
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Game Screen</Text>
                
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);