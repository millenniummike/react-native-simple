import React from 'react';
import { View, TouchableOpacity, Text, Dimensions, Animated } from 'react-native';
import BetSlipPanelIframe from './BetSlipPanelIframe';
import styles from '../Styles';
import { setBetSlipPanel } from '../reducer';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');

class BetSlipPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideAnim: new Animated.Value(height - 130)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.betSlipPanelShow !== this.props.betSlipPanelShow) {
            this.animatePanel()
        }
    }

    animatePanel() {
        const { betSlipPanelShow } = this.props

        if (betSlipPanelShow) {
            return Animated.timing(
                this.state.slideAnim,
                {
                    toValue: height - 130,
                    duration: 300,
                }
            ).start();
        }
        else {
            return Animated.timing(
                this.state.slideAnim,
                {
                    toValue: height / 2,
                    duration: 300,
                }
            ).start();
        }
    }

    render() {
        const { betSlipPanelShow } = this.props
        const { slideAnim } = this.state
        return <Animated.View style={[styles.panel, { top: slideAnim }]} >
            <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => this.props.setBetSlipPanel(!betSlipPanelShow)}>
                <View style={styles.betSlipPanelHeader}>
                    <View>
                        <Text style={styles.betSlipPanelHeaderText}>Betslip Panel</Text>
                    </View>
                    {betSlipPanelShow ?
                        <View style={[styles.triangleDown, this.props.style]} />
                        :
                        <View style={[styles.triangle, this.props.style]} />
                      }
                </View>
            </TouchableOpacity>
            {<BetSlipPanelIframe />}
        </Animated.View>
    }
}

const mapStateToProps = state => {
    return {
        betSlipPanelShow: state.betSlipPanelShow
    };
};

const mapDispatchToProps = {
    setBetSlipPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(BetSlipPanel);