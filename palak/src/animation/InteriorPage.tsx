// import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Interior from "../components/Interior";
import b1 from "../assets/b1.jpeg";
const InteriorPage = () => {
  return (
    <div className="flex">
      <ul className="flex flex-col bg-slate-950 gap-10 px-5 items-center justify-center shadow-lg w-20 h-screen">
        <Link to="/">
          <li className="cursor-pointer text-white">
            <IoCubeOutline className="h-8 w-10" />
          </li>
        </Link>
        <Link to="/InteriorPage2">
          <li className="cursor-pointer text-white">
            <IoPeopleOutline className="h-8 w-10" />
          </li>
        </Link>
        <Link to="/InteriorPage3">
          <li className="cursor-pointer text-white">
            <FaKitchenSet className="h-7 w-9" />
          </li>
        </Link>
      </ul>
      <Interior number="01" title="Bedroom" img={b1} />
    </div>
  );
};
export default InteriorPage;
