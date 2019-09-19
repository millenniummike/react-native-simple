import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, login } from '../reducer';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        state = {
            name:null,
            password:null
        }
    }
    render() {
        console.disableYellowBox = true
        const {loginError} = this.props
        const {name} = state
        const {password} = state

        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Login Screen</Text>
                <Text style={styles.textTitle}>Username</Text>
                <TextInput
                    style={styles.textInputSearch}
                    value={name}
                    onChangeText={text => this.setState({name:text})}
                />
                <Text style={styles.textTitle}>Password</Text>
                <TextInput
                    style={styles.textInputSearch}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => this.setState({password:text})}
                />
                <TouchableOpacity style={styles.buttonTopNav} onPress={() => {
                    this.props.login("name","password")
                    }}>
                    <Text style={{ color: "white" }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ margin:8, padding:4, color: "red" }}>{loginError}</Text>
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