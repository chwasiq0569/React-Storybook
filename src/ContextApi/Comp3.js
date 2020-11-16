import React, { useContext } from "react";
import { MyContext } from "./ContectProvider";

const Comp3 = () => {
  const value = useContext(MyContext);
  return (
    <>
      <p>{value.fname}</p>
      <p>{value.lname}</p>
    </>
  );
};

export default Comp3;
