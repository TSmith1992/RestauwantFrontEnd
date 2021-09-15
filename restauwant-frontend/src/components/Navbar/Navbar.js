import { NavLink } from "react-router-dom";
import React from "react";

export function Navbar({ hideLinks, newUser }) {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">RestauWant {newUser.full_name? `Happy Hunting, ${newUser.full_name}!`: "Please login/register to get started!"}</span>
        </NavLink>

        <ul className="nav nav-pills">
          {!hideLinks && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/jobs"
                >
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/jobs/new"
                >
                  New Job
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {hideLinks === true && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </header>
    </div>
  );
}