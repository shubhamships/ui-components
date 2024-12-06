import { NavItem } from "./NavItem";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = ({ isOpen, toggleMenu }: any) => {
  return (
    <div className="relative p-8 cursor-pointer">
      <div className="lg:hidden flex items-center cursor-pointer absolute top-12 right-4 z-50" onClick={toggleMenu}>
        <Menu />
      </div>

      <motion.div
        className={`fixed top-20 right-0 bg-white/10 text-white shadow-xl rounded-lg lg:hidden w-1/2 min-h-sm z-30`}
        animate={{ x: isOpen ? "0%" : "100%", scale: isOpen ? 1.1 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="flex flex-col items-center justify-start m-10 h-full space-y-10 font-semibold">
          <NavItem href="/">Orders</NavItem>
          <NavItem href="/">Customers</NavItem>
          <NavItem href="/">Pickups</NavItem>
          <NavItem href="/">Shipments</NavItem>
          <NavItem href="/">Manifests</NavItem>
        </ul>
      </motion.div>
    </div>
  );
};
