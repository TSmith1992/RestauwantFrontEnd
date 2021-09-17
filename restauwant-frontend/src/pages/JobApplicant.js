import React, {useState} from "react";

export function JobApplicant({ user }) {
  const [hired, setHired] = useState(false)

  function onButtonClick(e){
    alert(`Great! We will let ${user.full_name} know! You can also give them a call at ${user.phone_number} or email them at ${user.email}!`)
    setHired(true)
    fetch(`/api/booked/${user.full_name}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({hired:true})
    })
    .then(r => r.json())
  }
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
      <button onClick={onButtonClick}>{hired? "Hired!":"Click here to hire!"}</button>
    </div>
  );
}