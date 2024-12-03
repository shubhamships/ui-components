import ShipGlobal from "@/assets/shipGlobal.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Pin, PinOff, UserCog, LayoutDashboard, CircleUser, LogOut, ChevronRight, Circle, Menu } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import Logout from "@/pages/dashboard/Logout";

const DashboardLayout = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [pinCliped, setPinCliped] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [active, setActive] = useState("");
  const [popup, setPopup] = useState(false);
  const vendorDetail = JSON.parse(localStorage.getItem("vendorDetail") || "{}");
  const mobileView = useMediaQuery("(min-width: 550px)");

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
  const handleClick = () => {
    toggleSection("account");
    handleDivClick("Div1");
  };
  const handleDivClick = (id: string) => {
    setActive(id);
  };
  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <div className="overflow-auto">
      <header className="flex fixed top-0 left-0 z-10 w-full border-b border-b-gray-200 max-h-14 bg-white">
        <div className="flex flex-row items-center justify-start">
          <img src={ShipGlobal} className="h-full p-3 ml-1" alt="logo" />
        </div>

        <div className="flex ml-auto gap-x-1 mr-2">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-sm">₹{vendorDetail.wallet_balance}</h4>
            {/* <Bell className="size-4" /> */}
            <h4 className="text-blue-800 font-medium text-sm">Recharge</h4>
          </div>

          <div className="border-l border-gray-100">
            <button className="m-2 p-2 shadow-lg bg-red-100 rounded-full" onClick={handlePopup}>
              <CircleUser className="text-red-600" />
            </button>
          </div>
        </div>
      </header>
      {popup && (
        <div className="w-60 h-52 bg-white border border-gray-200 fixed top-0 right-0 z-10 mt-14 mr-8 rounded-md shadow-lg">
          <div className="w-full p-3 border-b border-gray-200">
            <p className="font-semibold">{`${vendorDetail.firstname} ${vendorDetail.lastname}`}</p>
            <p className="text-sm text-gray-500">{vendorDetail.email}</p>
          </div>
          <div>
            <Logout />
          </div>
        </div>
      )}
      <nav
        className={`fixed h-screen left-0 z-10 bg-white border-r border-r-gray-200 top-14 transition-all duration-300 ease-in-out ${
          isSidebarHovered ? "w-56" : "w-16"
        } ${mobileView ? "" : "hidden"}`}
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
          <div className="w-full">
            <div
              className={`flex items-center p-2 cursor-pointer ${active === "Div0" ? "bg-gray-100 rounded-lg" : ""}`}
              id="Div0"
              onClick={() => handleDivClick("Div0")}
            >
              <Link to="dashboard" className="flex  gap-x-3">
                <LayoutDashboard className="text-gray-700 flex-shrink-0 size-5 " />
                <h4
                  className={`text-gray-700 overflow-hidden font-normal transition-all duration-300 ease-in-out ${
                    isSidebarHovered ? "opacity-100 visible" : "opacity-0 invisible"
                  } text-sm max-w-28 `}
                >
                  Dashboard
                </h4>
              </Link>
            </div>
          </div>
          {/* this div is for account setting */}
          <div className="w-full">
            <div
              className={`flex justify-between items-center p-2 ${active === "Div1" ? "bg-gray-100 rounded-lg" : ""}`}
              id="Div1"
              onClick={handleClick}
            >
              <div className="flex gap-x-3">
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
      <nav
        className={`fixed bottom-0 h-14 w-full left-0 z-10 bg-white border-t border-t-gray-200 ${
          mobileView ? "hidden" : ""
        }`}
      >
        <ul className="flex flex-row m-4 gap-x-4">
          {/* this div is for account setting */}

          <Menu />
          <div className="flex flex-col items-center -mt-1">
            <UserCog className="text-gray-700 flex-shrink-0 size-5" />
            <Link to="edit-account">
              <h4
                className={`text-gray-700 font-normal overflow-hidden transition-all duration-300 ease-in-out cursor-pointer text-sm max-w-28`}
              >
                Account
              </h4>
            </Link>
          </div>

          <Link to="log-out">
            <div className="flex flex-col items-center -mt-1">
              <LogOut className="text-gray-700 size-5" />
              <h4
                className={`text-gray-700 overflow-hidden font-normal transition-all duration-300 ease-in-out text-sm max-w-28`}
              >
                Logout
              </h4>
            </div>
          </Link>
        </ul>
      </nav>
      <div
        className={`relative mt-14 overflow-auto transition-all duration-300 ease-in-out bg-gray-100 max-md:mb-2 ${
          mobileView ? (isSidebarHovered ? "ml-56" : "ml-16") : "ml-0"
        } `}
        style={{ height: "calc(100vh - 56px)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
