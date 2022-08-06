import { useState } from 'react';
import { usePlayer } from '../../hooks/usePlayer';

const LIMIT_TIMES = 5;

export const NoStateReducer = () => {
  const [count, setCount] = useState(0);
  const { tooglePlay, play, pause, isPlaying } = usePlayer();

  const handlePlay = () => {
    setCount(count + 1);
    play();
  };

  const clickedMoreTimes = () => count >= LIMIT_TIMES;

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