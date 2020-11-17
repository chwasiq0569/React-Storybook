import React from "react";
import { useState } from "react";
import CounterClick from "./CounterClick";
import CounterHover from "./CounterHover";
const RenderProps = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      {/* {props.render(false)}
      <CounterClick />
      <CounterHover /> */}
      {props.render(count, increment)}
    </>
  );
};

export default RenderProps;
