import React from "react";
const HeroComp = ({ heroName }) => {
  console.log(heroName);
  if (heroName === "Joker") throw new Error("Not a Hero");
  return <h1>{heroName}</h1>;
};

export default HeroComp;
