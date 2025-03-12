import React from "react";
import {Carousel} from "../pages/Carousel"
import BGImage from "../assets/bg.jpg"
import Logo from "../assets/logo.png"

interface BackGroundProps {
  type?: React.ComponentType; 
}

export const BackGround = ({ type }:BackGroundProps) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="bg-center grid h-screen bg-cover"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <a href="/">
          <div className="flex items-start justify-center m-4 mb-0 lg:my-4 lg:mx-20 md:justify-start">
            <img src={Logo} className="h-10" />
          </div>
        </a>
        <div className="flex justify-center">
        <div className="rounded-l-lg shadow-lg my-4 w-full max-w-md mb-10 lg:mb-16 h-128 bg-white"><Carousel/></div>
          <div className="rounded-r-lg shadow-lg my-4 p-3 w-full max-w-md mb-10 lg:mb-16 h-128 bg-white">
            {/* //dynamic component */}
            {type && React.createElement(type)}
          </div>
          
        </div>
      </div>
    </div>
  );
};