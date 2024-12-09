import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const DashBoard = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.5 } },
  };

  const insideContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 2 } },
  };

  return (
    <div>
      <motion.div
        className="flex justify-between shadow-sm px-5 sticky top-0 bg-white z-10"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={logo} className="w-32 h-10 m-3" />
        <div className="rounded-full bg-orange-400 p-2 m-3 text-white">SJ</div>
      </motion.div>

      <div className="flex">
        <motion.ul
          className="flex flex-col gap-10 px-5 items-center justify-center shadow-lg w-20 h-screen sticky top-0 bg-white"
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
              <Link to={index === 0 ? "/" : `/page${index + 1}`}>
                <Icon className="h-8 w-10" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="flex flex-col px-5 pt-10 bg-gray-100 w-full"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-2xl font-bold mb-5">Dashboard</p>
          <div className="grid grid-cols-5 gap-5 px-5 py-10 rounded-md bg-white w-full">
            <motion.div
              className="w-56 h-44 rounded-md bg-red-50"
              variants={insideContentVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="w-56 h-44 rounded-md bg-pink-50"
              variants={insideContentVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="w-56 h-44 rounded-md bg-blue-50"
              variants={insideContentVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="w-56 h-44 rounded-md bg-yellow-50"
              variants={insideContentVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div
              className="w-56 h-44 rounded-md bg-green-50"
              variants={insideContentVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </div>
          <motion.div className="p-5 mt-5 rounded-md bg-white w-full">
            <motion.div
              className="w-56 h-44 rounded-md bg-red-300"
              variants={insideContentVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoard;
