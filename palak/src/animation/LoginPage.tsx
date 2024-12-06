import { useState } from "react";
import { Label } from "../components/Label";
import Required from "../components/Required";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";

const LoginPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLoginClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true); //start loading

    setTimeout(() => {
      setIsSubmitting(false); //stop loading
      setIsSubmitted(true); //start msg

      setTimeout(() => {
        setIsSubmitted(false); //stop msg
        setIsFormVisible(false); //close form
      }, 2000);
    }, 2000);
  };

  return (
    <div className="relative">
      <Button
        className="bg-blue-600 text-white px-36 my-16 flex items-center justify-center"
        onClick={handleLoginClick}
      >
        Login
      </Button>

      <motion.div
        className="min-w-96 min-h-screen shadow-lg py-10 px-12 fixed top-0 right-0 rounded-3xl bg-white"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isFormVisible ? 1 : 0,
          x: isFormVisible ? 0 : "100%",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <MdOutlineCancel className="mb-9 ml-80 cursor-pointer" onClick={handleLoginClick} />
        <div className="flex justify-between">
          <p className="text-lg font-semibold">Login</p>
          <p className="text-blue-900 text-lg font-semibold pb-10">Register for free</p>
        </div>

        <form onSubmit={handleSubmit}>
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
              <Input type="password" name="password" placeholder="Type here ..." />
            </div>
          </div>
          <div className="my-1">
            <a href="#">
              <span className="text-sm font-medium text-blue-900 hover:underline">Forgot Password?</span>
            </a>
          </div>
          <motion.button
            className="bg-blue-600 text-white px-32 mt-16 py-2 rounded-lg disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting.." : "Submit"}
          </motion.button>
          <p className="text-lg text-blue-500 text-center mt-5 font-thin">Use OTP to Login</p>
        </form>
      </motion.div>

      {isSubmitted && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h1 className="text-2xl font-bold text-green-500">Thank You!</h1>
            <p className="text-lg mt-4">Your form has been submitted successfully.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LoginPage;
