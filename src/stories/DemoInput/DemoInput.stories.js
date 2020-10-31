import React from "react";
import DemoInput from "./DemoInput";

export default {
  title: "form/DemoInput",
  component: DemoInput,
};

export const Small = () => (
  <DemoInput variant="small" placeholder="Small Input">
    Small
  </DemoInput>
);
export const Medium = () => (
  <DemoInput variant="medium" placeholder="Medium Input">
    Medium
  </DemoInput>
);
export const Large = () => (
  <DemoInput variant="large" placeholder="Large Input">
    Large
  </DemoInput>
);

// Small.storyName = "Small Input";
// Medium.storyName = "Medium Input";
// Large.storyName = "Large Input";
