import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { JobListPage } from "./pages/JobListPage";
import { LoginTree } from "./pages/LoginTree";
import {Restaurants} from "./pages/Restaurants"
import {NewJob} from "./pages/NewJob"
import {HMDashboard} from "./pages/HMDashboard"

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

  //state variable to flag if the user logged in or registered
  const [user, setUser] = useState("")

  //state variable to hide links unless someone is logged in/register
  const [hideLinks, setHideLinks] = useState(true);

  //state variable to handle logins
  const [userLogin, setUserLogin] = useState({
    full_name: "", 
    phone_number: ""
  })

  //function to change login state variable
  function onUserLogin(e){
    let name = e.target.name;
    let value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value }) 
  }

  //function to check user login and send data to backend
  function handleLoginSubmit(e){
    e.preventDefault();
    setUser(userLogin) 
    if(!userLogin.full_name || !userLogin.phone_number){
      alert("Please complete all fields to log in!")
    } 
    else{
      fetch(`http://localhost:9292/api/users/${userLogin.full_name}`)
      .then(r => r.json())
      .then(data=>console.log(data))
      setHideLinks(!hideLinks)
      return <Redirect to='/jobs' />
    }
  }

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
      setUser(newUser) 
      alert("Happy Hunting! Your name and phone number will be your Username and Password here, so remember those!")
    }
  }

  return (
    <Router>
      <Navbar hideLinks={hideLinks} user={user}/>
      <div className="container">
        {hideLinks ? (
          <Switch>
            <Route path="/login">
              Would you like to Login or Register? Click below to choose!
              <LoginTree
                onAddNewUser={onAddNewUser}
                handleSubmit={handleSubmit}
                onUserLogin={onUserLogin}
                handleLoginSubmit={handleLoginSubmit}
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
              New Job <NewJob />
            </Route>
            <Route exact path="/restaurants">
              My Restaurants <Restaurants user={user}/>
            </Route>
            <Route path="/dashboard">Dashboard <HMDashboard user={user}/></Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
