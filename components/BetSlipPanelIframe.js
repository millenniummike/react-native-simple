import React from "react";
import { ScrollView } from "react-native";
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import { listOfferings, setBetSlipPanel } from '../reducer';

class BetSlipPanelIframe extends React.Component {

    constructor(props) {
        super(props);
        this.addBet = this.addBet.bind(this);
    }

    componentDidMount() {
        this.props.listOfferings('all');
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.bets!==this.props.bets){
            if (nextProps.bets.length>0){
                this.addBet(nextProps.bets[nextProps.bets.length-1].outcome.betOfferId)
            }
        }
      }

    render() {
        return (
            <ScrollView>
                <WebView
                    ref={(view) => this.webView = view}
                    bounces={false}
                    javaScriptEnabled={true}
                    javaScriptEnabledAndroid={true}
                    useWebKit={true}
                    style={{ height: 400, width: 400}}
                    onMessage={this.onMessage}
                    source={{ uri: "https://imported-athlete.glitch.me/#home" }}
                    automaticallyAdjustContentInsets={false}
                />
            </ScrollView>
        );
    }
    onMessage = (e) => {
        console.log(e.nativeEvent.data)
       }

    addBet(outcome) {
        this.webView.injectJavaScript(`
            (function () {
                try {
                WAPI.set(WAPI.BETSLIP_OUTCOMES, {
                    updateMode: WAPI.BETSLIP_OUTCOMES_ARGS.UPDATE_APPEND,
                    outcomes: ['${outcome}'],
                    couponType: WAPI.BETSLIP_OUTCOMES_ARGS.RCT_SINGLE,
                    "stakes": [ 0 ]
                });
                window.ReactNativeWebView.postMessage(JSON.stringify(window.outcomes), '*');
                } catch (e) {
                    
                }
            })();
        `);
    }
}

const mapStateToProps = state => {
    let storedOfferings = state.offerings.map(offering => ({ key: offering.id, ...offering }));
    let storedBets = state.bets.map(bet => ({ key: bet.id, ...bet }));

    return {
      offerings: storedOfferings,
      bets: storedBets
    };
  };
  
  const mapDispatchToProps = {
    listOfferings, setBetSlipPanel
  };

  export default connect(mapStateToProps, mapDispatchToProps)(BetSlipPanelIframe);
// https://confluence.kindredgroup.com/display/~hanake/Kambi+Player+API
