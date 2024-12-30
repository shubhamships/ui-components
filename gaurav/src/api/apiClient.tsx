import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/",
    headers: {
        "Content-Type": "application/json",
    },
})