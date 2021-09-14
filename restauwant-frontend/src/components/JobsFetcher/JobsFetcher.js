import React, { useEffect, useState } from "react";

const FETCH_OPTIONS = {
  method: "GET",
};

export function JobsFetcher({ children }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/jobs", FETCH_OPTIONS)
      .then((res) => res.json())
      .then((res) => {
        setJobs(res);
        setLoading(false);
      });
  }, []);

  return <React.Fragment>{children({ jobs, loading })}</React.Fragment>;
}
