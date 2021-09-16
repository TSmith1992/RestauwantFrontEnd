import React from "react";
import {JobApplicant} from "./JobApplicant"

export function HMJob({ job }) {
  const mapNameToJobTitle = {
    1: "Chef",
    2: "Manager",
    3: "Bartender",
    4: "Server",
    5: "Busser",
  };  
return (
    <div className="card card-body">
      <h2 className="card-text">{mapNameToJobTitle[job.name]}</h2>
      <img
        src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg"
        style={{ height: "200px", width: "225px" }}
        alt="restaurant"
      />
      <br></br>
      <h5 className="card-title">{job.job_type}</h5>
      <p className="card-text"><strong>${job.pay}/hr</strong></p>
      <p className="card-text">{job.description}</p>
      <p className="card-text">The hiring manager is hoping for the employee to start on {job.desired_start_date}</p>
      <>{job.userjob.user.map((user) => {
        return (
          <div className="col" key={user.id}>
            <JobApplicant user={user} />
          </div>
        );
      })}</>
    </div>
  );
}