import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";

const ViewOrder = () => {
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  const sidebarIconVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.7 },
    }),
  };
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState<any>([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleChevronClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setIsLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      try {
        const response = await fetch("https://api.fr.stg.shipglobal.in/api/v1/orders/get-order-details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbnRpdHlJZCI6MjM5MDksImNyZWF0ZWRfYXQiOnsiZGF0ZSI6IjIwMjQtMTItMDUgMTU6MjU6MzIuNjA1MzgwIiwidGltZXpvbmVfdHlwZSI6MywidGltZXpvbmUiOiJBc2lhL0tvbGthdGEifSwiZXhwaXJlc19hdCI6eyJkYXRlIjoiMjAyNS0wMS0wNCAxNToyNTozMi42MDUzODEiLCJ0aW1lem9uZV90eXBlIjozLCJ0aW1lem9uZSI6IkFzaWEvS29sa2F0YSJ9LCJpZCI6Ijk0NzI0N2QyLWI0MzAtNGE2OC1iNTQyLWQ1YzFhOTQzNTJkNyIsInJlbW90ZV9lbnRpdHlfaWQiOjB9.NJ77KrY9yfUSf2EDIX9kAqyDEIJtOvoZQFdgGlw8Uz8`,
          },
          body: JSON.stringify({
            order_id: 1838251,
          }),
        });

        const data = await response.json();
        setIsData(data);
        console.log("data", data);
        console.log("isdata", data.data.address);

        setOrderDetails(data);
      } catch (error: any) {
        console.log("error");
        console.error(error.message);
        setOrderDetails(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, []);
  return (
    <div>
      <motion.div
        className="flex justify-between shadow-sm px-5 sticky top-0 bg-white z-10"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={logo} className="w-32 h-10 m-3" />
        <div className="rounded-full bg-orange-400 p-2 m-3 text-white">SJ</div>
      </motion.div>
      <div className="flex h-screen">
        <motion.ul
          className="flex flex-col gap-10 items-center justify-center shadow-lg w-20 min-h-screen fixed bg-white"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
        >
          {[IoCubeOutline, IoPeopleOutline, CiDeliveryTruck].map((Icon, index) => (
            <motion.li
              className="cursor-pointer"
              key={index}
              variants={sidebarIconVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to={index === 0 ? "/dash" : `/page${index + 1}`}>
                <Icon className="h-8 w-10" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        <div className="flex flex-col gap-4 bg-gray-50 min-h-max w-full pl-24 pt-5 pb-10">
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
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
            <div className="w-11/12">
              {/* Customer details */}
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
              {/* Order Details */}
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
              {/* Billed Details */}
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
                    <tr className="grid grid-cols-7 py-4 mt-2   border rounded-lg mb-4">
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
            </div>
            <div className="w-11/12">
              {/* Summary */}
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
                  <p className="text-sm font-semibold">Rs. 559.32</p>
                </div>
              </div>
              {/* Activity */}
              <div className="bg-white rounded-md p-5">
                <p className="font-semibold mb-3">Activity</p>
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <GoCheckCircle className="text-green-400 h-6 w-6" />
                    <p className="font-semibold text-sm pt-0.5">Shipment Created & Awaiting Payment</p>
                  </div>
                  <div className="border-l-2 border-dashed border-l-green-400 h-10 m-2"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <GoCheckCircle className="text-green-400 h-6 w-6" />
                    <p className="font-semibold text-sm pt-0.5">Payment Recieved</p>
                  </div>
                  <div className="border-l-2 border-dashed border-l-green-400 h-10 m-2"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <GoCheckCircle className="text-green-400 h-6 w-6" />
                    <p className="font-semibold text-sm pt-0.5">Label Printed & Order Packed</p>
                  </div>
                  <div className="border-l-2 border-dashed border-l-green-400 h-10 m-2"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <GoCheckCircle className="text-gray-400 h-6 w-6" />
                    <p className="font-semibold text-sm pt-0.5">Awaiting for Pickup</p>
                  </div>
                  <div className="border-l-2 border-dashed border-l-gray-400 h-10 m-2"></div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <GoCheckCircle className="text-gray-400 h-6 w-6" />
                    <p className="font-semibold text-sm pt-0.5">Processed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
