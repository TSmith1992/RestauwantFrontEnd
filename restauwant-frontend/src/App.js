import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { JobListPage } from "./pages/JobListPage";
import { LoginTree } from "./pages/LoginTree"

function App() {
  //state variable for adding new user.
  const [newUser, setNewUser] =useState({
    hiringcheck_id: 2,
    full_name:"",
    phone_number:"",
    email:"",
    description:"",
    profile_pic:"",
    linkedin_link:""
  })

  function handleLogin(e){}
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
          <Route path="/login">Would you like to Login or Register?<LoginTree/></Route>
          <Route path="/register">Register</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
