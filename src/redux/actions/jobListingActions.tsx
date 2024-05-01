import { addJobListings } from "../slices/jobListingsReducer";

export const fetchAllJobs = async (
  dispatch: any,
  limit: number,
  offset: number
) => {
  console.log("here");
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ limit, offset });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result: any) => {
        dispatch(addJobListings(result));
      })
      .catch((error) => console.error(error));
  } catch (error) {}
};
