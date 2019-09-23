import React from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import FastImage from 'react-native-fast-image'
import styles from '../Styles';
import { connect } from 'react-redux';
import { getList1, setScreen, displayMenu, setGame, setOTAVersion} from '../reducer';
import { SCREEN_PRE_GAME } from '../reducer'
import codePush from "react-native-code-push";

class HomeScreen extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getList1()
        codePush.getUpdateMetadata().then((data) => {
            if (data) {
                this.props.setOTAVersion(data.label)
            }
        });
    }
    
    render() {
        const { list } = this.props
        const filteredList1 = list.filter(function (str) {
            return str.tags.indexOf("tableandcards") >= 0
          })

        const filteredList2 = list.filter(function (str) {
            return str.tags.indexOf("animals") >= 0
          })

          const filteredList3 = list.filter(function (str) {
            return str.tags.indexOf("live") >= 0
          })
        console.disableYellowBox = true;

        return (
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.textTitle}>Recommended For You</Text>
                    <FlatList data={list} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                this.props.setScreen(SCREEN_PRE_GAME);
                                this.props.setGame(item);
                                this.props.displayMenu(false);
                            }}>
                                <View style={styles.listItemCarousel}>
                                    <Image style={styles.listItemCarousel} source={{uri: item.imageUrl}}/>
                                    <Text style={styles.textListItem}>{item.gameName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>

                    <Text style={styles.textTitle}>Unibet Picks</Text>
                    <FlatList data={filteredList2} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                this.props.setScreen(SCREEN_PRE_GAME);
                                this.props.setGame(item);
                                this.props.displayMenu(false);
                            }}>
                                <View style={styles.listItem}>
                                    <FastImage style={{width: 100, height: 70}} source={{uri: item.imageUrl}}/>
                                    <Text style={styles.textListItem}>{item.gameName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                    <Text style={styles.textTitle}>New Games</Text>
                    <FlatList data={filteredList3} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                this.props.setScreen(SCREEN_PRE_GAME);
                                this.props.setGame(item);
                                this.props.displayMenu(false);
                            }}>
                                <View style={styles.listItemBig}>
                                    <FastImage style={{width: 170, height: 110}} source={{uri: item.imageUrl}}/>
                                    <Text style={styles.textListItem}>{item.gameName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>

                    <Text style={styles.textTitle}>Table and Cards</Text>
                    <FlatList data={filteredList1} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                this.props.setScreen(SCREEN_PRE_GAME);
                                this.props.setGame(item);
                                this.props.displayMenu(false);
                            }}>
                                <View style={styles.listItem}>
                                    <FastImage style={{width: 100, height: 70}} source={{uri: item.imageUrl}}/>
                                    <Text style={styles.textListItem}>{item.gameName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    getList1, setScreen, displayMenu, setGame, setOTAVersion
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
