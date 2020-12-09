import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const GetRequest = () => {
  const [todos, setTodos] = useState([]);
  const [postTodos, setPostTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data);
  };

  const options = {
    method: "POST",
    body: JSON.stringify({
      title: input,
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
    // console.log("data:", data);
    setPostTodos(data);
    console.log("data: ", data);
  };

  return (
    <div>
      <input
        type="text"
        placehodler="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          let newArr = [...todos];
          newArr.unshift({
            title: input,
          });
          setTodos(newArr);
          postRequest();
        }}
      >
        Add Todo
      </button>
      {todos.length === 0 ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo) => (
          <div key={uuidv4()}>
            <p>{todo.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default GetRequest;
