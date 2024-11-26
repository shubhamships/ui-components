import ShipGlobal from "@/assets/shipGlobal.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Pin, PinOff, UserCog, Bell, UserRoundPen, LogOut, ChevronRight } from "lucide-react";

const DashboardLayout = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [pinCliped, setPinCliped] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

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
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className=" overflow-auto">
      <header className="flex fixed top-0 left-0 z-10 w-full border-b border-b-gray-200 max-h-14 bg-white">
        <div className="flex flex-row items-center justify-start">
          <img src={ShipGlobal} className="h-full p-3 ml-1" alt="logo" />
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
              <h4 className="text-blue-800 font-semibold">Recharge</h4>
            </div>
          </div>
          <button className="mr-4">
            <UserRoundPen />
          </button>
        </div>
      </header>
      <nav
        className={`fixed h-screen left-0 z-10 bg-white border-r border-r-gray-200 top-14 transition-all duration-300 ease-in-out ${
          isSidebarHovered ? "w-48" : "w-16"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="absolute top-0 right-0 m-2">
          {!pinCliped ? (
            <Pin
              className={`h-4 cursor-pointer transition-opacity duration-200  ${
                isSidebarHovered ? "opacity-50" : "opacity-0"
              }`}
              onClick={togglePin}
            />
          ) : (
            <PinOff
              className={`h-4 cursor-pointer transition-opacity duration-200  ${
                isSidebarHovered ? "opacity-50" : "opacity-0"
              }`}
              onClick={togglePin}
            />
          )}
        </span>
        <ul className="flex flex-col mt-8 mx-4 text-center items-center gap-y-5 ">
          {/* this div is for account setting */}
          <div className="w-full">
            <div
              className="flex space-x-4 items-center p-2 border-b rounded-md"
              onClick={() => toggleSection("account")}
            >
              <UserCog className="text-gray-500 flex-shrink-0" />
              <h4
                className={`text-gray-500 font-normal overflow-hidden transition-all duration-300 ease-in-out ${
                  isSidebarHovered ? "opacity-100 visible" : "opacity-0 invisible"
                } text-m`}
              >
                Account
              </h4>
              <div>
                <ChevronRight
                  className={`h-4 cursor-pointer transition-opacity duration-200 ${
                    openSection === "account" ? "rotate-90" : ""
                  } ${isSidebarHovered ? "opacity-50" : "opacity-0"}`}
                />
              </div>
            </div>
            {openSection === "account" && (
              <div
                className={`mt-2 p-2 ml-6 transition-opacity duration-200 rounded-md border-b ${
                  isSidebarHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <ul className="">
                  <Link to="edit-account">
                    <li className="text-gray-500 font-normal text-sm">Profile Setting</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>

          <Link to="log-out" className="w-full">
            <div className="flex space-x-4 items-center p-2 border-b rounded-md">
              <LogOut className="text-gray-500 flex-shrink-0" />
              <h4
                className={`text-gray-500 overflow-hidden font-normal transition-all duration-300 ease-in-out ${
                  isSidebarHovered ? "opacity-100 visible" : "opacity-0 invisible"
                } text-m`}
              >
                Logout
              </h4>
            </div>
          </Link>
        </ul>
      </nav>
      <div
        className={`relative mt-14  overflow-auto transition-all duration-300 ease-in-out bg-gray-100  ${
          isSidebarHovered ? "ml-48" : "ml-16"
        }`}
        style={{ height: "calc(100vh - 56px)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
