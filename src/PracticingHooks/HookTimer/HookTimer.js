import React, { useEffect, useState, useRef } from "react";
const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div>Hook Timer - {timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear</button>
    </>
  );
};
export default HookTimer;
