import React, { useEffect, useMemo, useState } from "react";
const Counter = () => {
  const [conterOne, setconterOne] = useState(0);
  const [conterTwo, setconterTwo] = useState(0);

  useEffect(() => {
    console.log("Updated");
  }, [conterOne, conterTwo]);

  // useMemo checks on every render is the output of function is same or not
  //use Memo caches result and useCallback caches the function
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 300000000) {
      i++;
    }
    return conterOne % 2 === 0;
  }, [conterOne]);

  const incrementOne = () => {
    setconterOne(conterOne + 1);
  };

  const incrementTwo = () => {
    setconterTwo(conterTwo + 1);
  };

  return (
    <div>
      <button onClick={incrementOne}>CounterOne - {conterOne}</button>
      <div></div>
      <span>{isEven ? "Even" : "Odd"}</span>
      <div></div>
      <button onClick={incrementTwo}>CounterTwo - {conterTwo}</button>
    </div>
  );
};

export default Counter;
