import React from "react";
import CounterClick from "./CounterClick";
import CounterHover from "./CounterHover";
const RenderProps = (props) => {
  return (
    <>
      {props.render(false)}
      <CounterClick />
      <CounterHover />
    </>
  );
};

export default RenderProps;
