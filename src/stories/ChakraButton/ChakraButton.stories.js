import React from "react";
import { Button } from "@chakra-ui/core";
import { action, actions } from "@storybook/addon-actions";
export default {
  title: "Chakra/Button",
  component: Button,
  //   argsTypes: {
  //     variantColor: { control: "text" },
  //     children: { control: "text" },
  //   onClick: { action: "clicked" },
  //   },
};

// const Template = (args) => <Button {...args} />;

// export const Success = Template.bind({});
// Success.args = {
//   variantColor: "green",
//   children: "Success",

// };

// export const Danger = Template.bind({});
// Danger.args = {
//   variantColor: "red",
//   children: "Danger",
// };

export const Success = () => (
  <Button variantColor="green" onClick={action("Click Handler")}>
    Success
  </Button>
);

export const Danger = () => (
  <Button variantColor="red" {...actions("onClick", "onMouseOver")}>
    Danger
  </Button>
);

export const Log = () => (
  <Button
    variantColor="purple"
    onClick={() => console.log("Clicked", process.env.STORYBOOK_THEME)}
  >
    Log
  </Button>
);
