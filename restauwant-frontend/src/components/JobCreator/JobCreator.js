import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//used to create to new job
export function JobCreator({ children }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function createJob(job) {
    setLoading(true);
    fetch(`/api/jobs`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        history.push("/jobs");
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
