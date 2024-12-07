import { useState } from "react";
import { NavItem } from "./NavItem";
import { Menu, LayoutDashboard, Box, Users } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative cursor-pointer bg-gray-100 pb-40 h-full">
      <div className="flex justify-between">
        <ul className="hidden lg:flex flex-col space-y-12 ml-6 mt-7 font-bold">
          <NavItem href="/" className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-violet-500">
            <LayoutDashboard />
            <span className="ml-4 opacity-0 translate-x-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
              Dashboard
            </span>
          </NavItem>
          <NavItem href="/about" className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-violet-500">
            <Box />
            <span className="ml-4 opacity-0 translate-x-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
              Orders
            </span>
          </NavItem>
          <NavItem href="/contact" className="transition-all duration-300 ease-in-out hover:scale-110 hover:text-violet-500">
            <Users />
            <span className="ml-4 opacity-0 translate-x-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0">
              Customers
            </span>
          </NavItem>
        </ul>
      </div>

      <div
        className="lg:hidden flex items-center cursor-pointer absolute top-12 left-4 z-50"
        onClick={toggleMenu}
      >
        <Menu />
      </div>

      <div
        className={`fixed top-0 left-0 bg-white/10 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } lg:hidden w-2/3 md:w-1/2 z-40`}
      >
        <ul className="mt-4 flex flex-col items-center justify-start m-2 h-full space-y-8 font-bold">
          <div className="hover:bg-gray-200 hover:px-4">
            <NavItem href="/">Dashboard</NavItem>
          </div>
          <div className="hover:bg-gray-200 hover:px-4">
            <NavItem href="/about">Orders</NavItem>
          </div>
          <div className="hover:bg-gray-200 hover:px-4">
            <NavItem href="/contact">Customers</NavItem>
          </div>
        </ul>
      </div>
    </div>
  );
};
