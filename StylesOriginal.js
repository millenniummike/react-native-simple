import { StyleSheet, Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "black"
    },
    main: {
        paddingBottom: 40,
        height,
        width,
        backgroundColor: "#030",
    },
    mainContainer: {
        margin:2,
        padding:2,
        marginBottom: 180,
        backgroundColor: "#020"
    },
    gridContainer: {
        width, margin: 5
    },
    carousel: {
        margin: 2
    },
    header: {
        backgroundColor: '#080',
        width:width,
        height: 60,
        padding: 8,
        flexDirection: 'row'
    },
    headerLeft: {
        width:width*0.2
    },
    headerRight: {
        width:width*0.75,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        width,
        backgroundColor: 'grey',
        flexDirection: 'row'
    },
    panel: {
        position: 'absolute',
        padding:8,
        bottom: 90,
        height: 120,
        width,
        backgroundColor: 'black'
    },
    panelFilter: {
        position: 'absolute',
        padding:8,
        top:120,
        left:width/2,
        height: 200,
        width:width/2,
        backgroundColor: 'black'
    },
    imageLogo: {
        width: 30,
        height: 30,
        margin:10
    },
    imageBottomNav:{
        width:20,
        height:20,
        margin:2,
        tintColor:"white"
    },
    imageGameHeader:{
        width,
        height:200,
        resizeMode:"cover"  
    },
    textGameTitle:{
        color:"white",
        margin:8
    },
    textInputSearch:{
        height: 40, padding:8, borderColor: 'gray', borderWidth: 1, color:'white'
    },
    buttonTopNav: {
        padding: 4,
        margin:2,
        marginLeft:12,
        width: 80,
        height:36,
        backgroundColor: "green",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        borderWidth: 1
    },
    buttonBig: {
        padding: 4,
        margin:2,
        marginLeft:12,
        width:width*0.9,
        height:36,
        backgroundColor: "green",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        borderWidth: 1
    },
    buttonTopNav2: {
        padding: 4,
        margin:2,
        width: 80,
        height:36,
        backgroundColor: "yellow",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        borderWidth: 1
    },
    buttonBottomNav: {
        padding: 8,
        flex: 1,
        backgroundColor: "black",
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
        fontSize:18,
        margin:10,
        color:"white"
    },
    textBottomNav: {
        fontSize:12,
        margin:2,
        color:"white"
    },
    textListItem: {
        color:"white",
        fontSize:10
    },
    listItem: {
        margin:2,
        padding:4,
        width:width/3.3,
        height:90,
        alignItems: 'center'
    },
    listItemBig: {
        margin:2,
        padding:2,
        width:width/2,
        height:120,
        alignItems: 'center'
    },
    inputText: {
        backgroundColor:'white',
        padding:8
    }
});

export default styles;