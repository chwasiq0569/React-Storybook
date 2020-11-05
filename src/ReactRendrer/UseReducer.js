import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("Rendered");
  return (
    <div>
      <button
        onClick={() => dispatch("increment")}
      >{`Increment ${count} `}</button>
      <button
        onClick={() => dispatch("decrement")}
      >{`Decrement ${count} `}</button>
      <button onClick={() => dispatch("reset")}>{`Reset ${count} `}</button>
    </div>
  );
};

export default UseReducer;
