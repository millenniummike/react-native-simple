import React from 'react';
import { View, ScrollView, Button, Text, TextInput, StyleSheet } from 'react-native';
import CustomHeader from '../components/CustomHeader'

class BetScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            outcomes: []
        };
        const { navigation } = this.props;
        const sportsCategory = navigation.getParam('sportsCategory', '');
        const id = navigation.getParam('id', '');
    }
    componentDidMount() {
        const { navigation } = this.props;
        const sportsCategory = navigation.getParam('sportsCategory', '').toLowerCase().replace(/\s/gi, "_");
        const id = navigation.getParam('id', '');
        fetch('https://eu-offering.kambicdn.org/offering/v2018/ubuk/betoffer/event/' + id + '.json?lang=en_GB&market=GB&client_id=2&channel_id=1&ncid=1560199881138&includeParticipants=true')
            .then(response => response.json())
            .then(data => this.setState({ events: data.events, outcomes: data.betOffers}));
    }
    render() {
        const {events} = this.state;
        const {outcomes} = this.state;
        const { navigation } = this.props;
        const sportsCategory = navigation.getParam('sportsCategory', '');
        const id = navigation.getParam('id', '');

        return (
            <View style={styles.mainContainer}>
                <CustomHeader />
                
                <View style={styles.title}>
                    <Text style={styles.back}
                        onPress={() => this.props.navigation.goBack()}
                    >{'<'}</Text>
                    <Text style={styles.sectionTitle}>{sportsCategory}</Text>
                </View>
                <ScrollView style={styles.mainContainer}
                    vertical
                    showsHorizontalScrollIndicator={false}
                >
                    {events.map(item => (
                        <View style={styles.category} key={item.eventId}>
                            <Text style={styles.sectionTitle}>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: "white",
    },
    bet: {
        backgroundColor: 'green',
        color: "white",
        margin: 1,
        padding: 2,
        fontSize: 12
    },
    category: {
        backgroundColor: '#333333',
        color: "white",
        margin: 0.2,
        padding: 2
    },
    title: {
        flexDirection: 'row'
    },
    back: {
        fontSize:20,
        color: "white",
        padding:10
    },
    text: {
        color: "white",
        fontSize: 12,
        padding: 10
    },
    sectionTitle: {
        color: "#ddd",
        fontSize: 20,
        padding: 10
    },
    mainContainer: {
        backgroundColor: '#000',
        paddingBottom:100
    },
    image: {
        width: 50,
        height: 50,
        padding: 20
    },
    search: {
        padding: 10,
        backgroundColor: '#000',
        color: "white",
        flex: 1,
        flexDirection: 'row'
    },
    searchInput: {
        padding: 10,
        width: "92%",
        backgroundColor: '#333333',
        color: "white"
    }
});

export default BetScreen;