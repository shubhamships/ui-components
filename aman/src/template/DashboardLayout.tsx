import ShipGlobal from "@/assets/shipGlobal.png";
import { Bell } from "lucide-react";
import { UserRoundPen } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { UserCog } from "lucide-react";
import { useState } from "react";
import { Pin, PinOff } from "lucide-react";

const DashboardLayout = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [pinCliped, setPinCliped] = useState(false);

  const handleMouseEnter = () => {
    if (!pinCliped) {
      setIsSidebarHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (!pinCliped) {
      setIsSidebarHovered(false);
    }
  };

  const togglePin = () => {
    setPinCliped(!pinCliped);
  };
  return (
    <div>
      <header className="flex fixed top-0 left-0 z-10 w-full border-b border-b-gray-200 max-h-14 bg-white">
        <div className="flex flex-row items-center justify-start">
          <img src={ShipGlobal} className="h-full p-3" alt="logo" />
        </div>

        <div className="flex flex-row items-center ml-auto">
          <div className="flex justify-center items-center w-max mr-1 mb-1">
            <div className="flex items-center justify-center space-x-3">
              <div>
                <Bell />
              </div>
              <div className="mr-2">
                <h4>8000</h4>
              </div>
            </div>
            <div className="m-2">
              <h4>Recharge</h4>
            </div>
          </div>
          <button>
            <UserRoundPen />
          </button>
        </div>
      </header>
      <nav
        className={`fixed h-screen left-0 z-10 bg-white border-r border-r-gray-200 top-14 transition-all duration-300 ease-in-out ${
          isSidebarHovered ? "w-52" : "w-16"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full mt-3 flex items-end justify-end">
          {!pinCliped ? (
            <Pin
              className={`h-5 cursor-pointer ${isSidebarHovered ? "opacity-50" : "opacity-0"}`}
              onClick={togglePin}
            />
          ) : (
            <PinOff
              className={`h-5 cursor-pointer ${isSidebarHovered ? "opacity-50" : "opacity-0"}`}
              onClick={togglePin}
            />
          )}
        </div>
        <ul className="flex flex-col mt-4 mx-4 text-center items-center">
          <Link to="edit-account" className="w-full">
            <div className="flex items-center space-x-4 border-b">
              <UserCog className="text-gray-500 flex-shrink-0" />
              <h4
                className={`text-gray-500 overflow-hidden transition-all duration-300 ease-in-out ${
                  isSidebarHovered ? "opacity-100 visible" : "opacity-0 invisible"
                } text-xl`}
              >
                Account
              </h4>
            </div>
          </Link>
          <Link to="log-out">
            <h5>Logout</h5>
          </Link>
        </ul>
      </nav>
      <div
        className={`relative mt-14 overflow-auto transition-all duration-300 ease-in-out ${
          isSidebarHovered ? "ml-52" : "ml-16"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
