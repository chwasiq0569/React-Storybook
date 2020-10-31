import React from "react";
import "./demoinput.css";

const DemoInput = (props) => {
  const { variant = "primray", children, ...rest } = props;

  return <input className={`input ${variant} {...rest}`}></input>;
};

export default DemoInput;
