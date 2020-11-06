import React, { useState } from "react";
import ChildOne from "./ChildOne";

const ParentOne = (props) => {
  const [count, setCount] = useState(0);
  console.log("ParentOne Rendered");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        {`Increment ${count} `}
      </button>
      <button
        onClick={() => setCount((count) => count - 1)}
      >{`Decrement ${count} `}</button>
      <button onClick={() => setCount(0)}>{`Reset ${count} `}</button>
      {props.children}
    </div>
  );
};

export default ParentOne;
