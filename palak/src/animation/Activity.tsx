import { motion } from "framer-motion";
import { GoCheckCircle } from "react-icons/go";
interface ActivityProps {
  isLoading: boolean;
}
const Activity = ({ isLoading }: ActivityProps) => {
  return (
    <div>
      {isLoading ? (
        <motion.div
          className="bg-white rounded-md p-4"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity }}
        >
          <p className="font-semibold mb-3"></p>
          <div className="flex flex-col">
            <div className="h-5 w-1/3 bg-gray-100 rounded-md mb-3"></div>
            <div className="flex gap-3">
              <GoCheckCircle className="bg-gray-100 text-gray-100 h-6 w-6 rounded-lg" />
              <p className="h-6 w-full rounded-lg bg-gray-100"></p>
            </div>
            <div className="border-l-2 border-dashed h-10 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="bg-gray-100 text-gray-100 h-6 w-6 rounded-lg" />
              <p className="h-6 w-full rounded-lg bg-gray-100"></p>
            </div>
            <div className="border-l-2 border-dashed h-10 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="bg-gray-100 text-gray-100 h-6 w-6 rounded-lg" />
              <p className="h-6 w-full rounded-lg bg-gray-100"></p>
            </div>
            <div className="border-l-2 border-dashed h-10 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="bg-gray-100 text-gray-100 h-6 w-6 rounded-lg" />
              <p className="h-6 w-full rounded-lg bg-gray-100"></p>
            </div>
            <div className="border-l-2 border-dashed h-10 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="bg-gray-100 text-gray-100 h-6 w-6 rounded-lg" />
              <p className="h-6 w-full rounded-lg bg-gray-100"></p>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="bg-white rounded-md p-5">
          <p className="font-semibold mb-3">Activity</p>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-green-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Shipment Created & Awaiting Payment</p>
            </div>
            <div className="border-l-2 border-dashed border-l-green-400 h-8 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-green-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Payment Recieved</p>
            </div>
            <div className="border-l-2 border-dashed border-l-green-400 h-8 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-green-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Label Printed & Order Packed</p>
            </div>
            <div className="border-l-2 border-dashed border-l-green-400 h-8 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-green-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Shipment in Transit</p>
            </div>
            <div className="border-l-2 border-dashed border-l-green-400 h-8 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-gray-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Received at Hub</p>
            </div>
            <div className="border-l-2 border-dashed border-l-gray-400 h-8 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-gray-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Awaiting for Pickup</p>
            </div>
            <div className="border-l-2 border-dashed border-l-gray-400 h-8 m-2"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <GoCheckCircle className="text-gray-400 h-6 w-6" />
              <p className="font-semibold text-sm pt-0.5">Processed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Activity;
