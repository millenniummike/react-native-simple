import React, { PureComponent } from "react";
import { View, Text} from 'react-native';
import styles from '../Styles';
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
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BlankScreen);
