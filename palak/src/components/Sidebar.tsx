import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const sidebarIconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.7 },
    }),
  };
  return (
    <motion.ul
      className="flex flex-col gap-10 items-center justify-center shadow-lg w-20 min-h-screen fixed bg-white"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {[IoCubeOutline, IoPeopleOutline, CiDeliveryTruck].map((Icon, index) => (
        <motion.li
          className="cursor-pointer"
          key={index}
          variants={sidebarIconVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to={index === 0 ? "/dash" : `/page${index + 1}`}>
            <Icon className="h-8 w-10" />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Sidebar;
