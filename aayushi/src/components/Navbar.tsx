import { useState } from "react";
import { X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="">
        <ul className="flex flex-row justify-end items-center space-x-4 m-6 mb-1 text-white font-semibold text-md ">
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out">Connect</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out">Apps</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out">Tools</a>
          </li>
          <li>
            <a href="#" className="hover:border-b-2 hover:border-yellow-400 hover:transition-all hover:ease-in-out">About</a>
          </li>
          <li>
            <button className="bg-amber-400 border-amber-400 text-white rounded p-2 m hover:bg-amber-600">
              Join us
            </button>
          </li>
        </ul>

        <div className="md:hidden flex justify-between items-center p-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                className={`transition-all duration-500 ease-in-out`}
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12h16"
                className={`transition-all duration-500 ease-in-out`}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 18h16"
                className={`transition-all duration-500 ease-in-out`}
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
