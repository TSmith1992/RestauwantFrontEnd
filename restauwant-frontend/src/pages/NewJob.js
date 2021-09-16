import React from "react";
import { JobForm } from "../components/JobForm/JobForm";
import { RestaurantsFetcher } from "../components/RestaurantsFetcher/RestaurantsFetcher";
import { JobCreator } from "../components/JobCreator/JobCreator";

export function NewJob() {
  return (
    <RestaurantsFetcher>
      {({ restaurants, loading: loadingRestaurants }) => (
        <JobCreator>
          {({ createJob, loading: creatingJob }) => (
            <JobForm
              loading={loadingRestaurants || creatingJob}
              restaurants={restaurants}
              onSubmit={(newJob) => {
                console.log(newJob);
                createJob(newJob);
              }}
            />
          )}
        </JobCreator>
      )}
    </RestaurantsFetcher>
  );
}
