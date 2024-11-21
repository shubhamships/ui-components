import { useNavigate } from "react-router-dom";
import { useState } from "react";
import withLoading from "../components/withLoading";
import Button from "../components/Button";

function Dashboard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const LoaderButton = withLoading(Button);

  const handleLogout = () => {
    setIsLoading(true);
    try {
      localStorage.removeItem("jwtToken");
      setTimeout(() => {
        navigate("/");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <p className="text-3xl mt-10">Dashboard</p>
      <LoaderButton onClick={handleLogout} isLoading={isLoading} className={`${isLoading ? "opacity-60" : ""}`}>
        Logout
      </LoaderButton>
    </div>
  );
}

export default Dashboard;
