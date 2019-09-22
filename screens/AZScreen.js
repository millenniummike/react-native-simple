import React from 'react';
import { View, ScrollView, Text, TextInput, ActivityIndicator, FlatList } from 'react-native';
import CategoryButtonPanel from '../components/CategoryButtonPanel';
import styles from '../Styles';
import SvgUri from 'react-native-svg-uri'
import { connect } from 'react-redux';
import { addBet, listAZ } from '../reducer';

class AZScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.listAZ();
    }
    render() {
        console.disableYellowBox = true;
        const { az } = this.props;
        return (
            <View style={styles.mainContainer}>
                <ScrollView
                    vertical
                    stickyHeaderIndices={[0]}
                >
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={() => console.log('TODO: filter the list')}
                        placeholder="Search Sports, Leagues or Teams"
                        placeholderTextColor="grey"
                    />
                    <View>
                        <Text style={styles.sectionTitle}>POPULAR</Text>
                        
                    </View>

                    <Text style={styles.sectionTitle}>ALL SPORTS</Text>

                    {az.length > 0
                                ? 
                    <FlatList
                        data={az}
                        renderItem={({ item }) =>
                            <View style={[styles.containerCategory, { backgroundColor: "white" }]} key={item.name}>
                                <View style={{width:50,height:50}}>
                                    <SvgUri style={styles.iconImage}
                                        width="30"
                                        height="30"
                                        source={{ uri: 'https://static.kambicdn.com/client/ubuk/icons/navicons/sports/' + item.iconClassName + '.svg' }}
                                    />
                                </View>
                                <Text onPress={() =>
                                    this.props.navigation.push('Screen2', {
                                        sportsCategory: item.name
                                    })} style={[styles.colorDark, styles.width75, styles.floatRight, styles.textMedium, { paddingTop: 15 }]}>{item.name}</Text>
                                <Text onPress={() =>
                                    this.props.navigation.push('Screen2', {
                                        sportsCategory: item.name
                                    })} style={[styles.colorDark, styles.textMedium, styles.floatRight, { paddingTop: 15 }]}>{item.boCount}</Text>
                            </View>
                        }
                    />
                    : <ActivityIndicator
                                    animating={true}
                                    style={styles.loader}
                                    size="large"
                                />
                    }
                    <View style={{ paddingBottom: 80 }}></View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    let storedOfferings = state.offerings.map(offering => ({ key: offering.id, ...offering }));
    let storedBets = state.bets.map(bet => ({ key: bet.id, ...bet }));
    let storedAZ = state.az.map(sport => ({ key: sport.id, ...sport }));
    return {
      offerings: storedOfferings,
      az: storedAZ,
      bets: storedBets
    };
  };
  
  const mapDispatchToProps = {
    listAZ, addBet
  };

  export default connect(mapStateToProps, mapDispatchToProps)(AZScreen);

//** TODO get from api */
const categories = [
    {
        "id": 1,
        "name": "Upcoming",
        "icon": "user"
    },
    {
        "id": 2,
        "name": "Streaming",
        "icon": "photo"
    },
    {
        "id": 3,
        "name": "Cricket World Cup",
        "icon": "fire"
    },
    {
        "id": 4,
        "name": "Racing",
        "icon": "eye"
    },
    {
        "id": 5,
        "name": "Euro Qualifiers",
        "icon": "wrench"
    },
    {
        "id": 6,
        "name": "Women's World Cup",
        "icon": "briefcase"
    },
    {
        "id": 7,
        "name": "Football",
        "icon": "user"
    },
    {
        "id": 8,
        "name": "Odd Boosts",
        "icon": "globe"
    },
    {
        "id": 9,
        "name": "Tennis",
        "icon": "beer"
    }
];