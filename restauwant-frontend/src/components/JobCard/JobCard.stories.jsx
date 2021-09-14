import React from 'react';
import { JobCard } from './JobCard';

export default {
  title: 'Example/JobCard',
  component: JobCard,
};

const Template = (args) => <JobCard {...args} />;

export const Renders = Template.bind({});
Renders.args = {
  job: {
    "id": 1,
    "restaurant_id": 90,
    "name": "4",
    "job_type": "Internship",
    "pay": 20,
    "description": "Product",
    "desired_start_date": "2021-12-11"
  },
};