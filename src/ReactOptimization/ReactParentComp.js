import React, { useCallback, useMemo, useState } from "react";
import ReactChildComp from "./ReactChildComp";
//React.memo is same as PureComponent
const ReactParentComp = () => {
  const [parentState, setParentState] = useState(0);
  const [childState, setChildState] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const changeState = (value) => {
    setChildState(value);
  };
  console.log("Parent Rendered");

  const memoizedCallback = useCallback((number) => changeState(number), []);
  //useCallback hook do comparison based upon refrential equality
  //whenever parent component updated it create new changeState function
  //due to which the prevProps passed to childComponent does not equal to newProps and ChildComponent again rerenders when parentcomponent rerenders

  const getmax = () => {
    console.log("I am working");
    return Math.max(...arr);
  };

  const changeArrFunc = () => {
    setArr([10, 20, 30, 40]);
  };

  const memoizedValue = useMemo(() => getmax(), [arr]); //here arr is dependency bcoz the getMax will be called everytime whenever array is changed
  return (
    <div>
      <h1>ParentState: {parentState}</h1>
      <button onClick={() => setParentState(parentState + 1)}>
        Change Parent State
      </button>
      <ReactChildComp changeState={memoizedCallback} childState={childState} />
      {/* <button onClick={() => changeState(Math.random())}>
        {" "}
        Child State Change
      </button> */}
      {/* childState={childState} changeState={changeState} */}
      <p>Max Value: {memoizedValue}</p>
      <button onClick={changeArrFunc}>Change Array</button>
    </div>
  );
};

export default ReactParentComp;
