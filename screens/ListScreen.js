import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../Styles';
import { connect } from 'react-redux';
import { addItem, clearList, chooseItem, updateItem, deleteItem } from '../reducer';

class EditScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editName: 'Enter text'
        };
    }

    componentDidMount() {
        //this.props.clearList()
    }
    render() {
        //return (<View></View>)
        const { list } = this.props
        const { currentEditIndex } = this.props
        const { editName } = this.state
        console.disableYellowBox = true;
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.textTitle}>Edit Screen</Text>
                <TextInput style={styles.inputText}
                    onChangeText={(editName) => this.setState({ editName })}
                    value={editName}
                />

                <TouchableOpacity style={styles.buttonAction}
                    onPress={() => {
                        this.props.updateItem({ "index": currentEditIndex, "name": editName });
                    }}>
                    <Text style={styles.textBottomNav}>Update Item</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAction}
                    onPress={() => {
                        this.props.deleteItem({ "index": currentEditIndex });
                    }}>
                    <Text style={styles.textBottomNav}>Delete Item</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAction}
                    onPress={() => {
                        this.props.addItem({ "name": editName });
                    }}>
                    <Text style={styles.textBottomNav}>Add Item</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonAction}
                    onPress={() => {
                        this.props.clearList();
                    }}>
                    <Text style={styles.textBottomNav}>Clear List</Text>

                </TouchableOpacity>
                {list.length > 0 ? <FlatList data={list}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.chooseItem(index)
                                this.setState({ editName: list[index].name })
                            }}>
                            <View style={styles.listItem}>
                                <Text style={styles.textListItem}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                >
                </FlatList> :
                    <View></View>
                }
            </View>
        );
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    addItem, clearList, chooseItem, updateItem, deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);