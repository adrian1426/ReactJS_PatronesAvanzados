import { useState } from 'react';

export const ControlProps = (props) => {
  const { value, setValue } = props;
  const [likes, setLikes] = useState(0);

  const isComponentControlled = value !== undefined && setValue !== undefined;

  const handleClick = () => setLikes(likes + 1);

  const newValue = isComponentControlled ? value : likes;
  const newSetValue = isComponentControlled ? setValue : handleClick;

  return (
    <button onClick={newSetValue}>
      <span role="img" aria-label="like">
        👍
      </span>
      {newValue}
    </button>
  );
};