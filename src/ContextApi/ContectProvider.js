import React from "react";
export const MyContext = React.createContext();

const ContectProvider = (props) => {
  return (
    <MyContext.Provider value={{ fname: "Wasiq", lname: "Abdullah" }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContectProvider;
