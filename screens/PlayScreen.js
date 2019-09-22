import React from 'react';
import { Animated, View, ScrollView, ActivityIndicator, Dimensions, Text } from 'react-native';
import ButtonPanel from '../components/ButtonPanel';
import styles from '../Styles';
import BetButton from '../components/BetButton'
import { connect } from 'react-redux';
import { listOfferings, listInPlay, addBet } from '../reducer';

const { width, height } = Dimensions.get("window");
class PlayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'landing',
      betPanelTop: new Animated.Value(0),
      betPanelHidden: false
    };
    this.onClick = this.onClick.bind(this);
    this.addBet = this.addBet.bind(this);
  }

  addBet(outcomeId) {
    this.props.addBet(outcomeId);
  }
  componentDidMount() {
      this.props.listInPlay();
  }

  onClick(name) {
    this.setState({
      filter: name
    }, () => {
      this.changeFilter();
    });
  }

  changeFilter() {
    const { filter } = this.state;
  }
  render() {
    //console.disableYellowBox = true;
    const { inPlayGroups } = this.props;
    const { inPlaySports } = this.props;
    return (
      <View style={styles.mainContainer}>
        <ButtonPanel onClick={this.onClick} data={inPlayGroups} />
        <View>
          <ScrollView vertical showsHorizontalScrollIndicator={false} stickyHeaderIndices={[0]}>
            
            {inPlaySports.length > 0
              ?
              <View style={styles.playContainer} >
                {inPlayGroups.map(item => (
                  <View tyle={{ color: "red", padding: 10 }} key={item.sport}>
                    <View style={styles.inPlaySport}>
                      <Text style={{ color: "red", padding: 10 }}>@ In Play</Text>
                      <Text style={styles.categoryTitle}>{item.sport}</Text>
                    </View>

                    {item.data.slice(1, 5).map(info => (
                      <View key={info.event.id}>
                        <View style={styles.path}>
                          <Text style={styles.path}>{info.event.group}</Text>
                        </View>
                        <View style={{ backgroundColor: "white", padding: 10 }}>
                          <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ width: width * 0.2 }}>
                              <Text style={{ padding: 5, color: "grey" }}>80:25</Text>
                            </View>
                            <View style={{ width: width * 0.2 }}>
                              <Text style={{ fontWeight: "bold", color: "black" }}>0</Text>
                              <Text style={{ fontWeight: "bold", color: "black" }}>1</Text>
                            </View>
                            <View style={{ width: width * 0.4 }}>
                              <Text style={{ fontWeight: "bold", color: "black" }}>{info.event.homeName}</Text>
                              <Text style={{ fontWeight: "bold", color: "black" }}>{info.event.awayName}</Text>
                            </View>
                          </View>
                          {
                            typeof info.mainBetOffer != "undefined" ?
                              <View style={{ flex: 1, flexDirection: "row" }}>
                                {info.mainBetOffer.outcomes.map(outcome => (
                                  <View key={outcome.id} style={{ width: 100, flex: 1, flexDirection: "row" }}>
                                    <BetButton addBet={this.addBet} betOfferId={outcome.id} label={outcome.type} odds={outcome.oddsFractional}></BetButton>
                                  </View>
                                ))}
                              </View>
                              :
                              <View></View>
                          }
                        </View>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
              :
              <ActivityIndicator
                animating={true}
                style={styles.loader}
                size="large"
              />
            }
            <View style={{ paddingBottom: 80 }}></View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const storedOfferings = state.offerings.map(offering => ({ key: offering.id, ...offering }));
  const storedBets = state.bets.map(bet => ({ key: bet.id, ...bet }));
  const storedInPlayGroups = state.inPlayGroups.map(item => ({ key: item.id, ...item }));
  const storedInPlaySports = state.inPlaySports.map(item => ({ key: item.id, ...item }));
  return {
    offerings: storedOfferings,
    bets: storedBets,
    inPlayGroups: storedInPlayGroups,
    inPlaySports: storedInPlaySports
  };
};

const mapDispatchToProps = {
  listOfferings, listInPlay, addBet
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayScreen);