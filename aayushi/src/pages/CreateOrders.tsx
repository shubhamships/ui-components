import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Orders } from "./Orders";

export const CreateOrders = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);  // New state for hiding the button

  const handleSubmit = () => {
    setButtonClicked(true);  // Hide the button when clicked
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 4;
        } else {
          clearInterval(interval);
          setPageLoaded(true);
          return 100;
        }
      });
    }, 50);
  };

  return (
    <div className="relative h-screen bg-gray-100">
      {loading && (
        <motion.div
          className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-3/4 h-4 bg-gray-700 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.05, ease: "linear" }}
          ></motion.div>

          <div className="mt-4 text-2xl font-bold text-black">{`${progress}%`}</div>
        </motion.div>
      )}

      {!buttonClicked && (
        <button
          onClick={handleSubmit}
          className="absolute top-4 right-4 bg-indigo-800 px-6 py-3 text-white border rounded-md"
        >
          + Create Order
        </button>
      )}

      {pageLoaded && (
        <motion.div
          className="absolute bottom-0 inset-x-0 bg-gray-100 text-white h-screen"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Orders />
        </motion.div>
      )}
    </div>
  );
};
