import Background from "../assets/background.jpg";
import ShipGlobal from "@/assets/shipGlobal.png";
import { Link } from "react-router-dom";

//TODO - create dashboard layout based on this
// eslint-disable-next-line react/prop-types
const OuterLayout = ({ children }: { children: any }) => {
  return (
    <div className="bg-cover h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <Link to="#" className="grid">
        <div className="flex items-start m-4 mb-40 justify-center lg:my-5 lg:mx-20 md:justify-start">
          <img src={ShipGlobal} className="h-12" alt="logo" />
        </div>
      </Link>
      <div className="rounded-lg flex mx-auto my-auto mt-20 shadow-lg w-full max-w-md m-8 p-3 bg-white mb-18">
        {children}
      </div>
    </div>
  );
};

export default OuterLayout;
