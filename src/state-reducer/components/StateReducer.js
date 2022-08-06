import { useState } from 'react';
import { types } from '../../actionTypes';
import { usePlayerReducer } from '../../hooks/usePlayerReducer';
import { playerReducer } from '../../reducers/playerReducer';

const LIMIT_TIMES = 5;

export const StateReducer = () => {
  const [count, setCount] = useState(0);

  const clickedMoreTimes = () => count >= LIMIT_TIMES;

  const { tooglePlay, play, pause, isPlaying } = usePlayerReducer({
    reducer: (state, action) => {
      const newReducer = playerReducer(state, action);

      if ((action.type === types.PLAY) && clickedMoreTimes()) {
        alert('Se deshabilita');
      };

      return newReducer;
    }
  });

  const handlePlay = () => {
    setCount(count + 1);
    play();
  };

  return (
    <div className="App">
      <p>you clicked {count} times!</p>
      <p>
        Current status: <b>{isPlaying ? 'playing' : 'paused'}</b>
      </p>
      <button disabled={clickedMoreTimes()} onClick={handlePlay}>
        Start
      </button>
      <button onClick={pause}>Pause</button>
      <button onClick={tooglePlay}>Toogle</button>
    </div>
  );
};