import axios from "axios";

interface 

export const Api = async (email, password) => {
  try {
    const response = await axios.post(
      "https://api.fr.stg.shipglobal.in/public/api/v1/auth/login",
      { email, password },
      {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};