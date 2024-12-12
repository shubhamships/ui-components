import Button from "@/components/ui/personal/Button";
import { IdCard } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
export const Root = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("timelog");
  };
  return (
    <>
      <div className="flex justify-center items-center">
      <div className="bg-gradient-to-b from-purple-200 to-blue-100 pb-20 px-4 pt-10 overflow-hidden max-w-md">
        <h1 className="text-center text-5xl font-bold p-4 pt-8 text-gray-800">Welcome to the TimeLog</h1>
        <div className="flex justify-center items-center h-96 mb-32">
          <Button
            title="Mark your Attandence"
            className="bg-purple-700 text-white w-full px-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            iconName={<IdCard className="mx-2" />}
            onClick={handleClick}
          />
        </div>
      </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
