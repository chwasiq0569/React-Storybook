// import React, { useState } from "react";
// const TestCounter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//     </div>
//   );
// };
// export default TestCounter;
import React, { Component } from "react";
class TestCount extends Component {
  state = { count: 0 };
  render() {
    return (
      <>
        <button
          data-test="incrementBtn"
          onClick={() => this.setState({ count: this.state.count + 2 })}
        >
          +++
        </button>
        <p className="countValue">count: {this.state.count}</p>
        <button
          data-test="decrementBtn"
          onClick={() => this.setState({ count: this.state.count - 2 })}
        >
          ---
        </button>
      </>
    );
  }
}

export default TestCount;
