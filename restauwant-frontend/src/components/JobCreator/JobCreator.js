import React, { useState } from "react";

//used to create to new job
export function JobCreator({ children }) {
  const [loading, setLoading] = useState(false);

  function createJob(job) {
    setLoading(true);
    fetch(`/api/jobs`, {
      method: "post",
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {children({
        loading,
        createJob,
      })}
    </React.Fragment>
  );
}
