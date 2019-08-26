import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "green"
    },
    main: {
        paddingBottom: 40,
        height,
        width,
        backgroundColor: "red",
    },
    mainContainer: {
        backgroundColor: '#000',
        margin:8,
        paddingBottom: 80,
        backgroundColor: "yellow"
    },
    header: {
        backgroundColor: 'blue',
        flexDirection: 'row',
        width,
        height: 70,
        padding: 8,
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        height: 80,
        width,
        backgroundColor: 'grey',
        flexDirection: 'row'
    },
    imageLogo: {
        width: 50,
        height: 50,
        margin:4
    },
    imageBottomNav:{
        width:30,
        height:30,
        margin:2
    },
    buttonTopNav: {
        padding: 4,
        margin:2,
        width: 80,
        height:40,
        backgroundColor: "pink",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonBottomNav: {
        padding: 8,
        flex: 1,
        backgroundColor: "orange",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonAction: {
        padding: 8,
        margin:2,
        width:width*0.33,
        flex: 1,
        backgroundColor: "green",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        fontSize:18
    },
    textListItem: {
        color:"pink"
    },
    listItem: {
        backgroundColor:"purple",
        margin:2,
        padding:4
    },
    inputText: {
        backgroundColor:'white',
        padding:8
    }
});

export default styles;