import { useState } from "react";

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error(':(');
  }

  return <button onClick={handleCrash}>Crashear la app</button>;
};

export default MyBug;