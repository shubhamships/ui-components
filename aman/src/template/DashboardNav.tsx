import ShipGlobal from "@/assets/shipGlobal.png";
import { Bell } from "lucide-react";
import { UserRoundPen } from "lucide-react";
const DashboardNav = () => {
  return (
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
  );
};

export default DashboardNav;
