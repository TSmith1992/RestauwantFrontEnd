import React, { useState } from "react";

// // // //
//used to delete to user job
export function UserJobDeleter({ children }) {
  const [loading, setLoading] = useState(false);

  function deleteUserJob(userJobId) {
    setLoading(true);
    fetch(`/api/userjobs/${userJobId}`, {
      method: "delete",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      {children({
        loading,
        deleteUserJob,
      })}
    </React.Fragment>
  );
}
