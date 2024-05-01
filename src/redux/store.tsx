import { configureStore } from "@reduxjs/toolkit";
import { jobListingsSlice } from "./slices/jobListingsReducer";

export const store = configureStore({
  reducer: {
    jobListings: jobListingsSlice.reducer,
  },
});
