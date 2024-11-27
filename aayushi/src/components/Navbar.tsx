import { useState } from "react";
import { X, Menu } from "lucide-react";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="">
        <ul className="hidden md:flex flex-row justify-end items-center gap-4 space-x-4 m-6 mb-1 text-white font-semibold text-md ">
          <NavItem href="#" children={"Home"} />
          <NavItem href="#" children={"About"} />
          <NavItem href="#" children={"Books"} />
          <NavItem href="#" children={"Podcasts"} />
          <NavItem href="#" children={"Videos"} />
          <NavItem href="#" children={"Contact"} />

          <li>
            <button className="bg-amber-400 border-amber-400 text-white rounded px-2 py-1 m hover:bg-amber-600">
              Join us
            </button>
          </li>
        </ul>

        <div className="md:hidden flex justify-between items-center p-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-between items-center"
          >
            <Menu className="text-white"/>
          </button>
          <button className="bg-amber-400 border-amber-400 text-white rounded p-2 mx-4 hover:bg-amber-600">
            Join us
          </button>
        </div>

        {isMenuOpen && (
          <ul
            className={`absolute transition-all duration-500 ease-in-out lg:hidden md:hidden top-16 left-0 w-full bg-white p-4 space-y-4 text-black text-lg font-semibold 
            ${
              isMenuOpen
                ? "mt-2 opacity-100 bg-black/30 text-white backdrop-blur-lg translate-y-0 scale-100 shadow-lg"
                : "opacity-0 translate-y-4 scale-95 shadow-none"
            }`}
          >
            <li className="flex justify-between">
              <a href="#" className="block">
                Connect
              </a>
              <X onClick={() => setIsMenuOpen(false)} />
            </li>
            <NavItem href="#" children={"About"} />
            <NavItem href="#" children={"Books"} />
            <NavItem href="#" children={"Podcasts"} />
            <NavItem href="#" children={"Videos"} />
            <NavItem href="#" children={"Contact"} />
          </ul>
        )}
      </nav>
    </div>
  );
};
