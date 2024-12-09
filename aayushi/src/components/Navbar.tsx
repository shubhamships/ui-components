import { useState } from "react";
import { NavItem } from "./NavItem";
import { Menu, LayoutDashboard, Film, Users } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative cursor-pointer pb-40 h-full bg-black">
      <div className="flex justify-between items-center px-6 py-4">
      <ul className="hidden lg:flex flex-col space-y-8 font-semibold text-white">
  <NavItem
    href="/"
    className="relative group transition-all duration-300 ease-in-out hover:scale-110"
  >
    <LayoutDashboard className="text-2xl" />
    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-x-4 translate-x-0">
      Dashboard
    </span>
  </NavItem>

  <NavItem
    href="#"
    className="relative group transition-all duration-300 ease-in-out hover:scale-110"
  >
    <Film className="text-2xl" />
    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-x-4 translate-x-0">
      Movies
    </span>
  </NavItem>

  <NavItem
    href="#"
    className="relative group transition-all duration-300 ease-in-out hover:scale-110"
  >
    <Users className="text-2xl" />
    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-x-4 translate-x-0">
      Customers
    </span>
  </NavItem>
</ul>


        <div className="lg:hidden flex items-center cursor-pointer text-white" onClick={toggleMenu}>
          <Menu className="text-3xl" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 bg-black bg-opacity-90 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } lg:hidden w-3/4 md:w-1/2 z-50 p-6`}
      >
        <ul className="flex flex-col items-start space-y-8 text-white font-semibold">
          <NavItem
            href="/"
            className="relative hover:bg-gray-800 hover:px-4 py-2 w-full transition-all duration-300 ease-in-out"
          >
            Dashboard
          </NavItem>
          <NavItem
            href="/about"
            className="relative hover:bg-gray-800 hover:px-4 py-2 w-full transition-all duration-300 ease-in-out"
          >
            Movies
          </NavItem>
          <NavItem
            href="/contact"
            className="relative hover:bg-gray-800 hover:px-4 py-2 w-full transition-all duration-300 ease-in-out"
          >
            Customers
          </NavItem>
        </ul>
      </div>
    </div>
  );
};
