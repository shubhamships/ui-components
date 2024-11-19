import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-red-800 font-extrabold text-5xl mt-56">
        HEY ! WELCOME TO DASHBOARD
      </h1>
      <button
        className="bg-blue-900 w-full h-11 mt-10 text-white text-sm font-medium rounded-lg max-w-sm"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
