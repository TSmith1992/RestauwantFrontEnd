import { JobsFetcher } from "../components/JobsFetcher/JobsFetcher";
import { JobList } from "../components/JobList/JobList";
export function JobListPage() {
  return (
    <JobsFetcher>
      {({ jobs, loading }) => <JobList jobs={jobs} loading={loading} />}
    </JobsFetcher>
  );
}
