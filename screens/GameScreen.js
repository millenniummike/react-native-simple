import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { getList2 } from '../reducer';

class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editName: 'Enter text'
        };
    }

    componentDidMount() {
        this.props.getList2()
    }
    render() {
        const { list2 } = this.props
        var mappedList = Object.keys(list2).map(function(key) {
            var game = list2[key]
            game.name = key
            return game
        })
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Browse Games</Text> 
                <View>
                    <FlatList data={mappedList} contentContainerStyle={styles.gridContainer}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                            onPress={() => {
                                alert('button click')
                            }}>
                                <View style={styles.listItem}>
                                    <Image style={{width: 100, height: 70}} source={{uri: 'https://a1s.unicdn.net/polopoly_fs/'+item.backgroundImageId+'!/image.png?width=250'}}/>
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
    getList2
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);