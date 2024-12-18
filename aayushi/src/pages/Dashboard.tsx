import { Card } from "@/components/Card";
import { Card2 } from "@/components/Card2";
import { Gift, Boxes, FileBox, Mailbox, Codesandbox } from "lucide-react";

export const Dashboard = () => {
  return (
    <div>
      <div className="h-14 bg-white"></div>
      <hr />
      <div className="flex h-full">
        <div className="w-20 h-full bg-white"></div>
        <div className="flex-1 p-6 bg-gray-50">
          <div className="m-2 bg-blue-100 w-full h-20 rounded-md border border-blue-300"></div>
          <div className="text-2xl font-semibold">Dashboard</div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6 bg-white mb-2">
            <Card
              gradient="bg-gradient-to-b from-orange-100 to-white"
              borderColor="border-orange-100"
              bg="bg-orange-400"
              icon={<Boxes />}
              text="All Orders"
              number={"00"}
            />
            <Card
              gradient="bg-gradient-to-b from-blue-100 to-white"
              borderColor="border-blue-100"
              bg="bg-blue-400"
              icon={<Codesandbox />}
              text="Drafted Orders"
              number={"00"}
            />
            <Card
              gradient="bg-gradient-to-b from-green-100 to-white"
              borderColor="border-green-100"
              bg="bg-green-400"
              icon={<FileBox />}
              text="Pending for Label"
              number={"00"}
            />
            <Card
              gradient="bg-gradient-to-b from-red-100 to-white"
              borderColor="border-red-100"
              bg="bg-red-400"
              icon={<Gift />}
              text="Packed Orders"
              number={"00"}
            />
            <Card
              gradient="bg-gradient-to-b from-purple-100 to-white"
              borderColor="border-purple-100"
              bg="bg-purple-400"
              icon={<Mailbox />}
              text="Dispatched Orders"
              number={"00"}
            />
          </div>
          <div className="flex space-x-2">
            <div className="grid grid-cols-2 w-3/4 bg-white">
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
            </div>
            <div className="flex flex-col bg-white w-1/4">
              <div>Actions required</div>
              <div>Wallet Activity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
