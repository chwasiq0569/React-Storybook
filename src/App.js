import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComps from "./Components/ClassComps";
import Header from "./Components/StyledComponents/Header";
import Counter from "./PracticingHooks/Counter";
import HookTimer from "./PracticingHooks/HookTimer/HookTimer";
import UserForm from "./PracticingHooks/UserForm";
// import { Provider } from 'react-redux';
// import { store } from "./Redux/store";
// import CakeContainer from './Components/CakeContainer';
import UseState from "./ReactRendrer/UseState";
import UseReducer from "./ReactRendrer/UseReducer";
import ObjectUseState from "./ReactRendrer/ObjectUseState";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      {/* <Counter /> */}
      {/* <UserForm /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      <ObjectUseState />
      {/* <HookTimer /> */}
      {/* {
        !unmount ? <ClassComps setUnmount={setUnmount} /> : "Unmounted"
      }
      <button onClick={() => setUnmount(!unmount)}>{ unmount ? "Show" : "Hide" }</button> */}
      {/* <Header /> */}
      {/* <CakeContainer /> */}
    </div>
    // </Provider>
  );
}

export default App;
