import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComps from "./Components/ClassComps";
import Header from "./Components/StyledComponents/Header";
import HookTimer from "./PracticingHooks/HookTimer/HookTimer";
import UserForm from "./PracticingHooks/UserForm";
import UseState from "./ReactRendrer/UseState";
import UseReducer from "./ReactRendrer/UseReducer";
import ObjectUseState from "./ReactRendrer/ObjectUseState";
import ParentOne from "./ReactRendrer/Optimization/ParentOne";
import ChildOne from "./ReactRendrer/Optimization/ChildOne";
import HeroComp from "./ErrorBoundary/HeroComp";
import ErrorBosundary from "./ErrorBoundary/ErrorBoundary";
import Comp1 from "./ContextApi/Comp1";
import ContectProvider from "./ContextApi/ContectProvider";
import HighOrderComponent from "./HOC/HighOrderComponent";
import RenderProps from "./RenderProps/RenderProps";
import ReactLazyLoad from "./ReactLazyLoad/ReactLazyLoad";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import LearnPropTypes from "./LearningPropTypes/LearnPropTypes";
import KeysAsIndex from "./KeysAsIndex/KeysAsIndex";
import ParentComponentT from "./PracticingLifecycleMethods/ParentComponentT";
import ApiRequests from "./ApiRequests/ApiRequests";
import ReactParentComp from "./ReactOptimization/ReactParentComp";
import NameComp from "./ApiRequests/FetchDataWithSuspence/NameComp";
import AddressComp from "./ApiRequests/FetchDataWithSuspence/AddressComp";
import ReactChartJS from "./ReactChartJS/ReactChartJS";
import StarRating from "./StarRating/StarRating";
import SearchableComponent from "./SearchableComponent/SearchableComponent";
import DeeplyNestedDropdown from "./DeeplyNestedDropdown/DeeplyNestedDropdown";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import TodoList from "./TodoListChallenge/TodoList";
import GetRequest from "./GetPostRequests/GetRequest";
import PostRequest from "./GetPostRequests/PostRequest";
// import Main from "./MaterialUI/Main";
import TestCounter from "./Testing/Counter/TestCounter";

function App(props) {
  return (
    <>
      <TestCounter />
      {/* <Main /> */}
      {/* <KeysAsIndex /> */}
      {/* <TodoList /> */}
      {/* <GetRequest /> */}
      {/* <PostRequest /> */}
      {/* <ParentComponentT currentValue={75} /> */}
      {/* <ReactChartJS /> */}
      {/* <StarRating /> */}
      {/* <SearchableComponent /> */}
      {/* <DeeplyNestedDropdown /> */}
      {/* <InfiniteScroll /> */}
      {/* <ApiRequests /> */}
      {/* <ReactParentComp /> */}
      {/* <NameComp /> */}
      {/* <AddressComp /> */}
      {/* <ClickCounter myProp="Hello" /> */}
      {/* <RenderProps
        render={(count, increment) => (
          <CounterClick count={count} increment={increment} />
        )}
      />
      <RenderProps
        render={(count, increment) => (
          <CounterHover count={count} increment={increment} />
        )}
      /> */}
      {/* <LearnPropTypes
        name={"Wasiq"}
        age={21}
        objectsProps={{ id: "numl-s19-10218" }}
        funcProps={() => "Hello"}
        arrayProps={[1, 2, 3]}
      /> */}
      {/* <ErrorBoundary>
        <ReactLazyLoad />
      </ErrorBoundary> */}
    </>
  );
}
export default App;
