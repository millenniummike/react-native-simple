import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles';
import BetSlipPanel from '../components/BetSlipPanel';

class EventScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            betOffers: []
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
            .then(data => {
                this.setState({ events: data.events, betOffers: data.betOffers })
            });
    }
    render() {
        const { betOffers } = this.state;
        const { events } = this.state;
        const { navigation } = this.props;
        const sportsCategory = navigation.getParam('sportsCategory', '');
        const id = navigation.getParam('id', '');

        return (
            <View style={styles.mainContainer}>
                <View style={styles.leafNavigation}>
                    <Text style={[styles.colorDark, styles.textLarge]} onPress={() => this.props.navigation.goBack()}>{'<'}</Text>
                </View>
                <ScrollView style={styles.mainContainer}
                    vertical
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{padding:10}}>
                    {events.map(item => (
                        <View >
                            <View style={styles.category}>
                                <Text style={styles.start}>{item.start}</Text>
                                <Text style={styles.eventName}>{item.name}</Text>
                            </View>
                        </View>
                    ))}

                    {betOffers.map(item => (
                        <View style={{margin:10, padding:10, backgroundColor:"white"}}>
                            <Text style={{color:"black"}}>{item.criterion.label}</Text>
                            {item.outcomes.map(outcome => (
                                <View style={styles.betContainer}>
                                    <TouchableOpacity
                                        style={styles.buttonBet}
                                        activeOpacity={.5}>
                                        <View style={styles.buttonInternal}>
                                            <Text style={styles.oddsLabel}>{outcome.label}</Text>
                                            <Text style={styles.odds}>{outcome.oddsFractional}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    ))}
                    </View>
                </ScrollView>
                <BetSlipPanel></BetSlipPanel>
            </View>
        );
    }
}

export default EventScreen;