import { motion } from "framer-motion";
import logo from "../assets/logo.png";
const NavbarFranchise = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      className="flex justify-between shadow-sm px-5 sticky top-0 bg-white z-10"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <img src={logo} className="w-32 h-10 m-3" />
      <div className="rounded-full bg-orange-400 p-2 m-3 text-white">SJ</div>
    </motion.div>
  );
};

export default NavbarFranchise;
