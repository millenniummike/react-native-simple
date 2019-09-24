import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import BetButton from './BetButton'
import moment from 'moment';

class BetButtonPanel extends React.Component {
  render() {
      const {event} = this.props
      return (
        <View>
            <Text style={{ color: "grey" }}>{event.event.state}</Text>
            <Text style={{ color: "grey" }}>{moment(event.event.start).fromNow()}</Text>
            <View key={event.event.id} style={{ color: "grey", marginBottom: 10, marginTop: 5 }}>
                <Text style={{ fontWeight: "bold" }}>{event.event.awayName} </Text>
                <Text style={{ fontWeight: "bold" }}>{event.event.homeName} </Text>

                {event.betOffers.map(betOffer => (
                    <View key={betOffer.id} style={{ width: 180, flex: 1, flexDirection: "column" }}>
                        {betOffer.outcomes.map(outcome => (
                            <View>
                                <BetButton key={outcome.id} betOfferId={outcome.id} label={outcome.label} odds={outcome.oddsFractional}></BetButton>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
            <View style={{ backgroundColor: "#ddd", height: 1 }} />
        </View>
      );
    }
}

export default BetButtonPanel;
