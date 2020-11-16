import React, { useState } from "react";
export const MyContext = React.createContext();

const ContectProvider = (props) => {
  const [state, setState] = useState(0);
  return (
    <MyContext.Provider value={{ state, setState }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContectProvider;
