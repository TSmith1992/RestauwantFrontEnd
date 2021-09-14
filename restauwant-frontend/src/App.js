import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/jobs/new">New Job</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/jobs">
            Jobs
          </Route>
          <Route exact path="/jobs/new">
            New Job
          </Route>
          <Route path="/dashboard">Dashboard</Route>
          <Route path="/login">Login</Route>
          <Route path="/register">Register</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
