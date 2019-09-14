import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, login } from '../reducer';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.disableYellowBox = true;
        var name='fred'
        var password='password'
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Login Screen</Text>
                <TextInput
                    style={styles.textInputSearch}
                    value={name}
                />
                <TextInput
                    style={styles.textInputSearch}
                    value={password}
                />
                <TouchableOpacity style={styles.buttonTopNav} onPress={() => {
                    this.props.login("name","password")
                    }}>
                    <Text style={{ color: "white" }}>Login Authorized</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    setScreen, login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);