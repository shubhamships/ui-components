import { useEffect, useState } from "react";

import NavbarFranchise from "../components/NavbarFranchise";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CustomerDetails from "./CustomerDetails";
import OrderDetails from "./OrderDetails";
import BillingDetails from "./BillingDetails";
import Summary from "./Summary";
import Activity from "./Activity";

const ViewOrder = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState<any>([]);
  const [orderDetails, setOrderDetails] = useState(null);

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
      <NavbarFranchise />
      <Sidebar />
      <div className="flex h-screen">
        <div className="flex flex-col gap-4 bg-gray-50 min-h-max w-full pl-24 pt-5 pb-10">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
            <div className="w-11/12">
              <CustomerDetails isLoading={isLoading} isData={isData} orderDetails={orderDetails} />
              <OrderDetails isLoading={isLoading} />
              <BillingDetails isLoading={isLoading} />
            </div>
            <div className="w-11/12 mt-5">
              <Summary isLoading={isLoading} />
              <Activity isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
