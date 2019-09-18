import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image'
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, getList1, displayMenu, setGame, applyFilterList1} from '../reducer';
import { SCREEN_LOGIN, SCREEN_PLAYING_GAME, SCREEN_GAME } from '../reducer'

class PreGameScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getList1()
    }
    render() {
        const { game } = this.props
        const { loggedIn } = this.props
        const { list } = this.props
        const { previousScreen } = this.props
        var mappedList = Object.keys(list).map(function (key) {
            var game = list[key]
            game.name = key
            return game
        })
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                {game ?
                    <View>
                        <TouchableOpacity onPress={() => {
                                this.props.setScreen(previousScreen)
                            }}
                                style={styles.button}>
                                <Text style={{ color: "white" }}>Back</Text>
                            </TouchableOpacity>
                        <FastImage style={styles.imageGameHeader} source={{uri: game.imageUrl}}/>
                        <Text style={styles.textGameTitle}>{game.gameName}</Text>
                        {!loggedIn ?
                            <TouchableOpacity onPress={() => {
                                this.props.setScreen(SCREEN_LOGIN )
                            }}
                                style={styles.buttonBig}>
                                <Text style={{ color: "white" }}>Log In To Play</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.props.setScreen(SCREEN_PLAYING_GAME)}
                                style={styles.buttonBig}>
                                <Text style={{ color: "white" }}>Play</Text>
                            </TouchableOpacity>
                        }
                    </View>
                    :
                    <View>
                        <Text>No game selected</Text>
                    </View>
                }
                <View>
                    <Text style={styles.textTitle}>Tags</Text>
                    {game.tags ?
                        <FlatList numColumns="4" data={game.tags} contentContainerStyle={styles.x}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                style={styles.buttonTag}
                                onPress={() => {
                                    this.props.setScreen(SCREEN_GAME);
                                    this.props.applyFilterList1(item)
                                    this.props.displayMenu(false);
                                }}>
                                    <Text style={styles.textListItem}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                    :
                        <Text style={styles.textGameTitle}>No tags</Text>
                        }
                    <Text style={styles.textTitle}>Recommended For You</Text>
                    <FlatList data={mappedList} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.setGame(item);
                                    this.props.displayMenu(false);
                                }}>
                                <View style={styles.listItem}>
                                    <FastImage style={{ width: 100, height: 70 }} source={{ uri: item.imageUrl }} />
                                    <Text style={styles.textListItem}>{item.gameName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    setScreen, getList1, displayMenu, setGame, applyFilterList1
};

export default connect(mapStateToProps, mapDispatchToProps)(PreGameScreen);