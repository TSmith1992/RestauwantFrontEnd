import React from "react";
import { JobList } from "./JobList";

export default {
  title: "Example/JobList",
  component: JobList,
};

const Template = (args) => <JobList {...args} />;
export const Loading = Template.bind({});
Loading.args = {
  jobs: [],
  loading: true,
};

export const Renders = Template.bind({});
Renders.args = {
  loading: false,
  jobs: [
    {
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
    {
      id: 2,
      restaurant_id: 17,
      name: "2",
      job_type: "Internship",
      pay: 15,
      description: "Chief",
      desired_start_date: "2021-11-04",
      restaurant: {
        id: 17,
        user_id: 1,
        name: "Fast Spoon",
        borough_location: "2",
        price_range: "1",
        picture: null,
        restaurant_type: "Asian",
      },
    },
    {
      id: 3,
      restaurant_id: 3,
      name: "4",
      job_type: "Internship",
      pay: 27,
      description: "Future",
      desired_start_date: "2021-10-12",
      restaurant: {
        id: 3,
        user_id: 2,
        name: "Sweet Dragon",
        borough_location: "5",
        price_range: "2",
        picture: null,
        restaurant_type: "Desserts",
      },
    },
    {
      id: 4,
      restaurant_id: 28,
      name: "4",
      job_type: "Commission",
      pay: 22,
      description: "Dynamic",
      desired_start_date: "2021-10-05",
      restaurant: {
        id: 28,
        user_id: 2,
        name: "Spice Curry",
        borough_location: "5",
        price_range: "3",
        picture: null,
        restaurant_type: "Greek",
      },
    },
    {
      id: 5,
      restaurant_id: 88,
      name: "3",
      job_type: "Part-time",
      pay: 20,
      description: "Global",
      desired_start_date: "2021-12-31",
      restaurant: {
        id: 88,
        user_id: 3,
        name: "Silver King",
        borough_location: "3",
        price_range: "4",
        picture: null,
        restaurant_type: "Vegan",
      },
    },
  ],
};
