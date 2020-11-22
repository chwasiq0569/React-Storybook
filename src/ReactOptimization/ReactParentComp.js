import React, { useState } from "react";
import ReactChildComp from "./ReactChildComp";
//React.memo is same as PureComponent
const ReactParentComp = () => {
  const [parentState, setParentState] = useState(0);
  const [childState, setChildState] = useState(0);
  const changeState = (value) => {
    setChildState(value);
  };
  console.log("Parent Rendered");
  return (
    <div>
      <h1>ParentState: {parentState}</h1>
      <button onClick={() => setParentState(parentState + 1)}>
        Change Parent State
      </button>
      <ReactChildComp changeState={changeState} childState={childState} />
      {/* <button onClick={() => changeState(Math.random())}>
        {" "}
        Child State Change
      </button> */}
      {/* childState={childState} changeState={changeState} */}
    </div>
  );
};

export default ReactParentComp;
