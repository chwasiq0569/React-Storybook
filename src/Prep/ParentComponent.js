import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      arr: [],
    };
  }

  changingState = () => {
    let arr2 = [...this.state.arr];
    arr2.push(this.state.count);
    this.setState({ ...this.state, arr: arr2 });
    console.log(this.state.arr);
  };

  render() {
    console.log("ParentComponent Rendered");
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment {this.state.count}
        </button>
        <button onClick={() => this.changingState()}>
          Increment {this.state.count}
        </button>
        <ChildComponent count={this.count} arr={this.state.arr} />
        {/* <p>
          {this.state.arr.forEach((e) => (
            <li>{e}</li>
          ))}
        </p> */}
      </div>
    );
  }
}

export default ParentComponent;
