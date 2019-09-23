export const SET_SCREEN = 'app/SET_SCREEN'
export const TOGGLE_MENU = 'app/TOGGLE_MENU'
export const DISPLAY_MENU = 'app/DISPLAY_MENU'
export const LOGIN = 'app/LOGIN'
export const SET_LOGGEDIN = 'app/SET_LOGGEDIN'
export const SET_SPORT = 'app/SET_SPORT'
export const LOGIN_SUCCESS = 'app/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'app/LOGIN_FAILURE'
export const SET_POSTLOGIN1 = 'app/SET_POSTLOGIN1'
export const SET_POSTLOGIN2 = 'app/SET_POSTLOGIN2'
export const SCREEN_HOME = 'app/SCREEN_HOME'
export const SCREEN_IN_PLAY = 'app/SCREEN_IN_PLAY'
export const SCREEN_AZ = 'app/SCREEN_AZ'
export const SCREEN_LOGIN = 'app/SCREEN_LOGIN'
export const SCREEN_SPORT = 'app/SCREEN_SPORT'
export const SCREEN_MYBETS= 'app/SCREEN_MY_BETS'
export const SCREEN_POSTLOGIN_FORM1 = 'app/SCREEN_POSTLOGIN_FORM1'
export const SCREEN_POSTLOGIN_FORM2 = 'app/SCREEN_POSTLOGIN_FORM2'
export const SCREEN_REGISTER = 'app/SCREEN_REGISTER'
export const SCREEN_GEOBLOCKED = 'app/SCREEN_GEOBLOCKED'
export const GO_BACK_SCREEN = 'app/GO_BACK_SCREEN'
export const SET_BLOCK_MENU = 'app/SET_BLOCK_MENU'
export const SET_OTA_VERSION = 'app/SET_OTA_VERSION'

export const GET_HOMEPAGE = 'sports-app/offering/GET_HOMEPAGE';
export const GET_HOMEPAGE_SUCCESS = 'sports-app/offering/GET_HOMEPAGE_SUCCESS';
export const GET_HOMEPAGE_FAIL = 'sports-app/offering/GET_HOMEPAGE_FAIL';

export const GET_SPORT = 'sports-app/offering/GET_SPORT';
export const GET_SPORT_SUCCESS = 'sports-app/offering/GET_SPORT_SUCCESS';
export const GET_SPORT_FAIL = 'sports-app/offering/GET_SPORT_FAIL';

export const GET_OFFERINGS = 'sports-app/offering/LOAD';
export const GET_OFFERINGS_SUCCESS = 'sports-app/offering/LOAD_SUCCESS';
export const GET_OFFERINGS_FAIL = 'sports-app/offering/LOAD_FAIL';

export const GET_AZ = 'sports-app/offering/GET_AZ';
export const GET_AZ_SUCCESS = 'sports-app/offering/GET_AZ_SUCCESS';
export const GET_AZ_FAIL = 'sports-app/offering/GET_AZ_FAIL';

export const GET_INPLAY = 'sports-app/offering/GET_INPLAY';
export const GET_INPLAY_SUCCESS = 'sports-app/offering/GET_INPLAY_SUCCESS';
export const GET_INPLAY_FAIL = 'sports-app/offering/GET_INPLAY_FAIL';

export const ADD_BET = 'sports-app/bet/ADD_BET';
export const LIVE_PANEL_INDEX = 'sports-app/LIVE_PANEL_INDEX';
export const SET_BETSLIPPANEL = 'sports-app/SET_BETSLIPPANEL'

//** TODO get from API and move to reducer **//
const categories = [
  {
      "id": 1,
      "sport": "Upcoming",
      "icon": "user",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.814643.1482140856!/image/1580177844.png"
  },
  {
      "id": 2,
      "sport": "Streaming",
      "icon": "photo",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.800594.1482140895!/image/1842103136.png"
  },
  {
      "id": 3,
      "sport": "Cricket World Cup",
      "icon": "fire",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.799481.1482140901!/image/533153441.png"
  },
  {
      "id": 4,
      "sport": "Racing",
      "icon": "eye",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.1008280.1521132432!/image/2762801378.png"
  },
  {
      "id": 5,
      "sport": "Euro Qualifiers",
      "icon": "wrench",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.800594.1482140895!/image/1842103136.png"
  },
  {
      "id": 6,
      "sport": "Women's World Cup",
      "icon": "briefcase",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.1008280.1521132432!/image/2762801378.png"
  },
  {
      "id": 7,
      "sport": "Football",
      "icon": "user",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.800594.1482140895!/image/1842103136.png"
  },
  {
      "id": 8,
      "sport": "Odd Boosts",
      "icon": "globe",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.800594.1482140895!/image/1842103136.png"
  },
  {
      "id": 9,
      "sport": "Tennis",
      "icon": "beer",
      "uri": "https://a1s.unicdn.net/polopoly_fs/1.800594.1482140895!/image/1842103136.png"
  }
];
export default reducer

