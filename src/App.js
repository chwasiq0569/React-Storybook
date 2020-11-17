import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComps from "./Components/ClassComps";
import Header from "./Components/StyledComponents/Header";
import HookTimer from "./PracticingHooks/HookTimer/HookTimer";
import UserForm from "./PracticingHooks/UserForm";
// import { Provider } from 'react-redux';
// import { store } from "./Redux/store";
// import CakeContainer from './Components/CakeContainer';
import UseState from "./ReactRendrer/UseState";
import UseReducer from "./ReactRendrer/UseReducer";
import ObjectUseState from "./ReactRendrer/ObjectUseState";
import ParentOne from "./ReactRendrer/Optimization/ParentOne";
import ChildOne from "./ReactRendrer/Optimization/ChildOne";
import ParentComponent from "./Prep/ParentComponent";
import HeroComp from "./ErrorBoundary/HeroComp";
import ErrorBosundary from "./ErrorBoundary/ErrorBoundary";
import Comp1 from "./ContextApi/Comp1";
import ContectProvider from "./ContextApi/ContectProvider";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import HighOrderComponent from "./HOC/HighOrderComponent";
import RenderProps from "./RenderProps/RenderProps";

function App() {
  return (
    // // <Provider store={store}>
    // <ContectProvider>
    //   <div className="App">
    <>
      {/* <ClickCounter name="Wasiq A" />
      <HoverCounter name="Wasiq B" /> */}
      <RenderProps render={(isLogged) => (isLogged ? "Wasiq" : "Not Wasiq")} />
      {/* <Counter /> */}
      {/* <UserForm /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <ParentComponent /> */}
      {/* <ErrorBoundary> */}
      {/* <Comp1 /> this will not catch errors in onClick handlers */}
      {/* <HeroComp heroName="Wasiq" />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroComp heroName="Wasiq Abdullah" />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroComp heroName="Joker" />
      </ErrorBoundary> */}
      {/* <HookTimer /> */}
      {/* {
        !unmount ? <ClassComps setUnmount={setUnmount} /> : "Unmounted"
      }
      <button onClick={() => setUnmount(!unmount)}>{ unmount ? "Show" : "Hide" }</button> */}
      {/* <Header /> */}
      {/* <CakeContainer /> */}
      {/* </div>
    </ContectProvider>
    //{" "}
    // </Provider> */}
    </>
  );
}
export default App;
