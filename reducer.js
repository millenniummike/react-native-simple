export const SET_SCREEN = 'app/SET_SCREEN'
export const GET_LIST1 = 'app/GET_LIST1'
export const GET_LIST1_SUCCESS = 'app/GET_LIST1_SUCCESS'
export const GET_LIST1_FAILURE = 'app/GET_LIST1_FAILURE'
export const GET_LIST2 = 'app/GET_LIST2'
export const GET_LIST2_SUCCESS = 'app/GET_LIST2_SUCCESS'
export const GET_LIST2_FAILURE = 'app/GET_LIST2_FAILURE'
export const TOGGLE_MENU = 'app/TOGGLE_MENU'

export default function reducer(state = { showScreen:1, showMenu:false, currentEditIndex:0, list:[], list2:[], currentEdit:{} }, action) {
  switch (action.type) {

      case SET_SCREEN:
        return {
          ...state,
          showScreen: action.data
        };

        case TOGGLE_MENU:
        return {
          ...state,
          showMenu: !state.showMenu
        };

        case GET_LIST1:
          return { ...state, loading: true };
        case GET_LIST1_SUCCESS:
          return { ...state, loading: false, list: action.payload.data.games };
        case GET_LIST1_FAILURE:
          return {
            ...state,
            loading: false,
            errors: [...state.errors, 'Error while GET_LIST ' + action.error.message]
          };

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

export function setScreen(value) {
  return {
    type: SET_SCREEN,
    data:value
  };
}

export function toggleMenu(value) {
  return {
    type: TOGGLE_MENU
  };
}

export function getList1() {
  return {
    type: GET_LIST1,
    payload: {
      request: {
        url: `https://www.unibet.com/game-library-rest-api/games/getGamesByMarketAndDevice.json?jurisdiction=UK&brand=unibet&deviceGroup=mobilephone&locale=en_GB&currency=GBP&useGlobal=true&nrOfRows=20`
      }
    }
  };
}

export function getList2() {
  return {
    type: GET_LIST2,
    payload: {
      request: {
        url: `https://www.unibet.co.uk/game-library-rest-api/games/getNewGamesInternalByMarketAndDevice.json?jurisdiction=UK&brand=unibet&application=polopoly&locale=en_GB&nrOfRows=100&deviceGroup=mobilephone&startIndex=0&deviceOs=&categories=livecasino%2Csoftgames%2Ccasino&isLoggedIn=false&_=1568297989633`
      }
    }
  };
}