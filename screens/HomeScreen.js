import React from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import styles from '../Styles';
import { connect } from 'react-redux';
import { getList1 } from '../reducer';


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getList1()
    }
    render() {
        const { list } = this.props
        var mappedList = Object.keys(list).map(function(key) {
            var game = list[key]
            game.name = key
            return game
        })
        console.disableYellowBox = true;

        return (
                <ScrollView style={styles.mainContainer}>
                    <Text style={styles.textTitle}>Recommended For You</Text>
                    <FlatList data={mappedList} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                alert('button click')
                            }}>
                                <View style={styles.listItemBig}>
                                    <Image style={{width: 170, height: 110}} source={{uri: item.imageUrl}}/>
                                    <Text style={styles.textListItem}>{item.gameName}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>

                    <Text style={styles.textTitle}>Unibet Picks</Text>
                    <FlatList data={mappedList} horizontal={true} contentContainerStyle={styles.carousel}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                alert('button click')
                            }}>
                                <View style={styles.listItem}>
                                    <Image style={{width: 100, height: 70}} source={{uri: item.imageUrl}}/>
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
    getList1
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
