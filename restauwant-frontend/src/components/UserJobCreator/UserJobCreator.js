import React, { useState } from "react";

// // // //
//used to apply to new job
export function UserJobCreator({ children, user }) {
  const [loading, setLoading] = useState(false);

  function createUserJob(jobID, user) {
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
