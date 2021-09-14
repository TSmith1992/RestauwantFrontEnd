import React from 'react';
import { JobList } from './JobList';

export default {
  title: 'Example/JobList',
  component: JobList,
};

const Template = (args) => <JobList {...args} />;
export const Loading = Template.bind({});
Loading.args = {
  jobs: [], loading: true}

export const Renders = Template.bind({});
Renders.args = {
    loading: false,
  jobs: [{
    "id": 1,
    "restaurant_id": 90,
    "name": "4",
    "job_type": "Internship",
    "pay": 20,
    "description": "Product",
    "desired_start_date": "2021-12-11"
    },
    {
    "id": 2,
    "restaurant_id": 17,
    "name": "2",
    "job_type": "Internship",
    "pay": 15,
    "description": "Chief",
    "desired_start_date": "2021-11-04"
    },
    {
    "id": 3,
    "restaurant_id": 3,
    "name": "4",
    "job_type": "Internship",
    "pay": 27,
    "description": "Future",
    "desired_start_date": "2021-10-12"
    },
    {
    "id": 4,
    "restaurant_id": 28,
    "name": "4",
    "job_type": "Commission",
    "pay": 22,
    "description": "Dynamic",
    "desired_start_date": "2021-10-05"
    },
    {
    "id": 5,
    "restaurant_id": 88,
    "name": "3",
    "job_type": "Part-time",
    "pay": 20,
    "description": "Global",
    "desired_start_date": "2021-12-31"
    },],
};