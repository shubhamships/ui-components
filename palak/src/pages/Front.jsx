import React from "react";
import LoaderButton from "../components/Button";
import { useNavigate } from "react-router-dom";

function Front() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div className="flex items-center justify-center flex-col font-poppins">
      <p className="text-3xl mt-10">Dashboard</p>
      <LoaderButton onClick={handleLogout}>Logout </LoaderButton>
    </div>
  );
}

export default Front;
