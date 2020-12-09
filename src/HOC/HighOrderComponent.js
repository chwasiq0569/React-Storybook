// import React, { useState } from "react";
// const HighOrderComponent = (OriginalComponent, incrementNumber) => {
//   console.log("props: ", OriginalComponent);
//   const NewComponent = (props) => {
//     // console.log("Inside HigherOrder: ", props.myProp);

//     const [count, setCount] = useState(0);
//     const increment = () => {
//       setCount(count + incrementNumber);
//     };
//     return (
//       <OriginalComponent
//         count={count}
//         increment={increment}
//         //name={props.name}
//         {...props}
//       />
//     );
//   };
//   return NewComponent;
// };

// export default HighOrderComponent;
