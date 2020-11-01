import React from "react";
import useInputHook from "./CustomHook/useInputHook";
const UserForm = () => {
  const [firstname, bindFirstname, resetFirstname] = useInputHook("");
  const [lastname, bindLastname, resetLastname] = useInputHook("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstname} ${lastname}`);
    resetFirstname();
    resetLastname();
  };
  return (
    <div>
      <input type="text" {...bindFirstname} />
      <input type="text" {...bindLastname} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default UserForm;
