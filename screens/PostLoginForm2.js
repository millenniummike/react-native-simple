import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, setPostLogin2, setLoggedIn} from '../reducer';

class PostLoginForm2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Post Login Form 2</Text>
                <TouchableOpacity style={styles.buttonTopNav} onPress={() => {
                    this.props.setPostLogin2(false)
                    this.props.setScreen(1)
                    }}>
                    <Text style={{ color: "white" }}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTopNav} onPress={() => {
                    this.props.setLoggedIn(false)
                    this.props.setScreen(1)
                    }}>
                    <Text style={{ color: "white" }}>Exit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    setScreen, setPostLogin2, setLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLoginForm2);