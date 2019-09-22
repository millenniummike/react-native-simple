import React, { PureComponent } from "react";
import { View, Text} from 'react-native';
import styles from '../Styles';
import BetSlipPanel from '../components/BetSlipPanel';
import { connect } from 'react-redux';

class BlankScreen extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textDefault}>Blank Panel</Text>
                <BetSlipPanel></BetSlipPanel>
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

};

export default connect(mapStateToProps, mapDispatchToProps)(BlankScreen);
