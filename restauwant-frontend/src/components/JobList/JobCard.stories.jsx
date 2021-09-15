import React from "react";
import { JobCard } from "./JobCard";

export default {
  title: "Example/JobCard",
  component: JobCard,
};

const Template = (args) => <JobCard {...args} />;

export const Renders = Template.bind({});
Renders.args = {
  loading: false,
  onClickApply: () => {
    console.log("clicked");
  },
  job: {
    id: 1,
    restaurant_id: 90,
    name: "4",
    job_type: "Internship",
    pay: 20,
    description: "Product",
    desired_start_date: "2021-12-11",
    restaurant: {
      id: 90,
      user_id: 3,
      name: "Golden Pizza",
      borough_location: "5",
      price_range: "3",
      picture: null,
      restaurant_type: "Vegetarian",
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  onClickApply: () => {
    console.log("clicked");
  },
  job: {
    id: 1,
    restaurant_id: 90,
    name: "4",
    job_type: "Internship",
    pay: 20,
    description: "Product",
    desired_start_date: "2021-12-11",
    restaurant: {
      id: 90,
      user_id: 3,
      name: "Golden Pizza",
      borough_location: "5",
      price_range: "3",
      picture: null,
      restaurant_type: "Vegetarian",
    },
  },
};
