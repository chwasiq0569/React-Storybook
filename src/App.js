import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComps from "./Components/ClassComps";
import Header from "./Components/StyledComponents/Header";
// import { Provider } from 'react-redux';
// import { store } from "./Redux/store";
// import CakeContainer from './Components/CakeContainer';

function App() {
  const [unmount, setUnmount] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        {/* {
        !unmount ? <ClassComps setUnmount={setUnmount} /> : "Unmounted"
      }
      <button onClick={() => setUnmount(!unmount)}>{ unmount ? "Show" : "Hide" }</button> */}
        {/* <Header /> */}
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
