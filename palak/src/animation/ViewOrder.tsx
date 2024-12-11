import { motion } from "framer-motion";
import { IoCubeOutline, IoPeopleOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

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
          className="flex flex-col gap-10 px-5 items-center justify-center shadow-lg w-20 min-h-screen sticky top-0 bg-white"
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
        <div className="flex flex-col gap-7 bg-gray-100 h-screen w-full px-5 pt-5">
          <p className="text-lg font-semibold">View Order</p>
          <div className="flex"></div>
          {isLoading ? (
            <motion.div
              className="w-full sm:w-2/3 bg-white rounded-md grid lg:grid-cols-2 grid-cols-1 gap-5 p-4"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity }}
            >
              <div className="px-5 pt-5">
                <div className="flex items-center gap-x-5">
                  <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                  <div className="h-5 w-24 bg-gray-100 rounded-md"></div>
                </div>
                <div className="h-4 w-3/4 bg-gray-100 rounded-md mt-4"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-2 mb-4"></div>
              </div>
              <div className="px-5 pt-5">
                <div className="flex items-center gap-x-5">
                  <div className="w-10 h-10 rounded-full bg-gray-100"></div>
                  <div className="h-5 w-24 bg-gray-100 rounded-md"></div>
                </div>
                <div className="h-4 w-3/4 bg-gray-100 rounded-md mt-4"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded-md mt-2 mb-4"></div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="w-full sm:w-2/3 bg-white rounded-md grid lg:grid-cols-2 grid-cols-1 gap-5 p-4"
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {orderDetails ? (
                <>
                  <div className="px-5 pt-5">
                    <div className="flex items-center gap-x-5">
                      <div className="w-10 h-10 rounded-full bg-red-100"></div>
                      <p className="font-bold">Customer Details</p>
                    </div>
                    <p className="pl-16 text-sm text-gray-400 font-semibold">
                      {isData.data.address_nickname} {isData.data.pickup_mobile}
                    </p>
                    <p className="pl-16 text-sm text-gray-400">{isData.data.billing_address}</p>
                  </div>
                  <div className="px-5 pt-5">
                    <div className="flex items-center gap-x-5">
                      <div className="w-10 h-10 rounded-full bg-red-100"></div>
                      <p className="font-bold">Delivery Address</p>
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
      </div>
    </div>
  );
};

export default ViewOrder;
