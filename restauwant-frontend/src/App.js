import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
function App() {
  return (
    <Router>
      <div>
        <Navbar isLoggedIn={true} />
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
