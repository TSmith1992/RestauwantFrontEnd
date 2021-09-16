import React from "react";
import { Navbar } from "./Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
  isLoggedIn: true,
};

export const NotLoggedIn = Template.bind({});
NotLoggedIn.args = {
  user: {},
  isLoggedIn: false,
};
