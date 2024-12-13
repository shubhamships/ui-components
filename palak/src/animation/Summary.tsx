import { motion } from "framer-motion";
interface SummaryProps {
  isLoading: boolean;
  details: any;
}
const Summary = ({ isLoading, details }: SummaryProps) => {
  return (
    <div>
      {isLoading ? (
        <motion.div
          className="bg-white rounded-md p-4 mb-5"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity }}
        >
          <div className="h-5 w-1/3 bg-gray-100 rounded-md mb-3"></div>
          <div className="h-8 w-full bg-gray-100 rounded-md"></div>
          <div className="h-8 w-full bg-gray-100 rounded-md mt-2"></div>
          <div className="h-10 w-full bg-gray-100 rounded-md mt-2"></div>
        </motion.div>
      ) : (
        <div className="bg-red-50 rounded-md mb-5">
          <p className="text-sm text-orange-400 font-semibold p-5">Summary</p>
          <hr className="text-orange-300" />
          <div className="flex justify-between py-2 px-5">
            <p className="text-xs">Logistic Fee</p>
            <p className="text-xs">Rs. 474.00</p>
          </div>
          <div className="flex justify-between py-2 px-5">
            <p className="text-xs">GST</p>
            <p className="text-xs">Rs. 85.32</p>
          </div>
          <div className="flex justify-between py-2 bg-red-100 rounded-lg px-5">
            <p className="text-sm font-semibold">Sub Total</p>
            <p className="text-sm font-semibold">{`Rs. ${details.data.total}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
