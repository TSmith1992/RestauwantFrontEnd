import React, { useEffect, useState } from "react";
import {HMJob} from "./HMJob";

export function HMDashboard({ user }) {
  //state variable for jobs
  const [jobs, setJobs] = useState();

  //function to render job cards
  useEffect(() => {
    fetch(`/api/users/${user.full_name}`)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.restaurants)
          // .map(restaurant => restaurant.jobs))
        setJobs(r.restaurants)
          // .map(restaurant => restaurant.jobs));
      });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {jobs.map((job) => job.jobs.map(job=> {
        return (
          <div className="col" key={job.id}>
            <HMJob job={job} />
          </div>
        );
      }))}
      hi
    </div>
  );
}