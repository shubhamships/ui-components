import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import DashBoardCard from "../components/DashBoardCard";
import { PiTicket } from "react-icons/pi";

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

      <div className="flex min-h-screen">
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

        <motion.div
          className="flex flex-col px-5 pt-10 bg-gray-100 w-full"
          variants={contentVariants}
          initial="hidden"
          animate={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <p className="text-2xl font-bold mb-5">Dashboard</p>
          <div className="grid grid-cols-5 gap-5 px-5 py-10 rounded-md bg-white w-full">
            <DashBoardCard content="All Orders" number="04" className="bg-red-50" />
            <DashBoardCard content="Drafted Orders" number="00" className="bg-pink-50" />
            <DashBoardCard content="Pending for Label" number="00" className="bg-yellow-50" />
            <DashBoardCard content="Packed Orders" number="00" className="bg-purple-50" />
            <DashBoardCard content="Dispatched Orders" number="04" className="bg-blue-50" />
          </div>
          <div className="flex gap-2">
            <div className="bg-white rounded-md w-3/4 h-56 mt-5">
              <p className="px-10 font-semibold mt-4">Action Required</p>
              <motion.div
                className="flex gap-10 px-10 py-5"
                variants={insideContentVariants2}
                initial="hidden"
                animate="visible"
              >
                <div className="w-60 h-24 border-gray-200 border rounded-md">
                  <div className="flex">
                    <PiTicket className="mt-5 w-11 h-7 text-red-400 items-start ml-3 bg-red-100 rounded-md mr-3" />
                    <p className="text-2xl font-semibold mt-5">13</p>
                  </div>
                  <p className="text-md text-slate-400 pl-3 mt-2">KYC Approval pending</p>
                </div>
                <div className="w-60 h-24 border-gray-200 border rounded-md">
                  <div className="flex">
                    <PiTicket className="mt-5 w-11 h-7 text-blue-400 items-start ml-3 bg-blue-100 rounded-md mr-3" />
                    <p className="text-2xl font-semibold mt-5">13</p>
                  </div>
                  <p className="text-md text-slate-400 pl-3 mt-2">KYC Approval pending</p>
                </div>
                <div className="w-60 h-24 border-gray-200 border rounded-md">
                  <div className="flex">
                    <PiTicket className="mt-5 w-11 h-7 text-yellow-400 items-start ml-3 bg-yellow-100 rounded-md mr-3" />
                    <p className="text-2xl font-semibold mt-5">13</p>
                  </div>
                  <p className="text-md text-slate-400 pl-3 mt-2">KYC Approval pending</p>
                </div>
              </motion.div>
            </div>
            <div className="bg-white rounded-md w-1/3 h-56 mt-5">
              <p className="px-10 font-semibold mt-4">Wallet Activity</p>
              <motion.div
                className="w-80 mx-2 my-4 border border-gray-200 h-16 rounded-md"
                variants={insideContentVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-col">
                  <p className="text-sm px-5 py-1">Wallet Deduction for Order: SG3241251</p>
                  <p className="text-sm text-slate-500 px-5">04 Dec 24 - 06:25 PM</p>
                </div>
              </motion.div>
              <motion.div
                className="w-80 mx-2 my-4 border border-gray-200 h-16 rounded-md"
                variants={insideContentVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-col">
                  <p className="text-sm px-5 py-1">Wallet Deduction for Order: SG3241251</p>
                  <p className="text-sm text-slate-500 px-5">04 Dec 24 - 06:25 PM</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoard;
