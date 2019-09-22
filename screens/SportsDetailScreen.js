import React from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import styles from '../Styles';
import BetSlipPanel from '../components/BetSlipPanel';

class SportsDetailScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sports: []
        };
    }
    componentDidMount() {
        const { navigation } = this.props;
        const sportsCategory = navigation.getParam('sportsCategory', '').toLowerCase().replace(/\s/gi, "_");
        fetch('https://eu-offering.kambicdn.org/offering/v2018/ubuk/listView/' + sportsCategory + '.json?lang=en_GB&market=GB')
            .then(response => response.json())
            .then(data => this.setState({ sports: data.events }));
    }
    render() {
        const { sports } = this.state;
        const { navigation } = this.props;
        const sportsCategory = navigation.getParam('sportsCategory', '');
        const resultsComparator = function (res1, res2) {
            var prod1 = res1.event.path[1].name;
            var prod2 = res2.event.path[1].name;
            return prod1.localeCompare(prod2);
        }
        const sportsSorted = sports.sort(resultsComparator);

        return (
            <View style={styles.mainContainer}>
                <View style={styles.leafNavigation}>
                    <Text style={[styles.colorDark, styles.textLarge]} onPress={() => this.props.navigation.goBack()}>{'<'}</Text>
                    <Text style={[styles.colorDark, styles.textLarge]}>{sportsCategory}</Text>
                </View>

                <ScrollView style={styles.mainContainer}
                    vertical
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.containerCategory}>

                    { sportsSorted ? 
                        <FlatList
                            data={sportsSorted}
                            renderItem={({ item }) =>
                                <View style={styles.category} key={item.event.id}>
                                    <Text style={[styles.colorLight, styles.textLarge]}> {item.event.path[1].name}</Text>
                                <View style={{backgroundColor:"#fff", padding:10}}>
                                    <Text style={[styles.colorDark, styles.width75, styles.floatRight, styles.textSMall]}>{item.event.start}</Text>
                                    <Text onPress={() => this.props.navigation.push('Screen3', {
                                        id: item.event.id
                                    })} style={[styles.colorDark, styles.textMedium, styles.floatRight]}>{item.event.awayName}</Text>
                                    <Text onPress={() => this.props.navigation.push('Screen3', {
                                        id: item.event.id
                                    })} style={[styles.colorDark, styles.textMedium, styles.floatRight]}>{item.event.homeName}</Text>
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
                </ScrollView>
                <BetSlipPanel></BetSlipPanel>
            </View>
                );
            }
        }
        
export default SportsDetailScreen;