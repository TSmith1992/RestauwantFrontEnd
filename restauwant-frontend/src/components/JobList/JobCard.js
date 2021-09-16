import React from "react";

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

export function JobCard({ job, loading, onClickApply }) {
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
        className="btn btn-outline-success btn-block"
        disabled={loading}
        onClick={() => onClickApply()}
      >
        Apply
      </button>
    </div>
  );
}
