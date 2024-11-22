import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-red-800 font-extrabold text-5xl mt-56">HEY ! WELCOME TO DASHBOARD</h1>
      <div className="w-96">
        <Button title="Logout" variant="success" size="xl" className="mt-5" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Dashboard;
