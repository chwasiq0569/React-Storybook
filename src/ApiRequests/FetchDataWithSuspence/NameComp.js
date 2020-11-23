import React, { useEffect, useState } from "react";
import AddressComp from "./AddressComp";
const NameComp = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("WASIQ");
      }, 5000);
    });
    getName.then((response) => {
      setName(response);
    });
  }, []);

  return (
    <div>
      {!name ? <h1>Loading Name...</h1> : <h1>Name: {name}</h1>}
      <AddressComp />
    </div>
  );
};

export default NameComp;
