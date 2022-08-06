import { types } from "../actionTypes";

export const playerReducer = (state, action) => {
  switch (action.type) {
    case types.PLAY:
      return {
        ...state,
        isPlaying: true
      };
    case types.PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case types.TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    default:
      return state;
  }
};