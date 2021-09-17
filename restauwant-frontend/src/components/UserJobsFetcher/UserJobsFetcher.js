import React, { useEffect, useState } from "react";

const FETCH_OPTIONS = {
  method: "GET",
};

export function UserJobsFetcher({ children, user }) {
  const [userJobs, setUserJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/myappliedjobs/${user.full_name}`, FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserJobs(res.userjobs);
        setLoading(false);
      });
  }, []);

  return <React.Fragment>{children({ userJobs, loading })}</React.Fragment>;
}
