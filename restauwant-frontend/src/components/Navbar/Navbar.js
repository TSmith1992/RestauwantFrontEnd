import { Link } from "react-router-dom";
import React from "react";

export function Navbar({ isLoggedIn }) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {isLoggedIn === true && (
        <React.Fragment>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/jobs/new">New Job</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </React.Fragment>
      )}
      {isLoggedIn === false && (
        <React.Fragment>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </React.Fragment>
      )}
    </ul>
  );
}
