import axios from "axios";

const API = axios.create({
  baseURL: "https://api.fr.stg.shipglobal.in/public/api/v1",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

export default API