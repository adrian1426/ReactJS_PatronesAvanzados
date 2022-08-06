import { useReducer } from 'react';
import { types } from '../actionTypes';
import { playerReducer } from '../reducers/playerReducer';

const initialSta = { isPlaying: false };

export const usePlayerReducer = ({ reducer = playerReducer, initialState = initialSta } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isPlaying } = state;

  const tooglePlay = () => dispatch({ type: types.TOGGLE_PLAY });
  const play = () => dispatch({ type: types.PLAY });
  const pause = () => dispatch({ type: types.PAUSE });

  return {
    tooglePlay,
    isPlaying,
    play,
    pause,
  };
};