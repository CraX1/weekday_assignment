import { createSlice } from "@reduxjs/toolkit";

export interface JobListingsState {
  jobListings: any;
  totalCount: number;
}

const initialState: JobListingsState = {
  jobListings: [],
  totalCount: 0,
};

export const jobListingsSlice = createSlice({
  name: "jobListings",
  initialState,
  reducers: {
    addJobListings: (state, action) => {
      console.log("actionn", action.payload);

      state.jobListings = action.payload.jdList;
      state.totalCount = action.payload.totalCount;
    },
  },
});

export const { addJobListings } = jobListingsSlice.actions;
