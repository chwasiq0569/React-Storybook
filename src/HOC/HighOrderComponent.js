import React, { useState } from "react";
const HighOrderComponent = (OriginalComponent, incrementNumber) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + incrementNumber);
    };
    return (
      <OriginalComponent
        count={count}
        increment={increment}
        //name={props.name}
        {...props}
      />
    );
  };
  return NewComponent;
};

export default HighOrderComponent;
