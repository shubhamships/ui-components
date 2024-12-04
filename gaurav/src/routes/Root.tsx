import { Clock, House, SquareUser } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <>
      <div className="flex justify-center items-center fixed bottom-0 w-full">
        <ul className="flex justify-between md:justify-center items-center bg-primary gap-6 p-2 px-4 w-full">
          <li className="text-white font-medium">
            <Link to="/">
              <div className="flex flex-col justify-center items-center">
                <House className="w-5 h-5" />
                <div className="text-xs">Home</div>
              </div>
            </Link>
          </li>
          <li className="text-white font-medium">
            <Link to="login">
              <div className="flex flex-col justify-center items-center">
                <SquareUser className="w-5 h-5" />
                <div className="text-xs">Login</div>
              </div>
            </Link>
          </li>
          <li className="text-white font-medium">
            <Link to="timelog">
              <div className="flex flex-col justify-center items-center">
                <Clock className="w-5 h-5" />
                <div className="text-xs">Timelog</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
