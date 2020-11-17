import React from "react";
import { useState } from "react";
const CounterClick = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>
        Click to Increment {props.name} {count}
      </button>
    </div>
  );
};

export default CounterClick;
