import { JobsFetcher } from "../components/JobsFetcher/JobsFetcher";
import { JobList } from "../components/JobList/JobList";
import { UserJobCreator } from "../components/UserJobCreator/UserJobCreator";
export function JobListPage({user}) {
  return (
    <JobsFetcher>
      {({ jobs, loading }) => (
        <UserJobCreator>
          {({ createUserJob, loading: applyLoading,user }) => (
            <JobList
              onClickApply={createUserJob}
              jobs={jobs}
              loading={loading}
              applyLoading={applyLoading}
              user={user}
            />
          )}
        </UserJobCreator>
      )}
    </JobsFetcher>
  );
}
