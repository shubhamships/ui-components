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
        console.log("commment");
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-10 text-3xl">Dashboard</p>
      <LoaderButton onClick={handleLogout} isLoading={isLoading} className={`${isLoading ? "opacity-60" : ""}`}>
        Logout
      </LoaderButton>
    </div>
  );
}

export default Dashboard;
