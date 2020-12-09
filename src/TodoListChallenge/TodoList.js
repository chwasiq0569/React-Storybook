import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todolist.css";
import Modal from "./Modal";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [clickedItem, setClickedItem] = useState("");
  const [open, setOpen] = useState(false);

  const onOpen = (item) => {
    setClickedItem(item);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        placehodler="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setTodos([...todos, input])}>Add Todo</button>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <li key={uuidv4()} onClick={() => onOpen(todo)}>
          {todo}
        </li>
      ))}
      <Modal open={open} onClose={onClose} clickedItem={clickedItem} />
    </div>
  );
};

export default TodoList;
