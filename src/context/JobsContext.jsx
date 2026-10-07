import { createContext, useContext, useState } from "react";
import jobsData from "../data/jobs";

const JobsContext = createContext();

export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState(jobsData);

  const addJob = (newJob) => {
    const jobWithId = {
      ...newJob,
      id: Date.now(),
    };

    setJobs((previousJobs) => [
      ...previousJobs,
      jobWithId,
    ]);
  };

  return (
    <JobsContext.Provider
      value={{
        jobs,
        addJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobsContext);
}

export default JobsContext;