import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// // // //
//used to apply to new job
export function UserJobCreator({ children, user }) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //to do - pass user_id into line 12 inside JSON.strinify
  function createUserJob(jobID, user) {
    console.log(user);
    setLoading(true);
    fetch(`/api/jobs/${jobID}/apply`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_full_name: user.full_name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        history.push("/my-jobs");
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