function reducer(state = {
  previousScreen: [SCREEN_HOME],
  showScreen: SCREEN_AZ,
  game: null,
  loggedIn: false,
  postLogin2: true,
  postLogin1: true,
  showMenuBlocked: false,
  showMenu: false,
  websocketMessage: "",
  loginError: "",
  OTAVersion: "0",
  betSlipPanelShow:false,
  errors: [],
  live:[],
  livePanelIndex:1,
  offerings: [],
  inPlayGroups: [],
  promo:[],
  inPlaySports: [],
  bets: [],
  az: [],
  sportList: [],
  categories
}, action) {
  switch (action.type) {
    case SET_SCREEN:
      if (state.postLogin1 && state.loggedIn == true) {
        return {
          ...state,
          showScreen: SCREEN_POSTLOGIN_FORM1
        };
      }

      if (state.postLogin2 && state.loggedIn == true) {
        return {
          ...state,
          showScreen: SCREEN_POSTLOGIN_FORM2
        };
      }

      if (state.showScreen == SCREEN_GEOBLOCKED) {
        return state
      }

      return {
        ...state,
        showScreen: action.data,
        previousScreen: state.previousScreen.concat({ screen: action.data, game: state.game })
      };

    case GO_BACK_SCREEN:
      return {
        ...state,
        game: state.previousScreen[1].game,
        showScreen: state.previousScreen[1].screen,
        previousScreen: state.previousScreen.pop()
      };

    case SET_POSTLOGIN1:
      return {
        ...state,
        postLogin1: action.data
      };

    case SET_OTA_VERSION:
      return {
        ...state,
        OTAVersion: action.data
      };

    case SET_POSTLOGIN2:
      return {
        ...state,
        postLogin2: action.data
      };
    
    case SET_SPORT:
          return {
            ...state,
            sport: action.data
          };

    case TOGGLE_MENU:
      return {
        ...state,
        showMenu: !state.showMenu
      };

    case LOGIN:
      return { ...state, loading: true }

    case LOGIN_SUCCESS:
      var screen = state.previousScreen
      if (state.postLogin2) {
        screen = SCREEN_POSTLOGIN_FORM2
      }
      if (state.postLogin1) {
        screen = SCREEN_POSTLOGIN_FORM1
      }
      if (action.payload.data) {
        if (action.payload.data.message) {
          return {
            ...state,
            loggedIn: false,
            loginError: action.payload.data.message
          };
        }
      }
      return {
        ...state,
        loggedIn: true,
        showScreen: screen,
        customer: action.payload.data,
        error: ""
      }

    case SET_LOGGEDIN:
      return {
        ...state,
        loggedIn: action.data
      };

    case DISPLAY_MENU:
      return {
        ...state,
        showMenu: action.data
      };

    case SET_BLOCK_MENU:
      return {
        ...state,
        showMenuBlocked: action.data
      };

      case GET_OFFERINGS:
      return { ...state, loading: true };
    case GET_OFFERINGS_SUCCESS:
      return { ...state, loading: false, offerings: action.payload.data.events };
    case GET_OFFERINGS_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, 'Error while GET_OFFERINGS ' + action.error.message]
      };

    case GET_AZ:
      return { ...state, loading: true, az:[] };
    case GET_AZ_SUCCESS:
      return { ...state, loading: false, az: action.payload.data.layout.sections[1].widgets[0].sports };
    case GET_AZ_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, 'Error while GET_AZ ' + action.error.message]
      };

    case GET_HOMEPAGE:
      return { ...state, loading: true };
    case GET_HOMEPAGE_SUCCESS:
      return { ...state, loading: false, navigation: action.payload.data.navigationBar.links, live: action.payload.data.view.layout.sections[1].widgets[1].sports, promo: action.payload.data.view.layout.sections[1].widgets[0].promoBannerBasicSlides};
    case GET_HOMEPAGE_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, 'Error while GET_HOME ' + action.error.message]
      };

      case GET_SPORT:
          return { ...state, loading: true };
        case GET_SPORT_SUCCESS:
          return { ...state, loading: false, sportList: action.payload.data};
        case GET_SPORT_FAIL:
          return {
            ...state,
            loading: false,
            errors: [...state.errors, 'Error while GET_HOME ' + action.error.message]
          };
          
          
    case GET_INPLAY:
      return { ...state, loading: true };
    case GET_INPLAY_SUCCESS:
      return { ...state, loading: false, inPlaySports: createSports(action.payload.data), inPlayGroups: group(action.payload.data) };
    case GET_INPLAY_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, 'Error while GET_INPLAY ' + action.error.message]
      };

    case ADD_BET:
      return {
        ...state,
        loading: false,
        bets: [...state.bets, action.payload.data]
      };

    case LIVE_PANEL_INDEX:
      return {
        ...state,
        loading: false,
        livePanelIndex: action.data
      };

      case SET_BETSLIPPANEL:
      return {
        ...state,
        betSlipPanelShow: action.data
      };

    case 'REDUX_WEBSOCKET::MESSAGE':
      return {
        ...state,
        websocketMessage: action.payload.message
      }

    default:
      return state;
  }
}

