import React from "react";
import CounterClick from "../RenderProps/CounterClick";
import { useState } from "react";
import ClickCounter from "../HOC/ClickCounter";
const RenderingUsingSwitch = () => {
  const [a, setA] = useState("a");
  return <>{a === "a" && <ClickCounter />}</>;
};

export default RenderingUsingSwitch;
