import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";

interface BillingDetailsProps {
  isLoading: boolean;
}

const BillingDetails = ({ isLoading }: BillingDetailsProps) => {
  return (
    <div>
      {isLoading ? (
        <motion.div
          className="w-full bg-white rounded-md p-4 mt-5"
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
        <div className="bg-white rounded-md p-3">
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-50">
              <BsPerson className="w-5 h-5 rounded-full text-blue-800 m-2.5" />
            </div>
            <p className="font-semibold text-sm">Billed Details</p>
          </div>
          <table className="md:w-full">
            <thead>
              <tr className="grid grid-cols-7 py-2 border rounded-lg mt-4 text-slate-500 bg-slate-50">
                <th className="text-sm font-normal align-middle">Sr No.</th>
                <th className="text-sm font-normal">Product Name</th>
                <th className="text-sm font-normal align-middle">SKU</th>
                <th className="text-sm font-normal align-middle">HSN</th>
                <th className="text-sm font-normal align-middle">Qty</th>
                <th className="text-sm font-normal align-middle">Unit Price</th>
                <th className="text-sm font-normal align-middle">Total</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="grid grid-cols-7 py-4 mt-2 border rounded-lg mb-4">
                <td className="text-sm align-middle">1</td>
                <td className="text-sm col-span-2 align-middle text-left pl-8">Bat</td>
                <td className="text-sm align-middle">123456</td>
                <td className="text-sm align-middle">1</td>
                <td className="text-sm align-middle">1.00 INR</td>
                <td className="text-sm align-middle">1.00 INR</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default BillingDetails;
