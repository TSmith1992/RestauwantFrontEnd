import React from "react";
import { Loading } from "../Loading";
import { JobCard } from "./JobCard";

export function JobList({ jobs, loading, onClickApply, applyLoading }) {
  if (loading) {
    return <Loading />;
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
