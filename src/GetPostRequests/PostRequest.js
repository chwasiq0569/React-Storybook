import React, { useEffect } from "react";
const PostRequest = () => {
  useEffect(() => {
    postRequest();
  }, []);

  const options = {
    method: "POST",
    body: JSON.stringify({
      title: "data",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const postRequest = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    const data = await res.json();
    console.log("data:", data);
  };

  return <div></div>;
};

export default PostRequest;
