import React from "react";
import { useState } from "react";
const CounterClick = (props) => {
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  return (
    <div>
      <button onClick={props.increment}>
        Click to Increment {props.count}
      </button>
    </div>
  );
};

export default CounterClick;
