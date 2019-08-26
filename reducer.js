export const SET_SCREEN = 'app/SET_SCREEN'
export const ADD_ITEM = 'app/ADD_ITEM'
export const CHOOSE_ITEM = 'app/CHOOSE_ITEM'
export const UPDATE_ITEM = 'app/UPDATE_ITEM'
export const CLEAR_LIST = 'app/CLEAR_LIST'
export const DELETE_ITEM = 'app/DELETE_ITEM'

export default function reducer(state = { showScreen:1, currentEditIndex:0, list:[], currentEdit:{} }, action) {
  switch (action.type) {

      case SET_SCREEN:
        return {
          ...state,
          showScreen: action.data
        };

        case ADD_ITEM:
        return {
          ...state,
          list: [...state.list, action.data]
        };

        case CLEAR_LIST:
        return { showScreen:1, currentEditIndex:1, list:[] };

        case CHOOSE_ITEM:
        return { ...state,
          currentEditIndex: action.data,
          currentEdit: state.list[action.data]
        };

        case UPDATE_ITEM:
            let updateList = state.list.map((item, index) => {
              if(index === action.data.index) {
                return {"name":action.data.name}
              }
              return item;
            });
          return { ...state, list: updateList };

          case DELETE_ITEM:
              let deleteList = state.list.filter((item, index) => {
                if(index === action.data.index) {
                  return false;
                }
                return true;
              });

            return { ...state, list: deleteList };

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

export function addItem(value) {
  return {
    type: ADD_ITEM,
    data:value
  };
}

export function deleteItem(value) {
  return {
    type: DELETE_ITEM,
    data:value
  };
}


export function chooseItem(value) {
  return {
    type: CHOOSE_ITEM,
    data:value
  };
}

export function updateItem(value) {
  return {
    type: UPDATE_ITEM,
    data: value
  };
}

export function clearList() {
  return {
    type: CLEAR_LIST
  };
}