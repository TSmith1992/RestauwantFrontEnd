import { NavLink } from "react-router-dom";
import React from "react";
import { useHistory } from "react-router-dom";

export function Navbar({ hideLinks, user }) {
  const history = useHistory();
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">
            RestauWant{" "}
            {user.full_name
              ? `Hi there, ${user.full_name}!`
              : "Please login/register to get started!"}
          </span>
        </NavLink>

        <ul className="nav nav-pills">
          {!hideLinks && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  activeClassName="active"
                  to="/restaurants"
                >
                  My Restaurants
                </NavLink>
              </li>
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
              <li className="nav-item">
                <a
                  href="#logout"
                  onClick={(e) => {
                    e.preventDefault();
                    delete localStorage.user_fullname;
                    delete localStorage.user_phonenumber;
                    history.push("/login");
                    window.location.reload();
                  }}
                  className="nav-link"
                  activeClassName="active"
                >
                  Logout
                </a>
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
