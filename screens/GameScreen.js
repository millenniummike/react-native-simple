import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image'
import styles from '../Styles';
import { connect } from 'react-redux';
import { getList1, setScreen, goBackScreen, setGame, displayMenu, applyFilterList1, displayFilterPanel } from '../reducer';
import { SCREEN_PRE_GAME } from '../reducer'

class GameScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editName: 'Enter text'
        };
    }

    componentDidMount() {
        this.props.getList1()
    }
    render() {
        const { list } = this.props
        const { filterList1 } = this.props
          var filteredList = list.filter(function (str) {
            var keyword = filterList1.toLowerCase()
            if (keyword=="") return true
            return str.tags.indexOf(keyword) >= 0
          })
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {
                                this.props.goBackScreen()
                            }}
                                style={styles.button}>
                                <Text style={{ color: "white" }}>Back</Text>
                            </TouchableOpacity>
                <Text style={styles.textTitle}>Browse Games ({filteredList.length})</Text>
                <TextInput
                    style={styles.textInputSearch}
                    onChangeText={text => this.props.applyFilterList1(text)}
                    value={filterList1}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.displayFilterPanel(true);
                    }}>
                    <Text style={styles.textListItem}>Show Filter Panel</Text>
                </TouchableOpacity>
                <View>
                    <FlatList data={filteredList} numColumns="3" contentContainerStyle={styles.gridContainer}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.setGame(item);
                                    this.props.setScreen(SCREEN_PRE_GAME);
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
    getList1, goBackScreen, setScreen, displayMenu, setGame, applyFilterList1, displayFilterPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);