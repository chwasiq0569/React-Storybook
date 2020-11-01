import React, { useState } from "react";

const useInputHook = (initalValue) => {
  const [value, setValue] = useState("");
  const reset = () => {
    setValue(initalValue);
  };
  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, bind, reset];
};

export default useInputHook;
