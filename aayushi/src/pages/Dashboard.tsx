import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("remove");
    localStorage.removeItem("jwtToken");
    navigate("/homepage");
  };
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center mx-6 pb-4 border-b-2 border-gray-200">
        <a href="/">
          <img src={Logo} className="h-6 mt-8" />
        </a>
        <Button onClick={handleLogout} type={"Logout"} className="w-24" />
      </div>
    </div>
  );
};
