import axios from "axios";
import React, { useEffect, useState } from "react";
const ApiRequests = () => {
  const [dataAsString1, setDataAsString1] = useState("");
  const [dataAsString2, setDataAsString2] = useState("");
  const fetchData = async (n) => {
    const dataOfOne = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${n}`
    );
    const res = await dataOfOne.json();
    console.log(JSON.stringify(res));
    setDataAsString1(JSON.stringify(res));
    //   .then((res) => res.json())
    //   .then((data) => console.log(JSON.stringify(data)))
    //   .catch((err) => console.log(err));

    const dataOfTwo = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${n}`
    );
    console.log(JSON.stringify(dataOfTwo.data));
    setDataAsString2(JSON.stringify(dataOfTwo.data));
    //   .then((data) => console.log(JSON.stringify(data)))
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(15);
  }, []);

  return (
    <div>
      <p>{dataAsString1}</p>
      --------------------------------------------------
      <p>{dataAsString2}</p>
    </div>
  );
};

export default ApiRequests;
