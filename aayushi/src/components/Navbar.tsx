import { useState } from "react";
import { X, Menu } from "lucide-react";
import { NavItem } from "./NavItem";
import Button from "./Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav>
        <ul className="hidden md:flex flex-row justify-end items-center gap-4 space-x-4 m-6 mb-1 text-white font-semibold text-md">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Books</NavItem>
          <NavItem href="#">Podcasts</NavItem>
          <NavItem href="#">Videos</NavItem>
          <NavItem href="#">Contact</NavItem>
          <li>
            <Button
              text="Join us"
              className="bg-amber-400 border-amber-400 text-white rounded px-2 py-1 hover:bg-amber-600"
            />
          </li>
        </ul>

        <div className="md:hidden flex justify-between items-center p-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <Menu className="text-white" />
          </button>
          <Button text="Join us" className="bg-amber-400 border-amber-400 text-white p-2 mx-4 hover:bg-amber-600" />
        </div>

        {isMenuOpen && (
          <ul
            className={` 
               absolute transition-all duration-500 ease-in-out top-16 left-0 w-full p-4 space-y-4  text-lg font-semibold mt-2 opacity-100 bg-black/30 text-white backdrop-blur-lg translate-y-0 scale-100 shadow-lg
                 
              `}
          >
            <li className="flex justify-between">
              <a href="#" className="block">
                Home
              </a>
              <X onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
            </li>
            <NavItem href="#">About</NavItem>
            <NavItem href="#">Books</NavItem>
            <NavItem href="#">Podcasts</NavItem>
            <NavItem href="#">Videos</NavItem>
            <NavItem href="#">Contact</NavItem>
          </ul>
        )}
      </nav>
    </div>
  );
};