export function setOTAVersion(value) {
  return {
    type: SET_OTA_VERSION,
    data: value
  };
}

export function setPostLogin1(value) {
  return {
    type: SET_POSTLOGIN1,
    data: value
  };
}

export function setPostLogin2(value) {
  return {
    type: SET_POSTLOGIN2,
    data: value
  };
}

export function setScreen(value) {
  return {
    type: SET_SCREEN,
    data: value
  };
}

export function setSport(value) {
  return {
    type: SET_SPORT,
    data: value
  };
}

export function goBackScreen() {
  return {
    type: GO_BACK_SCREEN
  };
}

export function setLoggedIn(value) {
  return {
    type: SET_LOGGEDIN,
    data: value
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: {
      request: {
        url: `http://localhost:8080/login_success.json`
      }
    }
  };
}

export function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
}

export function displayMenu(value) {
  return {
    type: DISPLAY_MENU,
    data: value
  };
}

export function setMenuBlocked(value) {
  return {
    type: SET_BLOCK_MENU,
    data: value
  };
}

export function listOfferings(sport) {
  return {
    type: GET_OFFERINGS,
    payload: {
      request: {
        url: `https://ctd-api.kambi.com/offering/api/v3/kambiplay/listView/${sport}.json?lang=en_GB&market=GB&client_id=2&channel_id=1`
        //** TODO Consume this */
        //url: `https://www.unibet.co.uk/sportsbook-feeds/views/home`
      }
    }
  };
}

export function listAZ() {
  return {
    type: GET_AZ,
    payload: {
      request: {
        url: `https://www.unibet.co.uk/sportsbook-feeds/views/sports/a-z`
      }
    }
  };
}

export function addBet(outcome) {
  return {
    type: ADD_BET,
    payload: {
      data: { "outcome": outcome, "amount": 33 }
    }
  };
}

export function listHomePage() {
  return {
    type: GET_HOMEPAGE,
    payload: {
      request: {
        url: `https://www.unibet.com/sportsbook-feeds/apps/sports`
      }
    }
  };
}

export function listSport(sport) {
  return {
    type: GET_SPORT,
    payload: {
      request: {
        url: `https://eu-offering.kambicdn.org/offering/v2018/ubuk/listView/${sport}.json?lang=en_GB&market=GB`
      }
    }
  };
}

export function listInPlay() {
  return {
    type: GET_INPLAY,
    payload: {
      request: {
        url: `https://ctd-api.kambi.com/offering/api/v2/kambiplay/event/live/open.json?lang=en_GB`
      }
    }
  };
}

export function changeLivePanelIndex(index) {
  return {
    type: LIVE_PANEL_INDEX,
    data: index
  };
}

export function setBetSlipPanel(value) {
  return {
    type: SET_BETSLIPPANEL,
    data:value
  };
}

function createSports(data) {
  var tmp = []
  for (i = 0; i < data.liveEvents.length; i++) {
    tmp[data.liveEvents[i].event.sport] = [];
  }
  for (i = 0; i < data.liveEvents.length; i++) {
    tmp[data.liveEvents[i].event.sport].push(data.liveEvents[i]);
  }
  var sports = []
  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) {
      var data = tmp[p];
      sports.push({ "sport": p.toLocaleLowerCase() });
    }
  }
  return sports
}
function group(data) {
  function formatString(str) {
    return str
      .replace(/(\B)[^ ]*/g, match => (match.toLowerCase()))
      .replace(/^[^ ]/g, match => (match.toUpperCase()));
  }

  var tmp = []
  for (i = 0; i < data.liveEvents.length; i++) {
    tmp[data.liveEvents[i].event.sport] = [];
  }
  for (i = 0; i < data.liveEvents.length; i++) {
    tmp[data.liveEvents[i].event.sport].push(data.liveEvents[i]);
  }
  var grouped = []
  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) {
      var data = tmp[p];
      grouped.push({ "sport": formatString(p.replace("_", " ")), "sportIcon": p.toLowerCase().replace("_", "-"), data });
    }
  }
  return grouped
}

function mapList(list) {
  var mappedList = Object.keys(list).map(function (key) {
    var game = list[key]
    game.name = key
    return game
  })
  return mappedList
}