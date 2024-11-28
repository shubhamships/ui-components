import ShipGlobal from "@/assets/shipGlobal.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Pin, PinOff, UserCog, Bell, UserRoundPen, LogOut, ChevronRight, Dot, Circle } from "lucide-react";

const DashboardLayout = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [pinCliped, setPinCliped] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [active, setActive] = useState("");
  const vendorDetail = JSON.parse(localStorage.getItem("vendorDetail") || "{}");

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
  const handkeClick = () => {
    toggleSection("account");
    handleDivClick("Div1");
  };
  const handleDivClick = (id) => {
    setActive(id);
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
                <Bell className="size-4" />
              </div>
              <div className="mr-2">
                <h4>₹{vendorDetail.wallet_balance}</h4>
              </div>
            </div>
            <div className="m-2">
              <h4 className="text-blue-800 font-medium">Recharge</h4>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="mr-4 p-1 bg-blue-800 hover:bg-blue-600 text-white rounded-full shadow-md">
              <UserRoundPen className="text-white" />
            </button>
          </div>
        </div>
      </header>
      <nav
        className={`fixed h-screen left-0 z-10 bg-white border-r border-r-gray-200 top-14  transition-all duration-300 ease-in-out ${
          isSidebarHovered ? "w-56" : "w-16"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="absolute top-0 right-0 m-2">
          {!pinCliped ? (
            <Pin
              className={`h-4 cursor-pointer transition-opacity duration-300  ${
                isSidebarHovered ? "opacity-50" : "opacity-0"
              }`}
              onClick={togglePin}
            />
          ) : (
            <PinOff
              className={`h-4 cursor-pointer transition-opacity duration-300  ${
                isSidebarHovered ? "opacity-50" : "opacity-0"
              }`}
              onClick={togglePin}
            />
          )}
        </span>
        <ul className="flex flex-col mt-6 mx-4 text-center items-center gap-y-2">
          {/* this div is for account setting */}
          <div className="w-full">
            <div
              className={`flex justify-between items-center p-2 ${active === "Div1" ? "bg-gray-100 rounded-lg" : ""}`}
              id="Div1"
              onClick={handkeClick}
            >
              <div className="flex items-center gap-x-3">
                <UserCog className="text-gray-700 flex-shrink-0 size-5" />
                <h4
                  className={`text-gray-700 font-normal overflow-hidden transition-all duration-300 ease-in-out cursor-pointer ${
                    isSidebarHovered ? "opacity-100 visible" : "opacity-0 invisible"
                  } text-sm max-w-28`}
                >
                  Account
                </h4>
              </div>
              <div className="">
                <ChevronRight
                  className={`h-4 cursor-pointer transition-opacity duration-300 ${
                    openSection === "account" ? "rotate-90" : ""
                  } ${isSidebarHovered ? "opacity-100" : "opacity-0"}`}
                />
              </div>
            </div>
            {openSection === "account" && (
              <div className={`transition-opacity duration-300 ${isSidebarHovered ? "opacity-100" : "opacity-0"}`}>
                <ul className="pl-10">
                  <li className="text-gray-800  font-normal text-sm ">
                    <Link to="edit-account" className="flex items-center gap-x-2 mt-2">
                      <span>
                        <Circle className="text-black h-2 w-2" />
                      </span>
                      <p className="text-nowrap overflow-hidden">Profile Setting</p>
                    </Link>
                    <Link to="edit-account" className="flex items-center gap-x-2 mt-2">
                      <span>
                        <Circle className="text-black h-2 w-2" />
                      </span>
                      <p className="text-nowrap overflow-hidden">Profile Setting</p>
                    </Link>
                    <Link to="edit-account" className="flex items-center gap-x-2 mt-2">
                      <span>
                        <Circle className="text-black h-2 w-2" />
                      </span>
                      <p className="text-nowrap overflow-hidden">Profile Setting</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="log-out"
            className={`w-full p-2 ${active === "Div2" ? "bg-gray-100 rounded-lg" : ""}`}
            id="Div2"
            onClick={() => handleDivClick("Div2")}
          >
            <div className="flex items-center gap-x-3">
              <LogOut className="text-gray-700 flex-shrink-0 size-5" />
              <h4
                className={`text-gray-700 overflow-hidden font-normal transition-all duration-300 ease-in-out ${
                  isSidebarHovered ? "opacity-100 visible" : "opacity-0 invisible"
                } text-sm max-w-28`}
              >
                Logout
              </h4>
            </div>
          </Link>
        </ul>
      </nav>
      <div
        className={`relative mt-14 overflow-auto transition-all duration-300 ease-in-out bg-gray-100  ${
          isSidebarHovered ? "ml-56" : "ml-16"
        }`}
        style={{ height: "calc(100vh - 56px)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
