import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p className="text-lg font-semibold">View Order</p>
      <div className="flex justify-between items-center gap-1">
        <div className="flex">
          <Link to="#" className="text-gray-400 hover:text-black text-sm">
            Orders
          </Link>
          <IoChevronForward className="text-gray-500 mt-0.5" />
          <Link to="#" className="text-gray-400 hover:text-black text-sm">
            All Orders
          </Link>
          <IoChevronForward className="text-gray-500 mt-0.5" />
          <Link to="#" className="text-gray-400 hover:text-black text-sm">
            View Order
          </Link>
          <IoChevronForward className="text-gray-500 mt-0.5" />
          <Link to="#" className="text-black text-sm">
            SG32412041838251
          </Link>
        </div>
        <button className="text-blue-800 px-3 py-2 border border-blue-800 bg-white rounded-md text-xs mr-5">
          Back
        </button>
      </div>
    </div>
  );
};
export default Header;
