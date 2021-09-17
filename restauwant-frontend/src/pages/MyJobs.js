import React from "react";
import { Loading } from "../components/Loading";
import { UserJobsFetcher } from "../components/UserJobsFetcher/UserJobsFetcher";
import { UserJobDeleter } from "../components/UserJobDeleter/UserJobDeleter";

const mapNameToJobTitle = {
  1: "Chef",
  2: "Manager",
  3: "Bartender",
  4: "Server",
  5: "Busser",
};

const mapBoroughToLabel = {
  1: "Manhattan",
  2: "Brooklyn",
  3: "Queens",
  4: "Staten Island",
  5: "Bronx",
};

const mapPriceToLabel = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$",
  5: "$$$$$",
};

export function JobCard({ job, loading, onClickDelete }) {
  const location = mapBoroughToLabel[job.restaurant.borough_location];
  return (
    <div className="card card-body">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="card-text">{job.restaurant.name}</h5>
        <p className="card-text text-success">
          {mapPriceToLabel[job.restaurant.price_range]}
        </p>
      </div>
      <p className="card-text">
        {location} - {job.restaurant.restaurant_type}
      </p>
      <p className="card-text d-flex align-items-center">
        <span className="badge rounded-pill bg-success mr-2 ">
          ${job.pay} / hr
        </span>
        <span className="mx-2">
          {" "}
          {mapNameToJobTitle[job.name]} - {job.job_type}{" "}
        </span>
      </p>
      <button
        className="btn btn-outline-danger btn-block"
        disabled={loading}
        onClick={() => onClickDelete()}
      >
        Delete Job Application
      </button>
    </div>
  );
}

export function MyJobs({ user }) {
  return (
    <UserJobsFetcher user={user}>
      {({ loading, userJobs }) => {
        if (loading) {
          return <Loading />;
        }
        if (userJobs.length === 0) {
          return <h3>No job applications found</h3>;
        }
        return (
          <UserJobDeleter>
            {({ loading: deleting, deleteUserJob }) => (
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {userJobs.map((userjob) => {
                  return (
                    <div className="col" key={userjob.id}>
                      <JobCard
                        job={userjob.job}
                        loading={deleting}
                        onClickDelete={() => {
                          deleteUserJob(userjob.id);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </UserJobDeleter>
        );
      }}
    </UserJobsFetcher>
  );
}
