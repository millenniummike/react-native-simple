import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { setScreen, toggleMenu, setLoggedIn} from '../reducer';

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { showMenu } = this.props
        const { loggedIn } = this.props

        if (showMenu) {
            return <ScrollView style={styles.panel}>
                <Text style={{ color: "white", fontSize:16, marginBottom:4}}>Menu</Text>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(1)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(2)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Browse Games</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(2)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Browse Games</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(2)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Browse Games</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(2)
                    this.props.toggleMenu()
                    }}>
                    <Text style={{ color: "white" }}>Browse Games</Text>
                </TouchableOpacity>

                { loggedIn ?
                <View>
                    <TouchableOpacity onPress={() => {
                        this.props.setScreen(1)
                        this.props.toggleMenu()
                        }}>
                        <Text style={{ color: "white" }}>Exciting Loggedin Feature1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.props.setScreen(1)
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