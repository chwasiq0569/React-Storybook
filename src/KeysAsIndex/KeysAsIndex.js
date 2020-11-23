import React, { useState } from "react";
const KeysAsIndex = () => {
  const [elem, setElem] = useState(["Wasiq"]);
  const [val, setVal] = useState("");
  const insertAtEnd = () => {
    let newArr = [...elem, val];
    // newArr.push(val);
    setElem(newArr);
  };
  const insertAtStart = () => {
    let newArr = [val, ...elem];
    // newArr.unshift(val);
    setElem(newArr);
  };
  const removeAtStart = () => {
    let newArr = [...elem];
    newArr.shift();
    setElem(newArr);
  };

  const deleteData = (index) => {
    console.log("clicked", index);
    let newArr = [...elem];
    console.log(newArr.filter((d, i) => i !== index));
    setElem(newArr.filter((d, i) => i !== index));
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
        <li onClick={() => deleteData(i)} key={i}>
          {i}--{e}
        </li>
      ))}
    </div>
  );
};

export default KeysAsIndex;
