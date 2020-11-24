import React, { useState } from "react";
import "./deeplyNestedNav.css";

const DeeplyNestedDropdown = () => {
  const [showLevelOne, setShowLevelOne] = useState(false);
  const [showLevelTwo, setShowLevelTwo] = useState(false);
  const [data, setData] = useState({
    elem1: "Dynamic Drive",
    elem2: "Javascript Kit",
    activities: {
      activity1: "activity1",
      activity2: "activity2",
      activity3: "activity3",
      waterSports: {
        waterSports1: "Water Sports 1",
        waterSports1: "Water Sports 2",
        waterSports1: "Water Sports 3",
      },
      activity4: "activity4",
      activity5: "activity5",
      activity6: "activity6",
    },
  });

  return (
    <div>
      <ul className="navContainer">
        <li className="navElem">Dynamic Drive</li>
        <li className="navElem">Javascript Kit</li>
        <li
          className="LevelOneNav"
          onMouseOver={() => setShowLevelOne(true)}
          onMouseLeave={() => setShowLevelOne(false)}
          style={{ listStyleType: "disc" }}
        >
          Activity
        </li>
        <div
          onMouseOver={() => setShowLevelOne(true)}
          onMouseLeave={() => setShowLevelOne(false)}
          className={showLevelOne ? "levelOneNavContainer" : "hide"}
        >
          {" "}
          <li className="navElem">activity1</li>
          <li className="navElem">activity2</li>
          <li
            className="levelOneNavElem"
            onMouseOver={() => setShowLevelTwo(true)}
            onMouseLeave={() => setShowLevelTwo(false)}
          >
            activity3
          </li>
          <div
            onMouseOver={() => setShowLevelTwo(true)}
            onMouseLeave={() => setShowLevelTwo(false)}
            className={showLevelTwo ? "levelOneNavContainer" : "hide"}
          >
            <li className="levelTwoNavElem">activity3 (1)</li>
            <li className="levelTwoNavElem">activity3 (2)</li>
            <li className="levelTwoNavElem">activity3 (3)</li>
          </div>
          <li className="navElem">activity4</li>
          <li className="navElem">activity5</li>
          <li className="navElem">activity6</li>
        </div>
        <li className="navElem">Travelling</li>
        <li className="navElem">CSS Library</li>
      </ul>
    </div>
  );
};

export default DeeplyNestedDropdown;
