import React, { useState } from 'react';
import { ControlProps } from './ControlProps';
import { NoControlProps } from './NoControlProps';

export const ControlPropsPage = () => {
  const [counter, setCounter] = useState(0);

  const handleUpdateValue = () => {
    setCounter(c => c + 1);
  };

  return (
    <>
      <h2>Sin Control Props</h2>
      <hr />
      <NoControlProps cb={likes => likes + 100} />

      <br />

      <h2>Con Control Props</h2>
      <hr />
      <ControlProps
        value={counter}
        setValue={handleUpdateValue}
      />
    </>
  );
};
