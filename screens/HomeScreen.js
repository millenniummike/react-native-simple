import React from 'react';
import { View, Dimensions, ScrollView, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground, Text, Image } from 'react-native';
import ButtonPanel from '../components/NavButtonPanel';
import BetButton from '../components/BetButton';
import styles from '../Styles';
import { connect } from 'react-redux';
import { listOfferings, listHomePage, setBetSlipPanel, changeLivePanelIndex, setScreen, setOTAVersion } from '../reducer';
import moment from 'moment';
import { SCREEN_BLANK } from '../reducer'
import codePush from "react-native-code-push";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all",
            navigation: [],
            visible: true
        }
    }

    componentDidMount() {
        this.props.listOfferings('all');
        this.props.listHomePage();
        this.props.setBetSlipPanel(false);
        codePush.getUpdateMetadata().then((data) => {
            this.props.setOTAVersion(data.label)
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors !== this.props.errors) {
            //alert("Attempt reload?")
            //this.props.listHomePage();
        }
    }

    renderCarouselItem = ({ item, index }) => {
        const { backgroundColor } = item;
        console.log(item)
        return (
            <TouchableOpacity style={[styles.item, { backgroundColor }]}
                onPress={() => {
                    
                }}>
                <ImageBackground style={styles.imageBanner} source={{ 'uri': item.bgImg }}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.carouselHeadline}>{item.headline}</Text>
                        <Text style={styles.carouselBody}>{item.body}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>)
    };

    renderBets(event) {
        return <View>
            <Text style={{ color: "grey" }}>{event.event.state}</Text>
            <Text style={{ color: "grey" }}>{moment(event.event.start).fromNow()}</Text>
            <View key={event.event.id} style={{ color: "grey", marginBottom: 10, marginTop: 5 }}>
                <Text style={{ fontWeight: "bold" }}>{event.event.awayName} </Text>
                <Text style={{ fontWeight: "bold" }}>{event.event.homeName} </Text>

                {event.betOffers.map(betOffer => (
                    <View key={betOffer.id} style={{ width: 180, flex: 1, flexDirection: "row" }}>
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
    }

    renderPanel(data) {
        const { livePanelIndex } = this.props
        const item = data.item
        if (livePanelIndex == item.order && item.events.length > 0) {
            return <View key={item.id}>
                <Text style={styles.liveHeader}>{item.name}</Text>
                <FlatList
                    data={item.events}
                    renderItem={({ item }) =>
                        <View key={item.id}>
                            <Text>{item.event.path[1].name}</Text>
                            <Text>{item.event.name}</Text>
                            {this.renderBets(item)}
                        </View>
                    } />
            </View>
        }
    }

    render() {
        console.disableYellowBox = true;
        const { promo } = this.props;
        const { errors } = this.props;
        const { live } = this.props;
        const { categories } = this.props;
        return (

            <View style={styles.mainContainer}>
                {errors.map(error =>
                    <Text style={{ color: "red" }}>{error}</Text>
                )}
                <ScrollView>
                    <ButtonPanel onClick={() => this.props.setScreen(SCREEN_BLANK)} data={categories} />

                    {promo.length > 0
                        ?
                        <View style={{ margin: 5, padding: 5 }}>
                             <FlatList horizontal
                                    data={promo}
                                    renderItem={(item) => this.renderCarouselItem(item)}
                                />
                            </View>

                            : <ActivityIndicator
                                animating={true}
                                style={styles.loader}
                                size="large"
                            />
                    }
                    <View style={{ margin: 5, padding: 5, backgroundColor: "white" }}>

                        {live.length > 0
                            ?
                            <View style={{ margin: 5, padding: 5 }}>
                                <View style={styles.leafNavigation}>
                                    <Image style={styles.iconTitleImage} source={{ uri: 'https://a1s.unicdn.net/polopoly_fs/1.814643.1482140856!/image/1580177844.png' }} />
                                    <Text style={styles.widgetHeader}>Live</Text>
                                </View>
                                <ScrollView style={styles.buttonNavContainer} horizontal>
                                    {live.map(item => {
                                        if (item.events.length > 0) {
                                            return <TouchableOpacity onPress={() => this.props.changeLivePanelIndex(item.order)} key={item.order}>
                                                <Text style={styles.buttonTab}>{item.name}</Text>
                                            </TouchableOpacity>
                                        }
                                    })}
                                </ScrollView>
                                <FlatList
                                    data={live}
                                    renderItem={(item) => this.renderPanel(item)}
                                />
                            </View>

                            : <ActivityIndicator
                                animating={true}
                                style={styles.loader}
                                size="large"
                            />
                        }
                    </View>
                    <View style={{ paddingBottom: 80 }}></View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    let storedOfferings = state.offerings.map(offering => ({ key: offering.id, ...offering }));
    let storedBets = state.bets.map(bet => ({ key: bet.id, ...bet }));
    let storedPromo = state.promo.map(promo => ({ key: promo.id, ...promo }));
    let storedLive = state.live.map(live => ({ key: live.id, ...live }));
    return {
        offerings: storedOfferings,
        bets: storedBets,
        errors: state.errors,
        promo: storedPromo,
        live: storedLive,
        livePanelIndex: state.livePanelIndex,
        categories: state.categories
    };
};

const mapDispatchToProps = {
    listOfferings, listHomePage, changeLivePanelIndex, setBetSlipPanel, setScreen, setOTAVersion
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
