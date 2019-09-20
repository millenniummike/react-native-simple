import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { setScreen, toggleMenu, setLoggedIn} from '../reducer';
import { SCREEN_HOME, SCREEN_GAME, SCREEN_REGISTER } from '../reducer'
class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { showMenu } = this.props
        const { showMenuBlocked } = this.props
        const { loggedIn } = this.props
        const { OTAVersion } = this.props

        if (showMenu && !showMenuBlocked) {
            return <ScrollView style={styles.panel}>
                <Text style={{ color: "white", fontSize:16, marginBottom:4}}>Menu</Text>
                <Text style={{ color: "white" }}>OTA Version={OTAVersion}</Text>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(SCREEN_HOME)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(SCREEN_GAME)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Browse Games</Text>
                </TouchableOpacity>

                { loggedIn ?
                <View>
                    <TouchableOpacity onPress={() => {
                        this.props.setScreen(SCREEN_REGISTER)
                        this.props.toggleMenu()
                        }}>
                        <Text style={{ color: "white" }}>Exciting Loggedin Feature1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.setScreen(SCREEN_HOME)
                        this.props.toggleMenu()
                        this.props.setLoggedIn(false)
                        }}>
                        <Text style={{ color: "white" }}>Logout</Text>
                    </TouchableOpacity> 
                </View> 
                :
                <View></View>
                }
                <TouchableOpacity onPress={() => {
                    }}>
                    <Text style={{ color: "white" }}></Text>
                </TouchableOpacity>
            </ScrollView>
        } else {
            return <View></View>
        }
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    setScreen, toggleMenu, setLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);