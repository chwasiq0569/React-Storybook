import React, { useState } from "react";
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
  const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState("");

  const searchData = (e) => {
    let result = [];
    // console.log(e.target.value);
    setInput(e.target.value);
    items.forEach((i) => {
      console.log(i);
      if (i.includes(input)) {
        result.push(i);
        setSearchResult(result);
      }
    });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search"
        value={input}
        onChange={(e) => searchData(e)}
      />
      {searchResult.map((e) => (
        <p key={e}>{e}</p>
      ))}
    </div>
  );
};

export default SearchableComponent;
