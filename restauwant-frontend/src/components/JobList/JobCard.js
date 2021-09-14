import React from "react";

export function JobCard({ job }) {
  return (
    <div className="card card-body">
      <h5 className="card-title">{job.description}</h5>
      <p className="card-text">{job.job_type}</p>
      <p className="card-text">{job.restaurant.name}</p>
    </div>
  );
}
