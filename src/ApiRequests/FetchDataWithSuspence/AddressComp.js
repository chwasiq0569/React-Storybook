import React, { useEffect, useState } from "react";
const AddressComp = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("House 1234 Rwp Pakistan");
      }, 5000);
    });
    getName.then((response) => {
      setAddress(response);
    });
  }, []);

  return (
    <div>
      {!address ? <h1>Loading Address...</h1> : <h1>Name: {address}</h1>}
    </div>
  );
};

export default AddressComp;
