import React, { Component } from "react";
import ChildComponentT from "./ChildComponentT";
class ParentComponentT extends React.PureComponent {
  //here component will not be rerendered if the state.age = 25 and we call the function onSameState bcoz state is same
  constructor(props) {
    super(props);
    this.state = { name: "Wasiq", age: 19 };
  }

  onStateChange = () => {
    this.setState({
      ...this.state,
      age: this.state.age + 1,
    });
  };

  onSameState = () => {
    this.setState({
      ...this.state,
      age: 25,
    });
  };

  render() {
    console.log("Parent Rendered");
    // console.log("this.state.name: ", this.state.name);
    // console.log("this.state.age: ", this.state.age);
    return (
      <div>
        <ChildComponentT
          onStateChange={this.onStateChange}
          name={this.state.name}
          age={this.state.age}
        />
        <button onClick={this.onSameState}>onSameState</button>
      </div>
    );
  }
}

export default ParentComponentT;
