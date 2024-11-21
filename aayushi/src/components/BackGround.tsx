/* eslint-disable react/prop-types */
import React from "react";
import BGImage from "../assets/bg.jpg";
import Logo from "../assets/logo.png";

export const BackGround = ({ type }) => {
  return (
    <div className="w-full h-screen">
      <div
        className="bg-center grid h-screen bg-cover"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <a href="/">
          <div className="flex items-start justify-center m-4 mb-0 lg:my-8 lg:mx-20 md:justify-start">
            <img src={Logo} className="h-12" />
          </div>
        </a>
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-lg shadow-lg m-4 p-3 w-full max-w-md mb-18 lg:mb-32 h-128 bg-white">
            {/* //dynamic component */}
            {type && React.createElement(type)}
          </div>
        </div>
      </div>
    </div>
  );
};