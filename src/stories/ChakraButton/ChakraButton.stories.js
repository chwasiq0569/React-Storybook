import React from "react";
import { Button } from "@chakra-ui/core";

export default {
  title: "Chakra/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
  //   argsTypes: {
  //     variantColor: { control: "text" },
  //     children: { control: "text" },
  onClick: { action: "clicked" },
  //   },
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
};

// export const Success = () => <Button variantColor="green">Success</Button>;

// export const Danger = () => <Button variantColor="red">Danger</Button>;
