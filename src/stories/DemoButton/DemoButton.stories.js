import React from "react";
import Center from "../Center/Center";
import DemoButton from "./DemoButton";

export default {
  title: "form/DemoButton",
  component: DemoButton,
};

export const Primary = () => <DemoButton variant="primary">Primary</DemoButton>;

export const Secondary = () => (
  <DemoButton variant="secondary">Secondary</DemoButton>
);

export const Success = () => <DemoButton variant="success">Success</DemoButton>;

export const Danger = () => <DemoButton variant="danger">Danger</DemoButton>;

const Template = (args) => <DemoButton {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "PrimaryA",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "SecondaryA",
};

export const DangerA = Template.bind({});
DangerA.args = {
  variant: "danger",
  children: "DangerA",
};
