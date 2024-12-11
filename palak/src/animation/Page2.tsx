import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import { useState } from "react";

const Page2 = () => {
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

  const DetailVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: {
      opacity: 0,
      y: 500,
      transition: { duration: 0.7 },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isContinue, setIsContinue] = useState(false);

  const handleChangeClick = () => {
    setIsOpen(true);
    setIsContinue(false);
  };

  const handleContinueClick = () => {
    setIsContinue(true);
    setIsOpen(false);
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

      <div className="flex h-screen">
        <motion.ul
          className="flex flex-col gap-10 px-5 items-center justify-center shadow-lg w-20 min-h-screen sticky top-0 bg-white"
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
        <div className="flex bg-gray-100 h-screen w-full">
          <div className="flex-shrink-0 w-3/5 bg-white h-full mt-10 ml-5 rounded-md">
            <button className="text-blue-600 underline mt-10 ml-10" onClick={handleChangeClick}>
              Change
            </button>
            <button
              className="bg-blue-600 rounded-md p-3 text-white underline mt-10 ml-10"
              onClick={handleContinueClick}
            >
              Continue
            </button>
            <Link to="/Vieworder">
              <button className="bg-blue-600 rounded-md py-3 px-5 text-white mt-10 ml-10">View</button>
            </Link>
            <Link to="/page4">
              <button className="bg-blue-600 rounded-md py-3 px-5 text-white mt-10 ml-10">Checkout</button>
            </Link>
          </div>
          {/* <AnimatePresence> */}
          {isOpen && (
            <motion.div
              key="open"
              className="flex-shrink-5 w-2/5 bg-white h-80 mt-10 mx-5 rounded-md"
              variants={DetailVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-2 p-8">
                <p>Consignor Details</p>
                <p className="text-sm text-gray-400">Name</p>
                <p>Murli Chandan | 1234567890</p>
                <p className="text-sm text-gray-400">Address</p>
                <p>Murli Chandan | 1234567890</p>
                <p>
                  S/O Assudomal Chandani, House No 6 New Frinds Colony Behind 56 Bhog. Huzur Bhopal, Madhya Pradesh-
                  462016
                </p>
              </div>
            </motion.div>
          )}
          {isContinue && (
            <motion.div
              key="continue"
              className="flex-shrink-4 w-2/5 bg-red-100 h-80 mt-10 mx-5 rounded-md"
              variants={DetailVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-2 p-8">
                <p>Consignor Details</p>
                <p className="text-sm text-gray-400">Name</p>
                <p>Murli Chandan | 1234567890</p>
                <p className="text-sm text-gray-400">Address</p>
                <p>Murli Chandan | 1234567890</p>
                <p>
                  S/O Assudomal Chandani, House No 6 New Frinds Colony Behind 56 Bhog. Huzur Bhopal, Madhya Pradesh-
                  462016
                </p>
              </div>
            </motion.div>
          )}
          {/* </AnimatePresence> */}
        </div>
      </div>
    </div>
  );
};

export default Page2;
