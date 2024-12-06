import { Navbar } from "../components/Navbar";
import AppleCard from "../components/AppleCard";
import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen overflow-hidden relative ${isOpen ? "bg-[#f87171]" : ""}`}>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />

      <motion.div
        className="h-full w-full p-4"
        initial={{ x: 0, scale: 1 }}
        animate={{
          x: isOpen ? "-20%" : 0,
          y: isOpen ? "2%" : 0,
          scale: isOpen ? [1, 0.8, 0.85] : [0.85, 1.1, 1],
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
      >
        <p className={`text-3xl font-bold mb-20 px-16 md:text-center ${isOpen ? "text-white" : "text-slate-600"}`}>
          Shipments through phone made easy
        </p>
        <AppleCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
          className="mb-5"
        />
        <AppleCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
          className="mb-5"
        />
        <AppleCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
        />
      </motion.div>
    </div>
  );
};

export default Toggle;
