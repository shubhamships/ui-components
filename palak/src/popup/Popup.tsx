import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div
      className={` inset-0 h-screen w-screen flex items-center justify-center relative transition-opacity ${
        isOpen ? "bg-black/60" : "bg-gradient-to-br from-blue-300 to-white"
      }`}
    >
      <button className="z-10 bg-blue-400 px-10 py-3 rounded-md text-white" onClick={handleClick}>
        Subscribe
      </button>
      <button
        className="absolute top-5 right-5 z-10 bg-blue-400 py-3 px-10 rounded-md text-white"
        onClick={handleLogin}
      >
        Login
      </button>

      {/* Normal Popup */}
      <div
        className={`absolute z-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-white flex flex-col p-2 rounded-md shadow-lg transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
      >
        <button className="text-white text-xl absolute top-3 right-3" onClick={handleClick}>
          <MdOutlineCancel />
        </button>
        <p className="mt-10 mx-auto text-white font-semibold text-lg">Subscribe for free Music</p>
        <p className="mt-2 px-5 text-white text-sm">
          Enjoy the next 2 months for free. Pay 99/month after your free subscription expires.
        </p>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Your Email here.."
            className="ml-5 mt-16 rounded-md h-10 w-56 focus-visible:outline-none focus-visible:ring-1 focus:ring-blue-400 p-2 border border-blue-300 text-sm"
          />
          <button className="w-24 mt-16 h-10 bg-blue-400 rounded-md p-2 text-white">Subscribe</button>
        </div>
        <a href="#" className="text-blue-700 text-sm mx-auto my-auto underline">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Popup;
