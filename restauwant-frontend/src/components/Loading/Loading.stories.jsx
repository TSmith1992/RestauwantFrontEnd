import React from "react";
import { Loading } from "./index";

export default {
  title: "Example/Loading",
  component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Renders = Template.bind({});
Renders.args = {};
