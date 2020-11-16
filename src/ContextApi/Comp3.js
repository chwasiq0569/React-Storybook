import React, { useContext } from "react";
import { MyContext } from "./ContectProvider";

const Comp3 = () => {
  const value = useContext(MyContext);
  return (
    <>
      <p>{value.state}</p>
      <button onClick={() => value.setState(value.state + 1)}>Increment</button>
    </>
  );
};

export default Comp3;
