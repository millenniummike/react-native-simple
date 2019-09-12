export const SET_SCREEN = 'app/SET_SCREEN'
export const GET_LIST = 'app/GET_LIST'
export const GET_LIST_SUCCESS = 'app/GET_LIST_SUCCESS'
export const GET_LIST_FAILURE = 'app/GET_LIST_FAILURE'
export const TOGGLE_MENU = 'app/TOGGLE_MENU'

export default function reducer(state = { showScreen:1, showMenu:false, currentEditIndex:0, list:[], currentEdit:{} }, action) {
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

        case GET_LIST:
          return { ...state, loading: true };
        case GET_LIST_SUCCESS:
          return { ...state, loading: false, list: action.payload.data.games };
        case GET_LIST_FAILURE:
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

export function getList() {
  return {
    type: GET_LIST,
    payload: {
      request: {
        url: `https://api-qa1.unibet.com/game-library-rest-api/games/getGamesByMarketAndDevice.json?jurisdiction=UK&brand=unibet&deviceGroup=mobilephone&locale=en_GB&currency=GBP&useGlobal=true&nrOfRows=20`
      }
    }
  };
}