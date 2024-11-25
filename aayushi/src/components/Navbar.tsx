import { useState } from "react";
import { X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="relative">
        <ul className="hidden md:flex justify-end space-x-6 pr-20 mr-20 text-white font-semibold text-md items-center">
          <li className="relative group space-y-2 gap-y-2">
            <a href="#" className="relative mt-4 mb-5">
              Connect
            </a>
            <span className="absolute top-4 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group space-y-2 gap-y-2">
            <a href="#" className="relative mt-4 mb-5">
              Blog
            </a>
            <span className="absolute top-4 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group space-y-2 gap-y-2">
            <a href="#" className="relative mt-4 mb-5">
              Apps
            </a>
            <span className="absolute top-4 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group space-y-2 gap-y-2">
            <a href="#" className="relative mt-4 mb-5">
              Tools
            </a>
            <span className="absolute top-4 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group space-y-2 gap-y-2">
            <a href="#" className="relative mt-4 mb-5">
              About
            </a>
            <span className="absolute top-4 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li>
            <button className="bg-amber-400 border-amber-400 text-white rounded p-2 mx-4 hover:bg-amber-600">
              Join us
            </button>
          </li>
        </ul>

        <div className="md:hidden flex justify-between items-center p-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white transition-all duration-300 ease-in-out"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16"
                className={`transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16"
                className={`transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18h16"
                className={`transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
            </svg>
          </button>
          <button className="bg-amber-400 border-amber-400 text-white rounded p-2 mx-4 hover:bg-amber-600">
            Join us
          </button>
        </div>

        {isMenuOpen && (
          <ul className="absolute lg:hidden md:hidden top-16 left-0 w-full bg-white p-4 space-y-4 text-black text-lg font-semibold">
            <li className="flex justify-between">
              <a href="#" className="block">
                Connect
              </a>
              <X onClick={() => setIsMenuOpen(false)} />
            </li>
            <li>
              <a href="#" className="block">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Apps
              </a>
            </li>
            <li>
              <a href="#" className="block">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="block">
                About
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
