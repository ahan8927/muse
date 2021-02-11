import { SET_USER, REMOVE_USER, REMOVE_BOARD, SET_BOARD } from '../actions/session';

const initialState = { user: null, beats: null };
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {

    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = { ...action.payload };
      return newState;

    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;

    case SET_BOARD:
      newState = Object.assign({}, state);
      newState.beats = [...action.payload];
      return newState;

    case REMOVE_BOARD:
      newState = Object.assign({}, state);
      newState.beats = null;
      return newState;
    default:
      return state;
  }
}

export default sessionReducer
