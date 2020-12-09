import React, { Component } from "react";
import TestCount from "./TestCounter";

const createRange = (num) =>
  //Array.from create an array of elements inside brackets
  //Array(size).keys() returns iterator
  //The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
  Array.from(Array(num).keys());
class CounterList extends Component {
  rederCounterList = (index) => {
    return (
      <li key={index}>
        <TestCount />
      </li>
    );
  };
  state = { numCounters: 2 };

  render() {
    const counterArray = createRange(this.state.numCounters);
    return (
      <>
        <button
          data-test="numCountersIncrement"
          onClick={() => {
            this.setState((prevState) => ({
              numCounters: prevState.numCounters + 1,
            }));
          }}
        >
          Add Counter
        </button>
        <ul>{counterArray.map((num) => this.rederCounterList(num))}</ul>
      </>
    );
  }
}

export default CounterList;
