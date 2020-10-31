import React from "react";
import { Primary } from "../DemoButton/DemoButton.stories";
import { Small } from "../DemoInput/DemoInput.stories";

export default {
  title: "form/Subscription",
};

export const primarySubscription = () => {
  return (
    <>
      <Primary />
      <Small />
    </>
  );
};
