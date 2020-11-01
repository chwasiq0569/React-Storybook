import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComps from "./Components/ClassComps";
import Header from "./Components/StyledComponents/Header";
import Counter from "./PracticingHooks/Counter";
import HookTimer from "./PracticingHooks/HookTimer/HookTimer";
// import { Provider } from 'react-redux';
// import { store } from "./Redux/store";
// import CakeContainer from './Components/CakeContainer';

function App() {
  const [unmount, setUnmount] = useState(false);

  return (
    // <Provider store={store}>
    <div className="App">
      {/* <Counter /> */}
      <HookTimer />
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
