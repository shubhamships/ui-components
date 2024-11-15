import React from "react";
import Background from "../assets/background.jpg";
import ShipGlobal from "../assets/shipGlobal.png";
import { Link } from "react-router-dom";

const OuterLayout = ({ children }) => {
  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Link to="#" className="grid">
        <div className="flex  items-start m-4 mb-40 justify-center lg:my-5 lg:mx-20 md:justify-start">
          <img src={ShipGlobal} className="h-12" alt="logo" />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center m-4 mt-10">
        <div className="rounded-lg shadow-lg  w-full max-w-md h-[510px] m-8 p-3  bg-white mb-18">
          {children}
        </div>
      </div>
    </div>
  );
};

export default OuterLayout;
