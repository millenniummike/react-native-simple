import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../Styles';
import { addBet, setBetSlipPanel} from '../reducer';
import { connect } from 'react-redux';

class BetButton extends React.Component {
    constructor(props) {
        super(props);
        this.addBet = this.addBet.bind(this);
      }

      addBet(outcomeId) {
        this.props.addBet(outcomeId);
        this.props.setBetSlipPanel(true);
    }

    render() {
        const { label } = this.props;
        const { odds } = this.props;
        const { betOfferId } = this.props;
        return (
            <View style={styles.betButtonContainer}>
                <TouchableOpacity
                    style={styles.buttonBet}
                    activeOpacity={.5}
                    onPress={() => { this.addBet({betOfferId})}}
                    >
                    <View style={styles.buttonInternal}>
                        <Text style={styles.oddsLabel}>{label}</Text>
                        <Text style={styles.odds}>{odds}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};


const mapDispatchToProps = {
    addBet, setBetSlipPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(BetButton);