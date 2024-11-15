import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const BackToLogin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("remove");
    localStorage.removeItem("jwtToken");
    navigate("/homepage");
  };

  return (
    <div className="font-poppins flex flex-col items-center justify-center mt-4">
      <h1>Dashboard</h1>
      <Button onClick={handleLogout} type={"Logout"} />
    </div>
  );
};

export default BackToLogin;
