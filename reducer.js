export const SET_SCREEN = 'app/SET_SCREEN'
export const GET_LIST1 = 'app/GET_LIST1'
export const GET_LIST1_SUCCESS = 'app/GET_LIST1_SUCCESS'
export const GET_LIST1_FAILURE = 'app/GET_LIST1_FAILURE'
export const GET_LIST2 = 'app/GET_LIST2'
export const GET_LIST2_SUCCESS = 'app/GET_LIST2_SUCCESS'
export const GET_LIST2_FAILURE = 'app/GET_LIST2_FAILURE'
export const TOGGLE_MENU = 'app/TOGGLE_MENU'
export const DISPLAY_MENU = 'app/DISPLAY_MENU'
export const DISPLAY_FILTER_PANEL = 'app/DISPLAY_FILTER_PANEL'
export const LOGIN = 'app/LOGIN'
export const SET_LOGGEDIN = 'app/SET_LOGGEDIN'
export const LOGIN_SUCCESS = 'app/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'app/LOGIN_FAILURE'
export const SET_POSTLOGIN1 = 'app/SET_POSTLOGIN1'
export const SET_POSTLOGIN2 = 'app/SET_POSTLOGIN2'
export const SET_GAME = 'app/SET_GAME'
export const APPLY_FILTER_LIST1 = 'app/APPLY_FILTER_LIST1'
export const SCREEN_HOME = 'app/SCREEN_HOME'
export const SCREEN_GAME = 'app/SCREEN_GAME'
export const SCREEN_PRE_GAME = 'app/SCREEN_PRE_GAME'
export const SCREEN_LOGIN = 'app/SCREEN_LOGIN'
export const SCREEN_PLAY_GAME = 'app/SCREEN_PLAY_GAME'
export const SCREEN_POSTLOGIN_FORM1 = 'app/SCREEN_POSTLOGIN_FORM1'
export const SCREEN_POSTLOGIN_FORM2 = 'app/SCREEN_POSTLOGIN_FORM2'
export const SCREEN_REGISTER = 'app/SCREEN_REGISTER'
export const SCREEN_GEOBLOCKED = 'app/SCREEN_GEOBLOCKED'
export const GO_BACK_SCREEN = 'app/GO_BACK_SCREEN'
export const SET_BLOCK_MENU = 'app/SET_BLOCK_MENU'
export const SET_OTA_VERSION = 'app/SET_OTA_VERSION'

export default reducer

function reducer(state = {
  previousScreen: [],
  showScreen: SCREEN_HOME,
  game: null,
  loggedIn: false,
  postLogin2: true,
  postLogin1: true,
  showMenuBlocked: false,
  showMenu: false,
  showFilterPanel: false,
  filterValue: "",
  filterList1: "",
  filterList2: "",
  list: [],
  list2: [],
  websocketMessage: "",
  loginError: "",
  OTAVersion: "Unknown"
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
        previousScreen: state.previousScreen.concat({ screen: state.showScreen, game: state.game })
      };

    case GO_BACK_SCREEN:
      var previous = state.previousScreen.length-1
      if (previous>=0) {
          var game = null
          if (state.previousScreen[previous-1]) {
            game = state.previousScreen[previous-1].game
          }
      return {
        ...state,
        game,
        showScreen: state.previousScreen[previous].screen,
        previousScreen: state.previousScreen.filter( (_,i) => i !== previous)
      }
    }

    case SET_GAME:
      return {
        ...state,
        game: action.data
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

    case DISPLAY_FILTER_PANEL:
      return {
        ...state,
        showFilterPanel: action.data
      };

    case SET_BLOCK_MENU:
      return {
        ...state,
        showMenuBlocked: action.data
      };

    case GET_LIST1:
      return { ...state, loading: true };
    case GET_LIST1_SUCCESS:
      return { ...state, loading: false, list: mapList(action.payload.data.games) };
    case GET_LIST1_FAILURE:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, 'Error while GET_LIST ' + action.error.message]
      };

    case APPLY_FILTER_LIST1:
      return { ...state, filterList1: action.data };

    case GET_LIST2:
      return { ...state, loading: true };
    case GET_LIST2_SUCCESS:
      return { ...state, loading: false, list2: action.payload.data.games };
    case GET_LIST2_FAILURE:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, 'Error while GET_LIST ' + action.error.message]
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

export function goBackScreen() {
  return {
    type: GO_BACK_SCREEN
  };
}

export function setGame(value) {
  return {
    type: SET_GAME,
    data: value
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

export function displayFilterPanel(value) {
  return {
    type: DISPLAY_FILTER_PANEL,
    data: value
  };
}

export function setMenuBlocked(value) {
  return {
    type: SET_BLOCK_MENU,
    data: value
  };
}

export function getList1() {
  return {
    type: GET_LIST1,
    payload: {
      request: {
        url: `https://www.unibet.com/game-library-rest-api/games/getGamesByMarketAndDevice.json?jurisdiction=UK&brand=unibet&deviceGroup=mobilephone&locale=en_GB&currency=GBP&useGlobal=true&nrOfRows=800`
      }
    }
  };
}

export function applyFilterList1(value) {
  return {
    type: APPLY_FILTER_LIST1,
    data: value
  };
}

export function getList2() {
  return {
    type: GET_LIST2,
    payload: {
      request: {
        url: `https://www.unibet.co.uk/game-library-rest-api/games/getNewGamesInternalByMarketAndDevice.json?jurisdiction=UK&brand=unibet&application=polopoly&locale=en_GB&nrOfRows=400&deviceGroup=mobilephone&startIndex=0&deviceOs=&categories=livecasino%2Csoftgames%2Ccasino&isLoggedIn=false&_=1568297989633`
      }
    }
  };
}

function mapList(list) {
  var mappedList = Object.keys(list).map(function (key) {
    var game = list[key]
    game.name = key
    return game
  })
  return mappedList
}