import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { ScrollView, Image, View, TouchableOpacity, Text } from 'react-native';
import { setScreen, toggleMenu, setLoggedIn } from '../reducer';
import { SCREEN_HOME, SCREEN_GAME, SCREEN_REGISTER } from '../reducer'
import codePush from "react-native-code-push";

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    onButtonUpdatePress() {
        codePush.sync({
          updateDialog: true,
          installMode: codePush.InstallMode.IMMEDIATE
        });
      }
    render() {
        const { showMenu } = this.props
        const { showMenuBlocked } = this.props
        const { loggedIn } = this.props
        const { OTAVersion } = this.props

        if (showMenu && !showMenuBlocked) {
            return <ScrollView style={styles.panel}>
                <TouchableOpacity onPress={() => {
                    this.props.setScreen(SCREEN_HOME)
                    this.props.toggleMenu()
                }}>
                    <View style={styles.menuContainer}>
                        <Image style={styles.imageBottomNav} source={require("../media/tab_menu.png")}></Image>
                        <Text style={styles.textMenu}>Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.setScreen(SCREEN_GAME)
                    this.props.toggleMenu()
                }}>
                    <View style={styles.menuContainer}>
                        <Image style={styles.imageBottomNav} source={require("../media/tab_menu.png")}></Image>
                        <Text style={styles.textMenu}>Browse Games</Text>
                    </View>
                </TouchableOpacity>

                {loggedIn ?
                    <View>
                        <TouchableOpacity onPress={() => {
                            this.props.setScreen(SCREEN_REGISTER)
                            this.props.toggleMenu()
                        }}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.imageBottomNav} source={require("../media/tab_menu.png")}></Image>
                                <Text style={styles.textMenu}>Browse Games</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.setScreen(SCREEN_HOME)
                            this.props.toggleMenu()
                            this.props.setLoggedIn(false)
                        }}>
                            <View style={styles.menuContainer}>
                                <Image style={styles.imageBottomNav} source={require("../media/tab_menu.png")}></Image>
                                <Text style={styles.textMenu}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    :
                    <View></View>
                }
                <TouchableOpacity onPress={() => {
                }}>
                    <Text style={styles.textMenu}></Text>
                </TouchableOpacity>
                <View style={styles.menuContainer}>
                    <Text style={styles.textMenu}>OTA Version={OTAVersion}</Text>
                </View>

                <TouchableOpacity style={styles.buttonTopNav} onPress={this.onButtonUpdatePress}>
                    <Text>Update</Text>
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