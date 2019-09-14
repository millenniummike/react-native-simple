import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, setPostLogin1, setLoggedIn, setMenuBlocked} from '../reducer';
import { SCREEN_HOME } from '../reducer'

class PostLoginForm1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setMenuBlocked(true)
    }

    render() {
        console.disableYellowBox = true
        const {previousScreen} = this.props
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Post Login Form 1</Text>
                <TouchableOpacity style={styles.buttonTopNav} onPress={() => {
                    this.props.setPostLogin1(false)
                    this.props.setMenuBlocked(false)
                    this.props.setScreen(previousScreen)
                    }}>
                    <Text style={{ color: "white" }}>Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTopNav} onPress={() => {
                    this.props.setLoggedIn(false)
                    this.props.setMenuBlocked(false)
                    this.props.setScreen(previousScreen)
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
    setScreen, setPostLogin1, setLoggedIn, setMenuBlocked
};

export default connect(mapStateToProps, mapDispatchToProps)(PostLoginForm1);