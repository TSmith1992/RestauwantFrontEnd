import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { JobListPage } from "./pages/JobListPage";
function App() {
  return (
    <Router>
      <Navbar isLoggedIn={true} />
      <div className="container">
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/jobs">
            <JobListPage />
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
