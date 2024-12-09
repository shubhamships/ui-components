import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import AppleCard from "../components/AppleCard";
import { Link } from "react-router-dom";

const Home = () => {
  const pageVariants = {
    // initial: { x: 300 },
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 },
    exit: { x: -500 },
  };

  return (
    <div className="flex">
      <ul className="flex flex-col gap-10 px-5 items-center justify-center shadow-lg w-20 h-screen">
        <Link to="/">
          <li className="cursor-pointer">
            <IoCubeOutline className="h-8 w-10" />
          </li>
        </Link>
        <Link to="/page2">
          <li className="cursor-pointer">
            <IoPeopleOutline className="h-8 w-10" />
          </li>
        </Link>
        <Link to="/page3">
          <li className="cursor-pointer">
            <CiDeliveryTruck className="h-8 w-10" />
          </li>
        </Link>
      </ul>
      <motion.div
        className="grid grid-cols-3 gap-10 items-center justify-center px-10 bg-red-400"
        key="page"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 1 }}
      >
        <AppleCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
        />
        <AppleCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
        />
        <AppleCard
          title="Monthly payment options"
          description="Choose an easy way to finance with convenient monthly payment options."
        />
      </motion.div>
    </div>
  );
};

export default Home;