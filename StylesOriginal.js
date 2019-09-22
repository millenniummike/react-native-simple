import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
module.exports = {

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
        backgroundColor:"black",
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
        width: 120,
        height: 30,
        resizeMode:'contain',
        margin:8
    },
    imageBottomNav:{
        width:20,
        height:20,
        margin:2,
        tintColor:"white"
    },
    imageGameHeader:{
        width,
        height:250,
        resizeMode:"cover"  
    },
    textGameTitle:{
        color:"white",
        margin:8
    },
    menuContainer: {
        flexDirection:'row'
    },
    textMenu:{
        color:"white",
        padding:4
    },
    textInputSearch:{
        height: 40, padding:8, margin:8, borderColor: 'gray', borderWidth: 1, color:'white'
    },
    buttonTag: {
        backgroundColor:"green",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        borderWidth: 1,
        margin:8,
        padding:8
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
        margin:1,
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
    listItemCarousel: {
        margin:8,
        padding:2,
        width:width/3,
        height:100,
        alignItems: 'center'
    },
    inputText: {
        backgroundColor:'white',
        padding:8
    },
      panel: {
        borderTopColor:"yellow",
        borderTopWidth:4,
        padding:6,
        position: 'absolute',
        top:height / 2,
        width,
        height: height*0.75,
        right:0,
        backgroundColor: 'black'
      },
    menu: {
        position: 'absolute',
        paddingTop:90,
        top:0,
        left:-195,
        width:200,
        height,
        backgroundColor: 'grey'
      },
    textSmall: { fontSize: 10, padding:2},
    textMedium: { fontSize: 14, padding:4 },
    textLarge: { fontSize: 18, padding:6},

    colorLight: { color:'white'},
    colorDark: {color:'black'},

    floatRight: {justifyContent: 'flex-end', textAlign:'left'},

    width75: {width:width * 0.65},

    containerSports: {
        backgroundColor: '#ddd'
    },
    iconContainer:{
        width:70,
        height:110,
        margin:0
    },
    tabButtons:{
        flex:1,
        flexDirection:'row',
    },
    carouselHeadline:{
        backgroundColor:'rgba(52, 52, 52, 0.5)',
        padding:2,
        color:"white",
        fontSize:22
    },
    carouselBody: {
        backgroundColor:'rgba(52, 52, 52, 0.5)',
        padding:2,
        color:"white",
        width:width*0.8
    },
    betSlipPanelHeader:{
        flexDirection:'row',
        width,
        height:50,
        padding:8,
        backgroundColor:"#333"
    },
    betSlipPanelHeaderText:{
        color:"#ccc",
        padding:10,
        width:width*0.8
    },
    widgetHeader:{
        fontWeight:"bold",
        fontSize:20,
        paddingTop:8,
        marginBottom:8
    },
    liveHeader:{
        fontWeight:"bold",
        fontSize:18,
        marginBottom:8
    },
    bottomIconImage:{
        width:50,
        height:30,
        paddingTop:2,
        marginLeft:14
    },
    textDefault:{
        color:"white"
    },
    textDefaultBlack:{
        color:"black"
    },
    bottomText:{
        textAlign:"center",
        fontSize:10,
        color:"white"
    },
    bottomIcon: {
        marginLeft:20,
        margin:4,
        width:16,
        height:16
    },
    iconTitleImage:{
        width:40,
        height:40
    },
    iconImage:{
        width:50,
        height:50,
        margin:10,
    },
    logoContainer: {
        width: 150
    },
    leafNavigation: {
        flexDirection: 'row'
    },
    inPlaySport:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'black'
    },
    topNavButtons: {
        flex: 1,
        flexDirection: 'row',
        width: 600
    },
    buttonRegister: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,
        width: 100,
        marginRight: 5,
        backgroundColor: '#fee71c',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fee71c'
    },
    buttonLogin: {
        padding: 5,
        width: 80,
        paddingLeft: 10,
        paddingRight: 10,
        height: 30,
        marginRight: 5,
        backgroundColor: '#299b58',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#299b58'
    },
    triangle: {
        justifyContent: 'flex-end',
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#aaa',
        margin:8
      },
      triangleDown: {
        justifyContent: 'flex-end',
        transform: [
            {rotate: '180deg'}
          ],
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#aaa',
        margin:8
      },

    iconLabelWhite:{
        "textAlign":"center",
        color:"black",
        fontSize:8
    },
    bodyViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLayoutStyle: {
        width,
        height: 100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    slidingPanelLayoutStyle: {
        width,
        height,
        backgroundColor: '#7E52A0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
    containerCategory: {
        backgroundColor: 'white',
        width,
        flex: 1,
        marginTop:1,
        marginBottom:1,
        flexDirection: 'row',
        padding:4
    },
    sectionTitleWhite: {
        color: "white",
        fontSize: 12,
        paddingBottom: 10,
        margin: 10
    },
    sectionTitle: {
        color: "black",
        fontSize: 12,
        paddingBottom: 10,
        margin: 10
    },
    image: {
        width: 50,
        height: 50,
        padding: 20
    },
    search: {
        padding: 0,
        backgroundColor: '#000',
        color: "white",
        flex: 1,
        flexDirection: 'row'
    },
    searchInput: {
        padding: 10,
        backgroundColor: '#333333',
        color: "white"
    },
    betSlipPanel: {
        backgroundColor: "green",
        marginBottom: 5
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    betPanel: {
        flex: 1,
        backgroundColor: "black",
        position: "relative"
    },
    betPanelText: {
        fontSize: 14,
        padding: 5,
        color: "white"
    },
    betPanelHeader: {
        height: 20,
        backgroundColor: "black",
        justifyContent: "flex-end",
        padding: 5
    },
    textHeader: {
        fontSize: 28,
        color: "#FFF"
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -24,
        right: 18,
        width: 48,
        height: 48,
        zIndex: 1
    },
    iconBg: {
        backgroundColor: "red",
        position: "absolute",
        top: -24,
        right: 18,
        width: 48,
        height: 48,
        borderRadius: 24,
        zIndex: 1
    },
    path: {
        color: "black",
        padding:3,
        marginLeft:5
    },
    buttonPanel: {
        backgroundColor: "#ddd",
        height:110
    },
    buttonPanelText: {
        fontSize: 8
    },
    betLabel: {
        textAlign: "left",
        color: "#ddd",
        paddingBottom: 5
    },
    betButton: {
        flex: 1,
        flexDirection: 'row'
    },
    black: {

    },
    categoryTitle: {
        color: "white",
        backgroundColor: "black",
        padding: 10,
        fontWeight:"bold"
    },
    categoryContainer: {
        backgroundColor: "black",
        flex: 1,
        flexDirection: 'row'
    },
    textWhite: {
        color: "white",
        padding: 20,
        fontSize: 100
    },
    image: {
        width: 50,
        height: 50,
        padding: 20
    },
    imageBanner: {
        marginTop: 5,
        resizeMode: 'stretch',
        width: width,
        height: width/3
    },
    imageLogo: {
        width: 40,
        height: 40
    },
    nav: {
        flex: 1,
        flexDirection: 'row'
    },
    bannerView: {
        width: 500,
        height: 160,
        marginBottom: 10
    },
    search: {
        padding: 10
    },
    buttonTab: {
        padding: 5,
        margin: 2,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'green',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'green',
        color:'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    playContainer: {
        margin: 10
    },
    buttonBet: {
        padding: 5,
        margin: 2,
        width: 150,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'green',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'green',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    odds: {
        fontWeight: "bold",
        color: "white",
        fontSize: 12,
        textAlign:'center'
    },
    oddsLabel: {
        color: "white",
        fontSize: 10,
        textAlign:'center'
    },
    bet: {
        backgroundColor: 'green',
        color: "white",
        margin: 1,
        padding: 2,
        fontSize: 12
    },
    betButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        width: width/3.3
    },
    buttonHolder: {
        flex: 1,
        flexDirection: 'row'
    },
    betBasketTitle: {
        color: "blue"
    },
    placeBetButton: {
        padding: 15,
        borderRadius: 5,
        borderWidth: 1,
        width: "40%"
    },
    placeBetButtonText: {
        textAlign: "center",
        color: "black"
    }
}