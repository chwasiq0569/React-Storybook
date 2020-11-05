import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("Rendered");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        {`Increment ${count} `}
      </button>
      <button
        onClick={() => setCount((count) => count - 1)}
      >{`Decrement ${count} `}</button>
      <button onClick={() => setCount(count)}>{`Reset ${count} `}</button>
    </div>
  );
};

export default UseState;
