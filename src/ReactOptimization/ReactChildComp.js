import React, { useState, Component } from "react";
const ReactChildComp = ({ changeState, childState }) => {
  // { changeState, childState }
  // const [childState, setChildState] = useState(0);
  // const changeState = (value) => {
  //   setChildState(value);
  // };
  console.log("Child Rendered");
  return (
    <div>
      <h1>ChildState: {childState}</h1>
      <button onClick={() => changeState(Math.random())}>
        Change Child State
      </button>
      {/* <button onClick={() => setChildState(Math.random())}>
        Change Child State
      </button> */}
    </div>
  );
};
// class ReactChildComp extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       childState: 0,
//     };
//   }

//   render() {
//     console.log("Child Rendered");
//     return (
//       <div>
//         <h1>ChildState: {this.state.childState}</h1>
//         {/* <button onClick={() => this.props.changeState(Math.random())}>
//           Change Child State
//         </button> */}
//         <button
//           onClick={() =>
//             this.setState({ childState: this.state.childState + 1 })
//           }
//         >
//           Change Child State
//         </button>
//       </div>
//     );
//   }
// }

// export default ReactChildComp;
export default React.memo(ReactChildComp);
