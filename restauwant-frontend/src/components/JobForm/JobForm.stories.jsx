import React from "react";
import { JobForm } from "./JobForm";

export default {
  title: "Example/JobForm",
  component: JobForm,
};

const Template = (args) => <JobForm {...args} />;

export const Renders = Template.bind({});
Renders.args = {
  loading: false,
  restaurants: [
    {
      id: 1,
      user_id: 2,
      name: "1350 Gastropub",
      borough_location: "4",
      price_range: "2",
      picture: null,
      restaurant_type: "Vegetarian",
    },
    {
      id: 2,
      user_id: 2,
      name: "Blue Plate Spoon",
      borough_location: "3",
      price_range: "1",
      picture: null,
      restaurant_type: "Italian",
    },
  ],
  onSubmit: (newJob) => {
    console.log(newJob);
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  restaurants: [
    {
      id: 1,
      user_id: 2,
      name: "1350 Gastropub",
      borough_location: "4",
      price_range: "2",
      picture: null,
      restaurant_type: "Vegetarian",
    },
    {
      id: 2,
      user_id: 2,
      name: "Blue Plate Spoon",
      borough_location: "3",
      price_range: "1",
      picture: null,
      restaurant_type: "Italian",
    },
  ],
  onSubmit: (newJob) => {
    console.log(newJob);
  },
};
