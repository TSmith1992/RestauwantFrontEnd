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
      <h5 className="card-text">{job.restaurant.name}</h5>
      <p className="card-text">
        {mapNameToJobTitle[job.name]} - {job.job_type}
      </p>
      <p className="card-text text-success">
        {mapPriceToLabel[job.restaurant.price_range]}
      </p>
      <p className="card-text">{location}</p>
      <p className="card-text">{job.restaurant.restaurant_type}</p>
      <p className="card-text">${job.pay} / hr</p>
      <button
        className="btn btn-primary btn-block"
        disabled={loading}
        onClick={() => onClickApply()}
      >
        Apply
      </button>
    </div>
  );
}
