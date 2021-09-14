import React from "react";
import { JobCard } from "./JobCard";

export function JobList({ jobs }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {jobs.map((job) => {
        return (
          <div className="col">
            <JobCard job={job} />
          </div>
        );
      })}
    </div>
  );
}
