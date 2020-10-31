import React from "react";
import "./demobutton.css";

const DemoButton = (props) => {
  const { variant = "primary", children, ...rest } = props;

  return <button className={`button ${variant} {...rest}`}>{children}</button>;
};

export default DemoButton;
