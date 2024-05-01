import React, { useEffect } from "react";
import { fetchAllJobs } from "../redux/actions/jobListingActions";
import { useDispatch, useSelector } from "react-redux";
import { JobListingsState } from "../redux/slices/jobListingsReducer";

const JobListings = () => {
  const jobs = useSelector((state: JobListingsState) => state.jobListings);

  console.log("job", jobs);
  console.log("job");

  const dispatch = useDispatch();
  useEffect(() => {
    if (!jobs.jobListings.length) {
      fetchAllJobs(dispatch, 10, 0);
    }
  }, [dispatch, jobs]);

  return <div>JobListing</div>;
};

export default JobListings;
