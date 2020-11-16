import React, { useState } from "react";
import HighOrderComponent from "./HighOrderComponent";
const HoverCounter = (props) => {
  return (
    <div>
      <h1 onMouseOver={props.increment}>
        Hover to Increment {props.name} {props.count}
      </h1>
    </div>
  );
};

export default HighOrderComponent(HoverCounter);
