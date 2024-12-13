import Sidebar from "../components/Sidebar";
import NavbarFranchise from "../components/NavbarFranchise";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import ShimmerLine from "../components/ShimmerLine";

const ViewPickup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<any>([]);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setIsLoading(true);
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
        setDetails(data);
      } catch (error: any) {
        console.log("error");
        console.error(error.message);
      } finally {
        setIsLoading(true);
      }
    };

    fetchOrderDetails();
  }, []);
  return (
    <div>
      <NavbarFranchise />
      <Sidebar />
      <div className="flex h-screen">
        {isLoading ? (
          <motion.div
            className="flex flex-col bg-gray-50 min-h-max w-full pl-24 pt-4 pb-8"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity }}
          >
            <ShimmerLine className="h-7 w-80" />
            <ShimmerLine className="h-7 w-80 mt-1" />

            <div className="w-11/12 bg-white md:w-full border-2 rounded-xl border-gray-100 max-h-max mt-4">
              <div className="px-5 py-4">
                <ShimmerLine className="mt-1 h-16 w-full " />
              </div>

              <div className="bg-white max-h-max rounded-t-none rounded-xl py-4 px-7">
                <ShimmerLine className="w-72 h-10" />
                <ShimmerLine className="w-72 h-10 mt-6" />
              </div>
            </div>
            <div className="bg-white w-full mt-3 p-3 rounded-lg">
              <ShimmerLine className="mt-1 h-16 w-full mb-2" />
              <ShimmerLine className="mt-1 h-16 w-full " />
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ViewPickup;
