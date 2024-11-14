import axios from "axios";

export const loginUser = async (additionalURL, formData) => {
  const API_URL = "https://api.fr.stg.shipglobal.in/api/v1/";
  const response = await axios.post(
    `${API_URL}${additionalURL}`,
    {
      email: formData.email,
      password: formData.password,
    },
    {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    }
  );
  return response.data;
};
