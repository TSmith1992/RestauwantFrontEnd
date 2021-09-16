import React, { useState } from "react";

export function NewJob() {
  //API to post new job
  const postNewJob ="http://localhost:9292/api/jobs"

  //state variable to hide successful posting unless someone is logged in/register
  const [hideSuccess, setHideSuccess] = useState(true);

  //array to have a random job type assigned to new job
  const jobType = ["Internship", "Contract", "Temporary", "Part-time", "Full-time", "Commission"]

  //array to have a random job type assigned to new job
  const jobDescription = ["National", "Central", "Chief", "Global", "Customer", "International", "Principal"]

  const [newJob, setNewJob] = useState({
    restaurant_id: getRandomInt(1,91),
    name: getRandomInt(1,6),
    job_type: Math.floor(Math.random() * jobType.length),
    pay: 0,
    description: Math.floor(Math.random() * jobDescription.length),
    desired_start_date: new Date()
  });

  //function to create random numbers for posting job to jobs table
  function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

  //function to change newJob state variable
  function onCreateJob(e){
    let name = e.target.name;
    let value = e.target.value;
    setNewJob({ ...newJob, [name]: value }) 
  }

  //function to POST new registered user to database and unhide NavBar buttons
  function handleSubmit(e) {
    e.preventDefault();
    if (
      // eslint-disable-next-line eqeqeq
      newJob.pay == 0
    ) {
      alert("Please complete all fields to post the job!");
    } else {
      fetch(postNewJob,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob)
      })
      setHideSuccess(!hideSuccess)
      setNewJob(newJob)
      fetch(`/api/restaurants/${newJob.restaurant_id}`)
      .then(r => r.json())
      .then(data => alert(`Success! You have successfully posted a job for ${data.name}! The job pay is ${newJob.pay} per hour! Check your DASHBOARD to see who's applied!` ))
    }
  }

  return (
    <form 
    onSubmit={handleSubmit}
    >
      <h1>Create a new job for a restaurant here</h1>
      <input
        type="text"
        name="pay"
        placeholder="Please enter the amount to pay per hour"
        onChange={onCreateJob}
        className="login-field"
      />
      <br />
      {/* <input
        type="text"
        name="phone_number"
        placeholder="Please enter your phone number"
        // onChange={onUserLogin}
        className="login-field"
      />
      <br /> */}
      <input type="submit" name="submit" className="submit" id="login-button" />
    </form>
  );
}
