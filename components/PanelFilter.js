import styles from '../Styles';
import { connect } from 'react-redux';
import React from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { setScreen, toggleMenu, setLoggedIn, applyFilterList1, displayFilterPanel } from '../reducer';

class PanelFilter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { showFilterPanel } = this.props

        if (showFilterPanel) {
            return <ScrollView style={styles.panelFilter}>
                <Text style={{ color: "white", fontSize: 16, marginBottom: 4 }}>Filter Panel</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.props.displayFilterPanel(false);
                    }}>
                    <Text style={styles.textListItem}>x Close</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.props.applyFilterList1('')
                    this.props.displayFilterPanel(false);
                }}>
                    <Text style={{ color: "white" }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.applyFilterList1('Slots')
                    this.props.displayFilterPanel(false);
                }}>
                    <Text style={{ color: "white" }}>Slots</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.applyFilterList1('Scratch')
                    this.props.displayFilterPanel(false);
                }}>
                    <Text style={{ color: "white" }}>Scratch</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.applyFilterList1('tableandcards')
                    this.props.displayFilterPanel(false);
                }}>
                    <Text style={{ color: "white" }}>Table and Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.applyFilterList1('live')
                    this.props.displayFilterPanel(false);
                }}>
                    <Text style={{ color: "white" }}>Live</Text>
                </TouchableOpacity>
            </ScrollView>
        } else {
            return <View></View>
        }
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    setScreen, toggleMenu, setLoggedIn, applyFilterList1, displayFilterPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelFilter);