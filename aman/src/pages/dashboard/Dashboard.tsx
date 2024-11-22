import DashboardNav from "@/template/DashboardNav";
import DashboardSidebar from "@/template/DashboardSidebar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <div>
      <DashboardNav />
      <DashboardSidebar />
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
