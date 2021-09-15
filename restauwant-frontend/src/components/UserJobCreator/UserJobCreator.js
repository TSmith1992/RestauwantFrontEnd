import React, { useState } from "react";

// // // //

export function UserJobCreator({ children }) {
  const [loading, setLoading] = useState(false);

  function createUserJob(jobID) {
    setLoading(true);
    fetch(`/api/jobs/${jobID}/apply`, {
      method: "post",
      body: JSON.stringify({}),
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
        createUserJob,
      })}
    </React.Fragment>
  );
}
