import React, { PureComponent } from "react";
class ChildComponent extends PureComponent {
  render(props) {
    console.log("ChildComponent Rendered");
    return (
      <>
        <h1>{this.props.count}</h1>;
      </>
    );
  }
}

export default ChildComponent;
