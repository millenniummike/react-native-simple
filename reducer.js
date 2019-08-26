export const SET_SCREEN = 'sports-app/SET_SCREEN'

export default function reducer(state = { showScreen:1, }, action) {
  switch (action.type) {

      case SET_SCREEN:
        return {
          ...state,
          showScreen: action.data
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
