import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.fr.stg.shipglobal.in/api/v1", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default apiClient;
