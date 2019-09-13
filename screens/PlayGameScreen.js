import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { setScreen, getList1, displayMenu, setGame} from '../reducer';

class PlayGameScreen extends React.Component {
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
                        <Image style={styles.imageGameHeader} source={{uri: game.imageUrl}}/>
                        <Text style={styles.textGameTitle}>{game.gameName}</Text>
                        {!loggedIn ?
                            <TouchableOpacity onPress={() => this.props.setScreen(3)}
                                style={styles.buttonBig}>
                                <Text style={{ color: "white" }}>Log In To Play</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => this.props.setScreen(3)}
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
                    <Text style={styles.textTitle}>Recommended For You</Text>
                    <FlatList data={mappedList} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.setGame(item);
                                    this.props.setScreen(6);
                                    this.props.displayMenu(false);
                                }}>
                                <View style={styles.listItem}>
                                    <Image style={{ width: 100, height: 70 }} source={{ uri: item.imageUrl }} />
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
    setScreen, getList1, displayMenu, setGame
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayGameScreen);