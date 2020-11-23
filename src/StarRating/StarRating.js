import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./starrating.css";
const StarRating = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [hoverState, setHoverState] = useState(0);
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState("");
  //   const doRating = (e) => {
  //     setHoverState(e + 1);
  //   };
  //   const doRatingNull = (e) => {
  //     setHoverState(0);
  //   };
  const rated = (e) => {
    setSelected(e + 1);
    console.log("Rated: ", e);
    setMessage(`Congrats You Rated this product ${e + 1} star`);
  };

  return (
    <>
      <h1>Rating Component</h1>
      <div className="wrapper">
        <div className="starsContainer">
          {arr.map((a, i) =>
            !selected ? (
              i + 1 <= hoverState ? (
                <div
                  className="star starFilled"
                  key={uuidv4()}
                  onMouseOver={() => setHoverState(i + 1)}
                  onMouseOut={() => setHoverState(0)}
                  onClick={() => rated(i)}
                ></div>
              ) : (
                <div
                  className="star"
                  key={uuidv4()}
                  onMouseOver={() => setHoverState(i + 1)}
                  onMouseOut={() => setHoverState(0)}
                  onClick={() => rated(i)}
                ></div>
              )
            ) : i + 1 <= selected ? (
              <div className="star starFilled" key={uuidv4()}></div>
            ) : (
              <div className="star " key={uuidv4()}></div>
            )
          )}
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>{message}</h3>
    </>
  );
};

export default StarRating;

// Real Code
// {arr.map((a, i) =>
//     !selected ? (
//       <div
//         className={i + 1 <= hoverState ? "star starFilled" : "star"}
//         key={uuidv4()}
//         onMouseOver={() => setHoverState(i + 1)}
//         onMouseOut={() => setHoverState(0)}
//         onClick={() => rated(i)}
//       ></div>
//     ) : (
//       <div
//         className={i + 1 <= selected ? "star starFilled" : "star"}
//         key={uuidv4()}
//       ></div>
//     )
//   )}
