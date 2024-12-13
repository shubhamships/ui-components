import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import InfoBox from "../components/InfoBox";

interface OrderDetailsProps {
  isLoading: boolean;
  details: any;
}
const OrderDetails = ({ isLoading, details }: OrderDetailsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChevronClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isLoading ? (
        <motion.div
          className="bg-white rounded-md p-3 mt-5"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity }}
        >
          <div className="flex justify-between p-3">
            <div className="flex items-center gap-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-100"></div>
              <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3 grid-cols-1">
            <div className="border border-gray-100 w-full max-h-max rounded-lg">
              <div className="flex p-3 gap-x-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                <div className="flex flex-col gap-y-1">
                  <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                  <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 w-full max-h-max rounded-lg">
              <div className="flex p-3 gap-x-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                <div className="flex flex-col gap-y-1">
                  <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                  <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 w-full max-h-max rounded-lg">
              <div className="flex p-3 gap-x-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                <div className="flex flex-col gap-y-1">
                  <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                  <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                </div>
              </div>
            </div>
          </div>
          {!isOpen && (
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                  <div className="flex flex-col gap-y-1">
                    <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                    <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                  <div className="flex flex-col gap-y-1">
                    <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                    <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                  <div className="flex flex-col gap-y-1">
                    <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                    <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 w-full max-h-max rounded-lg">
                <div className="flex p-3 gap-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100"></div>
                  <div className="flex flex-col gap-y-1">
                    <p className="w-36 h-7 bg-gray-100 rounded-md"></p>
                    <p className="w-14 h-5 bg-gray-100 rounded-md"></p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            <InfoBox title="Billed Weight" text={`${Number(details.data.package_bill_weight / 1000)} kg`} />
            <InfoBox title="Volumetric Weight" text={`${Number(details.data.package_volume_weight) / 1000} kg`} />
            <InfoBox
              title="Dimensions (L x B x H)"
              text={`${details.data.package_length} cm x ${details.data.package_breadth} cm x ${details.data.package_height} cm`}
            />
          </div>
          {/* <AnimatePresence> */}
          {!isOpen && (
            <motion.div
              className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              // exit={{ transition: { duration: 0.2 } }}
            >
              <InfoBox title="Dead Weight" text={`${Number(details.data.package_weight) / 1000} kg`} />
              <InfoBox title="Shipping Partner" text={`${details.data.shipper_info.provider_display_name}`} />
              <InfoBox title="Manifest Details" text={`${details.data.manifest_code}`} />
              <InfoBox title="Pickup Request" text={`${details.data.pickup_request_code}`} />
            </motion.div>
          )}
          {/* </AnimatePresence> */}
        </div>
      )}
    </div>
  );
};
export default OrderDetails;
