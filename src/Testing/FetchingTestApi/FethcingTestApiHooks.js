import React, { useEffect, useState } from "react";

const FetchingTestApiHooks = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  console.log("user: ", user);
  return <h1>{!user ? "Loading..." : null}</h1>;
};

export default FetchingTestApiHooks;
