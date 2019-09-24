import React, { PureComponent } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { listSport, goBackScreen } from '../reducer';
import BetButtonPanel from '../components/BetButtonPanel';

class SportScreen extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { sport } = this.props
        this.props.listSport(sport.name.toLowerCase());
    }

    renderBets(event) {
        return <BetButtonPanel event={event}/>
    }

    render() {
        const { sport } = this.props
        const { sportList } = this.props
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.props.goBackScreen()}>
                <Text style={styles.buttonTab}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.textHeader}>{sport.name}</Text>
                <View style={styles.containerCategory}>

                    { sportList ? 
                        <FlatList
                            data={sportList.events}
                            renderItem={({ item }) =>
                                <View style={styles.category} key={item.event.id}>
                                    <Text style={[styles.colorLight, styles.textLarge]}> {item.event.path[1].name}</Text>
                                <View style={{backgroundColor:"#fff", padding:10}}>
                                    <Text>{item.event.awayName}</Text>
                                    <Text>{item.event.homeName}</Text>
                                    {this.renderBets(item)}
                                    </View>
                                </View>
                            }/>

                            : <ActivityIndicator
                                    animating={true}
                                    style={styles.loader}
                                    size="large"
                                />
                        }
                    </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    listSport, goBackScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(SportScreen);
