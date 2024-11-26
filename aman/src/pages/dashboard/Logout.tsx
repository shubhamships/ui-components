import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.error("No token found");
        navigate("/");
        return;
      }
      const response = await axios.get(
        "https://api.fr.stg.shipglobal.in/api/v1/auth/logout",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 200) {
        console.log("Logout successful");
        localStorage.removeItem("jwtToken");
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4">
      <button
        className={`bg-blue-900 w-full h-11 text-white text-sm font-medium rounded-lg max-w-sm ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleLogout}
        disabled={loading}
      >
        {loading ? "Logging Out..." : "Logout"}
      </button>
    </div>
  );
};

export default Logout;
