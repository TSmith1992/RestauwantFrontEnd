import React, { useState } from "react";

export function NewJob() {
  const [newJob, setNewJob] = useState();
  return (
    <form 
    // onSubmit={}
    >
      <h1>Create a new job for a restaurant here</h1>
      <input
        type="text"
        name="full_name"
        placeholder="Please enter your full name"
        // onChange={onUserLogin}
        className="login-field"
      />
      <br />
      <input
        type="text"
        name="phone_number"
        placeholder="Please enter your phone number"
        // onChange={onUserLogin}
        className="login-field"
      />
      <br />
      <input type="submit" name="submit" className="submit" id="login-button" />
    </form>
  );
}
