import React, { useState } from "react";

export function JobForm({ loading, restaurants, onSubmit }) {
  const [newJob, setNewJob] = useState({
    restaurant_id: 1,
    name: 1,
    job_type: "1",
    pay: 0,
    description: "",
    desired_start_date: new Date(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Create a new job for a restaurant here</h1>
      <div className="mb-3">
        <label>Restaurant</label>
        <select
          onChange={(e) => {
            setNewJob({
              ...newJob,
              restaurant_id: e.currentTarget.value,
            });
          }}
          disabled={loading}
          placeholder="Please select the restaurant"
          className="form-control"
        >
          {restaurants.map((r) => (
            <option value={r.id}>{r.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label>Hourly Rate</label>
        <input
          onChange={(e) => {
            setNewJob({
              ...newJob,
              pay: e.currentTarget.value,
            });
          }}
          disabled={loading}
          type="number"
          min={7.5}
          placeholder="Please enter the amount to pay per hour"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Job Role</label>
        <select
          onChange={(e) => {
            setNewJob({
              ...newJob,
              name: e.currentTarget.value,
            });
          }}
          disabled={loading}
          placeholder="Please select the job type"
          className="form-control"
        >
          <option value="1">Chef</option>
          <option value="2">Manager</option>
          <option value="3">Bartender</option>
          <option value="4">Server</option>
          <option value="5">Busser</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Job Type</label>
        <select
          onChange={(e) => {
            setNewJob({
              ...newJob,
              job_type: e.currentTarget.value,
            });
          }}
          disabled={loading}
          placeholder="Please select the job type"
          className="form-control"
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Commission</option>
          <option>Temporary</option>
          <option>Internship</option>
        </select>
      </div>
      <div className="mb-3">
        <label>Job Description</label>
        <input
          onChange={(e) => {
            setNewJob({
              ...newJob,
              description: e.currentTarget.value,
            });
          }}
          disabled={loading}
          type="text"
          placeholder="Please enter the job description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Start Date</label>
        <input
          onChange={(e) => {
            setNewJob({
              ...newJob,
              desired_start_date: e.currentTarget.value,
            });
          }}
          disabled={loading}
          type="date"
          placeholder="Please enter the Start Date"
          className="form-control"
        />
      </div>

      <div className="d-flex justify-content-end">
        <button type="submit" disabled={loading} className="btn btn-primary">
          Create Job Posting
        </button>
      </div>
    </form>
  );
}
