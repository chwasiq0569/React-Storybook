import React, { useState } from "react";

const initialState = {
  fname: "Bruce",
  lname: "Clark",
};
const initialStateArr = ["Bruce", "Clark"];

const ObjectUseState = () => {
  const [persons, setPersons] = useState(initialState);
  const [personsArr, setPersonsArr] = useState(initialStateArr);

  const changeState = () => {
    let newPersons = { ...persons };
    newPersons.fname = "Wasiq";
    newPersons.lname = "Abdullah";
    setPersons(newPersons);
  };

  const changeStateArr = () => {
    let newPersonsArr = [...personsArr];
    newPersonsArr.push("Wasiq");
    newPersonsArr.push("Abdullah");
    setPersonsArr(newPersonsArr);
  };
  console.log("Component Rendered");
  return (
    <div>
      {/* <button onClick={changeState}>
        {persons.fname} | {persons.lname}
      </button> */}
      <button onClick={changeStateArr}>Click</button>
      {personsArr.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
};

export default ObjectUseState;
