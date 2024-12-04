import kyc from "@/assets/kyc.png";
import BarsDataset from "@/components/charts/BarsDataset";
import BasicPie from "@/components/charts/BasicPie";
import SparkLine from "@/components/charts/SparkLine";
import { Gauge } from "@mui/x-charts/Gauge";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-[70%_30%] relative">
        <div className="mx-6 mt-6 p-8 h-52 rounded-lg bg-white relative shadow-lg">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <h1 className="font-normal text-gray-500 mt-10">Overview</h1>
          <div className="w-full gap-x-3 grid grid-cols-3 absolute mt-6 pr-16">
            <div className="relative group">
              <div className="h-32 bg-white border border-gray-300 rounded-md flex justify-center items-end cursor-pointer">
                <span>View</span>
              </div>
              <div className="h-32 border bg-white shadow-lg border-gray-300 rounded-md absolute top-0 left-0 w-full group-hover:-translate-y-6 transition-transform duration-200 p-4 ">
                <div className="flex gap-x-8">
                  <img src={kyc} className="size-16" />
                  <h1 className="mt-2 text-4xl font-semibold">0</h1>
                </div>

                <p className="font-normal text-gray-500">KYC Approval Pending</p>
              </div>
            </div>
            <div className="relative group">
              <div className="h-32 bg-white border border-gray-300 rounded-md flex justify-center items-end cursor-pointer">
                <span>View</span>
              </div>
              <div className="h-32 border bg-white shadow-lg border-gray-300 rounded-md absolute top-0 left-0 w-full group-hover:-translate-y-6 transition-transform duration-200 p-4">
                <div className="flex gap-x-4">
                  <div>
                    <Gauge
                      width={70}
                      height={70}
                      value={75}
                      startAngle={0}
                      endAngle={360}
                      innerRadius="80%"
                      outerRadius="100%"
                      className="-mt-2"
                    />
                  </div>
                  <h1 className="mt-2 text-4xl font-semibold">0</h1>
                </div>
                <p className="font-normal text-gray-500 relative">Disputed Orders</p>
              </div>
            </div>
            <div className="relative group">
              <div className="h-32 bg-white border border-gray-300 rounded-md flex justify-center items-end cursor-pointer">
                <span>View</span>
              </div>
              <div className="h-32 border bg-white shadow-lg border-gray-300 rounded-md absolute top-0 left-0 w-full group-hover:-translate-y-6 transition-transform duration-200"></div>
            </div>
          </div>
        </div>
        <div className="mx-6 mt-6 p-8 h-auto rounded-lg bg-white"></div>
      </div>
      <div className="grid grid-cols-[70%_30%]">
        <div className="grid grid-cols-[60%_40%]">
          <div className="ml-6 mr-4 mt-24 p-6 h-auto rounded-lg bg-gradient-to-b from-blue-200 to-blue-50 shadow-lg">
            <p className="text-gray-500 mb-4">Total Sale By Month</p>
            <BarsDataset />
          </div>
          <div className="mr-2 mt-24 p-6 h-auto rounded-lg bg-white shadow-lg">
            <div className="w-full justify-between flex font-semibold text-lg text-gray-500">
              <span className="ml-14">Total</span>
              <span className="mr-14">Profit</span>
            </div>

            <div className="border-gray-100 flex gap-x-3">
              <div className="bg-gradient-to-b from-green-200 to-green-50 flex w-44 rounded-lg p-2 shadow-lg mt-6">
                <p className="mt-7">
                  Orders
                  <h1 className="font-semibold">$8000</h1>
                </p>
                <SparkLine type="line" />
              </div>
              <div className="bg-green-100 flex w-44 rounded-lg p-2 shadow-lg mt-6">
                <p className="mt-7">
                  Values
                  <h1 className="font-semibold">$90000</h1>
                </p>
                <SparkLine type="" />
              </div>
            </div>
            <div className="border-gray-100 flex gap-x-3">
              <div className="bg-gradient-to-b from-green-200 to-green-50 flex w-44 rounded-lg p-2 shadow-lg mt-6">
                <p className="mt-7">
                  Orders
                  <h1 className="font-semibold">$8000</h1>
                </p>
                <SparkLine type="line" />
              </div>
              <div className="bg-green-100 flex w-44 rounded-lg p-2 shadow-lg mt-6">
                <p className="mt-7">
                  Values
                  <h1 className="font-semibold">$90000</h1>
                </p>
                <SparkLine type="" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[40%_60%] mx-6 mt-8 h-auto rounded-lg bg-white relative">
          <div className="h-auto rounded-lg grid grid-cols-[65%_35%]">
            <div className="h-auto rounded-lg overflow-hidden ml-5">
              <BasicPie />
            </div>
          </div>
          <div className="p-8 h-auto rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
