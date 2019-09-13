export const SET_SCREEN = 'app/SET_SCREEN'
export const GET_LIST1 = 'app/GET_LIST1'
export const GET_LIST1_SUCCESS = 'app/GET_LIST1_SUCCESS'
export const GET_LIST1_FAILURE = 'app/GET_LIST1_FAILURE'
export const GET_LIST2 = 'app/GET_LIST2'
export const GET_LIST2_SUCCESS = 'app/GET_LIST2_SUCCESS'
export const GET_LIST2_FAILURE = 'app/GET_LIST2_FAILURE'
export const TOGGLE_MENU = 'app/TOGGLE_MENU'
export const DISPLAY_MENU = 'app/DISPLAY_MENU'
export const LOGIN = 'app/LOGIN'
export const SET_LOGGEDIN = 'app/SET_LOGGEDIN'
export const LOGIN_SUCCESS = 'app/LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'app/LOGIN_FAILURE'
export const SET_POSTLOGIN1 = 'app/SET_POSTLOGIN1'
export const SET_POSTLOGIN2 = 'app/SET_POSTLOGIN2'
export const SET_GAME = 'app/SET_GAME'
export const APPLY_FILTER_LIST1 = 'app/APPLY_FILTER_LIST1'

export default function reducer(state = { showScreen: 2, game: null, loggedIn: false, postLogin2: true, postLogin1: true, showMenu: false, filterValue:"", filterList1: "", filterList2: "", list: [], list2: [] }, action) {
  switch (action.type) {
    case SET_SCREEN:
      if (state.postLogin1 && state.loggedIn == true) {
        return {
          ...state,
          showScreen: 7
        };
      }

      if (state.postLogin2 && state.loggedIn == true) {
        return {
          ...state,
          showScreen: 8
        };
      }

      if (state.showScreen == 5) {
        return state
      }

      return {
        ...state,
        showScreen: action.data
      };

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
      return { ...state, loading: true };

      case LOGIN_SUCCESS:
        var screen = 1
          if (state.postLogin2) {
            screen = 8
          }
          if (state.postLogin1) {
            screen = 7
          }

      return {
        ...state,
        loggedIn: true,
        showScreen:screen
      };

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
      return { ...state, filterList1:action.data };

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

    default:
      return state;
  }
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
        url: `http://10.96.26.241:8080/login_success.json`
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
export function getList1() {
  return {
    type: GET_LIST1,
    payload: {
      request: {
        url: `https://www.unibet.com/game-library-rest-api/games/getGamesByMarketAndDevice.json?jurisdiction=UK&brand=unibet&deviceGroup=mobilephone&locale=en_GB&currency=GBP&useGlobal=true&nrOfRows=200`
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

function mapList(list){
var mappedList = Object.keys(list).map(function(key) {
  var game = list[key]
  game.name = key
  return game
})
  return mappedList
}