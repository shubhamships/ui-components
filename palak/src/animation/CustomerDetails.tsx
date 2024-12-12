import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
interface CustomerDetailsProps {
  isLoading: boolean;
  isData: any;
  orderDetails: any;
  // data:any
}
const CustomerDetails = ({ isLoading, isData, orderDetails }: CustomerDetailsProps) => {
  return (
    <div>
      {isLoading ? (
        <motion.div
          className="w-full bg-white rounded-md grid lg:grid-cols-2 grid-cols-1 gap-5 p-4"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity }}
        >
          <div className="px-5 pt-5">
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <div className="h-5 w-24 bg-gray-100 rounded-md"></div>
            </div>
            <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-4"></div>
            <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-2 mb-4"></div>
          </div>
          <div className="px-5 pt-5">
            <div className="flex items-center gap-x-5">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <div className="h-5 w-24 bg-gray-100 rounded-md"></div>
            </div>
            <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-4"></div>
            <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-2 mb-4"></div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className=" bg-white rounded-md grid lg:grid-cols-2 grid-cols-1 gap-5 p-3 mb-5"
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {orderDetails ? (
            <>
              <div className="p-3">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50">
                    <BsPerson className="w-5 h-5 rounded-full text-blue-800 m-2.5" />
                  </div>
                  <p className="font-semibold">Customer Details</p>
                </div>
                <p className="pl-16 text-sm text-gray-400 font-semibold">
                  {isData.data.address_nickname} {isData.data.pickup_mobile}
                </p>
                <p className="pl-16 text-sm text-gray-400">{isData.data.billing_address}</p>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50">
                    <CiLocationOn className="w-5 h-5 rounded-full text-blue-800 m-2.5" />
                  </div>
                  <p className="font-semibold">Delivery Address</p>
                </div>
                <p className="pl-16 text-sm text-gray-400 font-semibold">
                  {isData.data.customer_billing_firstname} {isData.data.customer_billing_lastname}{" "}
                  {isData.data.customer_billing_mobile}
                </p>
                <p className="pl-16 text-sm text-gray-400">
                  {isData.data.customer_shipping_address}
                  {", "}
                  {isData.data.customer_shipping_address_2}
                  {", "}
                  {isData.data.customer_shipping_address_3}
                  {", "}
                  {isData.data.customer_shipping_city}
                  {", "}
                  {isData.data.customer_shipping_state}
                  {", "}
                  {isData.data.customer_shipping_country}
                  {", "}
                  {isData.data.customer_shipping_postcode}
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">Failed to load order details.</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CustomerDetails;
