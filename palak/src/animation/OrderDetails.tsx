import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

interface OrderDetailsProps {
  isLoading: boolean;
}
const OrderDetails = ({ isLoading }: OrderDetailsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChevronClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isLoading ? (
        <motion.div
          className="w-full bg-white rounded-md grid gap-5 p-4 mt-5"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity }}
        >
          <div className="h-5 w-1/3 bg-gray-100 rounded-md"></div>
          <div className="h-4 w-1/2 bg-gray-100 rounded-md mt-2"></div>
          <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-2 mb-4"></div>
          <div className="h-10 w-full bg-gray-100 rounded-md"></div>
          <div className="h-10 w-full bg-gray-100 rounded-md mt-2"></div>
        </motion.div>
      ) : (
        <div className="bg-white rounded-md p-3 mb-5">
          <div className="flex justify-between p-3">
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-50">
                <BsPerson className="w-5 h-5 rounded-full text-blue-800 m-2.5" />
              </div>
              <p className="font-semibold text-sm">Order Details</p>
            </div>
            {isOpen ? (
              <GoChevronUp className="h-6 w-8 mt-1 cursor-pointer" onClick={handleChevronClick} />
            ) : (
              <GoChevronDown className="h-6 w-8 mt-1 cursor-pointer" onClick={handleChevronClick} />
            )}
          </div>
          <div className="grid gap-5 lg:grid-cols-3 grid-cols-1">
            <div className="border border-gray-100 w-full max-h-max rounded-lg">
              <div className="flex p-3 gap-x-3">
                <div className="w-10 h-10 rounded-lg bg-green-100">
                  <BsPerson className="w-5 h-5 text-green-800 m-2.5" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm font-semibold">Billed Weight</p>
                  <p className="text-gray-400 text-xs">1 kg</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 w-full max-h-max rounded-lg">
              <div className="flex p-3 gap-x-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50">
                  <BsPerson className="w-5 h-5 text-orange-600 m-2.5" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm font-semibold">Billed Weight</p>
                  <p className="text-gray-400 text-xs">1 kg</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 w-full max-h-max rounded-lg">
              <div className="flex p-3 gap-x-3">
                <div className="w-10 h-10 rounded-lg bg-red-100">
                  <BsPerson className="w-5 h-5 text-red-800 m-2.5" />
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="text-sm font-semibold">Billed Weight</p>
                  <p className="text-gray-400 text-xs">1 kg</p>
                </div>
              </div>
            </div>
          </div>
          {!isOpen && (
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100">
                    <BsPerson className="w-5 h-5 text-blue-800 m-2.5" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm font-semibold">Billed Weight</p>
                    <p className="text-gray-400 text-xs">1 kg</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-100">
                    <BsPerson className="w-5 h-5 text-yellow-800 m-2.5" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm font-semibold">Billed Weight</p>
                    <p className="text-gray-400 text-xs">1 kg</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100">
                    <BsPerson className="w-5 h-5 text-purple-800 m-2.5" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm font-semibold">Billed Weight</p>
                    <p className="text-gray-400 text-xs">1 kg</p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-100">
                    <BsPerson className="w-5 h-5 text-pink-800 m-2.5" />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm font-semibold">Billed Weight</p>
                    <p className="text-gray-400 text-xs">1 kg</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default OrderDetails;
