import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { JobListPage } from "./pages/JobListPage";
import { LoginTree } from "./pages/LoginTree";

function App() {
  const postNewUser ="http://localhost:9292/api/users"

  //state variable for adding new user.
  const [newUser, setNewUser] = useState({
    hiringcheck_id: 2,
    full_name: "",
    phone_number: "",
    email: "",
    description: "",
    profile_pic: "",
    linkedin_link: "",
  });

  //state variable to hide links unless someone is logged in/register
  const [hideLinks, setHideLinks] = useState(true);

  //function to create new profile
  function onAddNewUser(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  }

  //function to POST new registered user to database and unhide NavBar buttons
  function handleSubmit(e) {
    if (
      !newUser.full_name ||
      !newUser.phone_number ||
      !newUser.email ||
      !newUser.description ||
      !newUser.profile_pic ||
      !newUser.linkedin_link
    ) {
      alert("Please complete all fields to register!");
    } else {
      fetch(postNewUser,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })
      setHideLinks(!hideLinks)
      alert("Happy Hunting! Your name and phone number will be your Username and Password here, so remember those!")
    }
  }

  return (
    <Router>
      <Navbar hideLinks={hideLinks} newUser={newUser}/>
      <div className="container">
        {hideLinks ? (
          <Switch>
            <Route path="/login">
              Would you like to Login or Register?
              <LoginTree
                onAddNewUser={onAddNewUser}
                handleSubmit={handleSubmit}
              />
            </Route>
          </Switch>
        ) : (
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
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
