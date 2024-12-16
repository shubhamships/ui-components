import { HomePage } from "@/pages/recipe/HomePage";
import { Outlet, useNavigate } from "react-router-dom";
export const Root = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("timelog");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <HomePage />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
