import { useState, useEffect } from "react";
// import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
// import { FaKitchenSet } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import Interior from "../components/Interior";
// import l from "../assets/l.jpeg";

const Page4 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 p-3 transition-all duration-700 rounded-lg ease-out ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-4"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, neque. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Molestias, neque?
      </div>
    </div>
  );
};

export default Page4;
