import { ENV_VARIABLES } from "../config/envVariables.js";
import axios from "axios";

export const fetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${ENV_VARIABLES.TMDB_API_KEY}`,
    },
  };
  const response = await axios.get(url,options)

  if(response.status === 200) {
    return response.data;
  }else {
     throw new Error("Failed to fetch from TMDB" + response.statusText);
  }

};
