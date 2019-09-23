import React from 'react';
import { View, TouchableOpacity, ActivityIndicator, FlatList, Text } from 'react-native';
import styles from '../Styles';

class MyBetsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            betPanelShowing: false,
            category: 'all'
        };
        this.betSlip = React.createRef();
        this.addBet = this.addBet.bind(this);
        this.obClick = this.onClick.bind(this);
    }
    componentDidMount() {
        const { category } = this.state;
        fetch('https://ctd-api.kambi.com/offering/api/v3/kambiplay/listView/' + category + '.json?lang=en_GB&market=GB&client_id=2&channel_id=1&ncid=1560763113401&categoryGroup=COMBINED&displayDefault=true&category=totals')
            .then(response => response.json())
            .then(data => this.setState({ events: data.events }));
    }

    addBet(outcomeId) {
        this.betSlip.current.onClick(outcomeId)
        this._panel.show()
    }

    onClick() {
        console.log("Category change click")
    }

    render() {
        console.disableYellowBox = true;
        const { events } = this.state;
        const { category } = this.state;
        const { betPanelShowing } = this.state;

        return (

            <View style={styles.mainContainer}>
                <Text>My Bets Screen</Text>
                <FlatList
                    data={myBets}
                    renderItem={({ item }) =>
                        <View style={styles.containerCategory} key={item.name}>
                            <Text onPress={() => {
                                alert('press')
                            }}>{item.name}</Text>
                            <Text>{item.amount}</Text>
                        </View>
                    }
                />
                <View style={{ paddingBottom: 80 }}></View>
            </View>
        );
    }
}

export default MyBetsScreen;


const myBets = [
    { name: "bet1", amount: "33.2" },
    { name: "bet2", amount: "33.2" },
    { name: "bet3", amount: "33.2" },
    { name: "bet4", amount: "33.2" }
]