import React from "react";
import { useState } from "react";
import HighOrderComponent from "./HighOrderComponent";
const ClickCounter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>
        Click to Increment {props.name} {props.count}
      </button>
    </div>
  );
};

export default HighOrderComponent(ClickCounter);
