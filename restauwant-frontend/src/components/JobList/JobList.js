import React from "react";
import { JobCard } from "./JobCard";

export function JobList({ jobs, loading, onClickApply, applyLoading }) {
  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {jobs.map((job) => {
        return (
          <div className="col" key={job.id}>
            <JobCard
              loading={applyLoading}
              job={job}
              onClickApply={() => {
                onClickApply(job.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
