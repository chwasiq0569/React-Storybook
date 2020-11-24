import React, { useState } from "react";
import { v4 } from "uuid";
const SearchableComponent = () => {
  const [items, setItems] = useState([
    "Pakistan",
    "China",
    "Srilanka",
    "Bangladesh",
    "Australia",
    "USA",
    "Canada",
    "Austria",
  ]);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedElem, setElectedElem] = useState("");

  //   const searchData = (e) => {
  //     let result = [];
  //     setInput(e.target.value);
  //     items.forEach((i) => {
  //       console.log(i);
  //       if (i.toLowerCase().includes(input.toLowerCase())) {
  //         result.push(i);
  //         setSearchResult(result);
  //       }
  //     });
  //   };

  const selectItems = (e) => {
    setSelected([...selected, e.target.innerText]);
    let newItems = [...items];
    setItems(newItems.filter((item) => item !== e.target.innerText));
  };

  const removeItems = (e) => {
    console.log(e.target.innerText);
    setItems([...items, e.target.innerText]);
    let newSelectedItems = [...selected];
    setSelected(newSelectedItems.filter((item) => item !== e.target.innerText));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "auto",
        }}
      >
        {" "}
        Selected:{" "}
        {selected.map((elem) => (
          <p
            style={{ width: "fit-content" }}
            className="selected"
            key={v4()}
            onClick={(e) => removeItems(e)}
          >
            {elem} {"    "}
          </p>
        ))}
      </div>
      <div>List </div>
      {items.map((elem) => (
        <li
          style={{ width: "fit-content" }}
          key={v4()}
          onClick={(e) => selectItems(e)}
        >
          {elem}
        </li>
      ))}
    </div>
  );
};

export default SearchableComponent;
