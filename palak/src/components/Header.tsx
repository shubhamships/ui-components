import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div>
      {isLoading ? (
        <div>
          <p className="text-lg font-semibold">View Order</p>
          <div className="flex justify-between items-center gap-1">
            <div className="flex">
              <div className="bg-gray-100 w-16 h-5 mr-2 rounded-lg"></div>

              <div className="bg-gray-100 w-16 h-5 mr-2 rounded-lg"></div>

              <div className="bg-gray-100 w-16 h-5 mr-2 rounded-lg"></div>

              <div className="bg-gray-100 w-24 h-5 rounded-lg"></div>
            </div>
            <button className=" bg-gray-100 rounded-lg w-14 h-8 mr-5"></button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};
export default Header;
