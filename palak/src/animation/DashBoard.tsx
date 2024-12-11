import { AnimatePresence, motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import DashBoardCard from "../components/DashBoardCard";
import { PiTicket } from "react-icons/pi";
import { useState } from "react";

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
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 1.5,
        keyframes: [{ x: 50 }, { x: 0 }],
      },
    },
  };

  const insideContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 2 } },
  };

  const insideContentVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 2 } },
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleQuickActions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <motion.div
        className="flex justify-between shadow-sm px-5 sticky top-0 bg-white z-10"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={logo} className="w-20 sm:w-32 h-10 m-3" />
        <div className="flex items-center space-x-3 sm:space-x-5">
          <p className="text-blue-800 hover:underline text-sm sm:text-base cursor-pointer" onClick={handleQuickActions}>
            Quick Actions
          </p>
          <p className="text-sm sm:text-base">
            Rs. 3050 <span className="text-blue-800">Recharge</span>
          </p>
          <div className="rounded-full bg-orange-400 py-1 sm:py-2 px-2 sm:px-3 text-white text-xs sm:text-base">SJ</div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <motion.ul
          className="hidden md:flex flex-col gap-6 sm:gap-10 px-2 sm:px-5 items-center justify-center shadow-lg w-16 sm:w-20 min-h-screen bg-white"
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
                <Icon className="h-6 w-6 sm:h-8 sm:w-10" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Quick Actions */}
        {isOpen && (
          <AnimatePresence>
            <motion.div
              className="bg-white grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-3 sm:p-5 fixed shadow-lg right-5 sm:right-20 rounded-md w-4/5 sm:max-w-max"
              initial={{ y: -30, scale: 0.8 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ y: -30, scale: 0.8, transition: { duration: 0.5 } }}
            >
              {["Add Order", "Add CSB-V Order", "Create Manifest", "Pickup Request", "Rate Calculator"].map(
                (action, i) => (
                  <div
                    key={i}
                    className="w-full h-16 sm:w-24 sm:h-20 rounded-lg bg-blue-100 text-xs text-center py-2 sm:py-5 px-2"
                  >
                    {action}
                  </div>
                ),
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Content Section */}
        <motion.div
          className="flex flex-col px-3 sm:px-5 pt-5 sm:pt-10 bg-gray-100 w-full"
          variants={contentVariants}
          initial="hidden"
          animate={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-5">Dashboard</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-5 px-2 sm:px-5 py-5 sm:py-10 rounded-md bg-white w-full">
            <DashBoardCard content="All Orders" number="04" className="bg-red-50" />
            <DashBoardCard content="Drafted Orders" number="00" className="bg-pink-50" />
            <DashBoardCard content="Pending for Label" number="00" className="bg-yellow-50" />
            <DashBoardCard content="Packed Orders" number="00" className="bg-purple-50" />
            <DashBoardCard content="Dispatched Orders" number="04" className="bg-blue-50" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Action Required */}
            <div className="bg-white rounded-md w-full sm:w-3/4 h-auto mt-5">
              <p className="px-4 sm:px-10 font-semibold mt-4">Action Required</p>
              <motion.div
                className="grid grid-cols-1 sm:flex gap-3 sm:gap-10 px-3 sm:px-10 py-5"
                variants={insideContentVariants2}
                initial="hidden"
                animate="visible"
              >
                {["red", "blue", "yellow"].map((color, i) => (
                  <div key={i} className="w-full sm:w-60 h-24 border-gray-200 border rounded-md">
                    <div className="flex">
                      <PiTicket
                        className={`mt-5 w-11 h-7 text-${color}-400 items-start ml-3 bg-${color}-100 rounded-md mr-3`}
                      />
                      <p className="text-2xl font-semibold mt-5">13</p>
                    </div>
                    <p className="text-md text-slate-400 pl-3 mt-2">KYC Approval pending</p>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Wallet Activity */}
            <div className="bg-white rounded-md w-full sm:w-1/3 h-auto mt-5">
              <p className="px-4 sm:px-10 font-semibold mt-4">Wallet Activity</p>
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-full sm:w-80 mx-2 my-2 sm:my-4 border border-gray-200 h-16 rounded-md"
                  variants={insideContentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-sm px-2 sm:px-5 py-1">Wallet Deduction for Order: SG3241251</p>
                    <p className="text-xs sm:text-sm text-slate-500 px-2 sm:px-5">04 Dec 24 - 06:25 PM</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoard;
