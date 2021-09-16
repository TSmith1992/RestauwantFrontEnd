import React from "react";

export function JobApplicant({ user }) {
  const mapNameToJobTitle = {
    1: "Chef",
    2: "Manager",
    3: "Bartender",
    4: "Server",
    5: "Busser",
  };  
return (
    <div className="card card-body">
      <h2 className="card-text">{user.full_name}</h2>
      <img
        src="https://www.aisd.net/foster-elementary/wp-content/files/sites/65/2018/02/generic-profile-picture.png"
        style={{ height: "200px", width: "225px" }}
        alt="restaurant"
      />
      <br></br>
      <h5 className="card-title">{user.phone_number}</h5>
      <p className="card-text">{user.email}</p>
      <p className="card-text">{user.description}</p>
      <p className="card-text">{user.linkedin_link}</p>
      <button>Click here to hire!</button>
    </div>
  );
}