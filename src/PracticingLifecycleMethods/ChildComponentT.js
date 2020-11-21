import React, { Component } from "react";
class ChildComponentT extends React.PureComponent {
  // React.PureComponent render Child component only once when props are changed and Child Component will not be rendered if props are same
  //React.PureComponent uses shouldComponentUpdate with shallow comparison

  //   shouldComponentUpdate(prevProps, prevState) {
  //if we return false it will not rerender ChildComponent and props are also not updated if any state is declared inside component it will also not be updated bcoz on returning false it will not render the component
  // if (prevProps.age != this.props.age) {
  //   console.log(
  //     "prevProps.age: ",
  //     prevProps.age,
  //     "this.props.age : ",
  //     this.props.age
  //   );
  //   return true;
  // }
  // return false;
  //   }

  render() {
    console.log("Child Rendered");
    return (
      <div>
        <h1>ParentState Data</h1>
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
        <button onClick={this.props.onStateChange}>Change Date</button>
      </div>
    );
  }
}

export default ChildComponentT;
