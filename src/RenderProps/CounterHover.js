import React, { useState } from "react";
const CounterHover = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 onMouseOver={increment}>
        Hover to Increment {props.name} {count}
      </h1>
    </div>
  );
};

export default CounterHover;
