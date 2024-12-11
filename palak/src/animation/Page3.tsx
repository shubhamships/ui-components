import { AnimatePresence, motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import TextArea from "../components/TextArea";

const Page3 = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: "-50%",
      x: "50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: "-50%",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      x: "50%",
      transition: { duration: 0.6 },
    },
  };
  return (
    <div className="relative">
      <motion.div
        className={`flex justify-between shadow-sm px-5 sticky top-0 bg-white z-10 ${isOpen ? "hidden" : ""}`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={logo} className="w-32 h-10 m-3" />
        <div className="rounded-full bg-orange-400 p-2 m-3 text-white">SJ</div>
      </motion.div>
      <div className="flex h-screen">
        <motion.ul
          className={`flex flex-col gap-10 px-5 items-center justify-center shadow-lg w-20 max-h-screen ${
            isOpen ? "hidden" : ""
          }`}
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
        <div
          className={`max-h-screen overflow-auto flex justify-between w-full p-10 ${
            isOpen ? "bg-black/60" : "bg-gray-100"
          }`}
          // onMouseDownCapture={() => setIsOpen(false)}
        >
          <p className="text-2xl font-semibold mb-5">Customers</p>
          <button className="bg-blue-600 text-white rounded-md p-3 h-12" onClick={handleClick}>
            Add Customer
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute w-9/12 p-5 max-h-screen transform bg-white left-[50%] top-[50%] grid max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg rounded-lg  overflow-auto lg:max-w-max lg:min-w-152"
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-lg font-semibold">Add New Customer</p>
              <hr />
              <div className="grid grid-cols-3 p-2 mt-2 gap-3">
                <div>
                  <Label type="Username" className="text-black" />

                  <Input type={"text"} name="email" placeholder="Type Username here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="Mobile Number" className="text-black" />

                  <Input type={"text"} name="email" placeholder="Type Mobile Number here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="Email" className="text-black" />
                  <Input type={"text"} name="email" placeholder="Type Email here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="Document Type" className="text-black" />
                  <Input type={"text"} name="email" placeholder="Type Document Type here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="Aadhar Number" className="text-black" />
                  <Input type={"text"} name="email" placeholder="Type Aadhar Number here ..." className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-3 p-2 mt-2 gap-3">
                <div>
                  <Label type="First Name" className="text-black" />

                  <Input type={"text"} name="email" placeholder="Type First Name here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="Last Name" className="text-black" />

                  <Input type={"text"} name="email" placeholder="Type Last Name here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="City" className="text-black" />
                  <Input type={"text"} name="email" placeholder="Type City here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="Pincode" className="text-black" />
                  <Input type={"text"} name="email" placeholder="Type Pincode here ..." className="mt-1" />
                </div>
                <div>
                  <Label type="State" className="text-black" />
                  <Input type={"text"} name="email" placeholder="Type State here ..." className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-3 mt-2 gap-3 p-2">
                <div>
                  <Label type="Billing Address" className="text-black" />
                  <TextArea />
                </div>
              </div>
              <div className="flex gap-5 justify-end">
                <button
                  className="border border-blue-800 text-blue-600 p-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button className="bg-blue-600 text-white p-2 rounded-md">Submit</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Page3;
