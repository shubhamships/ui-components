import { useState } from "react";
import { Label } from "../components/Label";
import Required from "../components/Required";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";

const LoginPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleLoginClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <Button
        className="bg-blue-600 text-white px-36 my-16 flex items-center justify-center"
        onClick={handleLoginClick}
      >
        Login
      </Button>

      <motion.div
        className="min-w-96 min-h-screen shadow-lg py-10 px-12 fixed top-0 right-0 rounded-3xl"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isFormVisible ? 1 : 0,
          x: isFormVisible ? 0 : "100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <MdOutlineCancel className="mb-9 ml-80" />
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Login</p>
          <p className="text-blue-900 text-lg font-semibold pb-10">Register for free</p>
        </div>

        <form action="">
          <div className="flex flex-col space-y-1">
            <div className="flex items-start">
              <Label type="Email" />
              <Required />
            </div>
            <Input type="email" name="email" placeholder="Enter Email ID ..." />
          </div>
          <div className="space-y-1 mt-4">
            <div className="flex items-start">
              <Label type="Password" />
              <Required />
            </div>
            <div className="flex items-end relative">
              <Input type="text" name="password" placeholder="Type here ..." />
            </div>
          </div>
          <div className="my-1">
            <a href="#">
              <span className="text-sm font-medium text-blue-900 hover:underline">Forgot Password?</span>
            </a>
          </div>
          <Button className="bg-blue-600 text-white px-36 mt-16">Submit</Button>
          <p className="text-lg text-blue-500 text-center mt-5 font-thin">Use OTP to Login</p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
