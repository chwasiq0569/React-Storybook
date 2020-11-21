import React, { useState } from "react";
const KeysAsIndex = () => {
  const [elem, setElem] = useState(["A"]);
  const [val, setVal] = useState("");
  const insertAtEnd = () => {
    let newArr = [...elem];
    newArr.push(val);
    setElem(newArr);
  };
  const insertAtStart = () => {
    let newArr = [...elem];
    newArr.unshift(val);
    setElem(newArr);
  };
  const removeAtStart = () => {
    let newArr = [...elem];
    newArr.shift();
    setElem(newArr);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => insertAtStart()}>Insert At Start</button>
      <button onClick={() => insertAtEnd()}>Insert At End</button>
      <button onClick={() => removeAtStart()}>Remove At Start</button>
      {elem.map((e, i) => (
        <h1 key={i}>
          {i}--{e}
        </h1>
      ))}
    </div>
  );
};

export default KeysAsIndex;
