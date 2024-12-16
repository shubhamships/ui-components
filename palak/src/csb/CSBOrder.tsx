import NavbarFranchise from "../components/NavbarFranchise";
import ShimmerLine from "../components/ShimmerLine";
const CSBOrder = () => {
  return (
    <div>
      {" "}
      <NavbarFranchise />
      <div className="flex h-screen">
        <div className="flex flex-col bg-gray-50 min-h-max w-full pl-24 pt-4 pb-8 pr-3">
          <p className="text-xl font-medium">CSB-V Details</p>
          <div className="w-11/12 bg-white md:w-full rounded-lg max-h-max mt-4 p-2.5 animate-pulse">
            <div className="py-4 px-5 bg-gray-50 rounded-lg">
              <div className="flex w-2/3 justify-between">
                <div className="flex flex-col">
                  <ShimmerLine className="w-32 h-6" />
                  <ShimmerLine className="w-48 h-6 mt-1" />
                  <ShimmerLine className="w-48 h-6 mt-1" />
                </div>
                <div className="flex flex-col">
                  <ShimmerLine className="w-32 h-6" />
                  <ShimmerLine className="w-48 h-6 mt-1" />
                  <ShimmerLine className="w-48 h-6 mt-1" />
                </div>
                <div className="flex flex-col">
                  <ShimmerLine className="w-32 h-6" />
                  <ShimmerLine className="w-48 h-6 mt-1" />
                  <ShimmerLine className="w-48 h-6 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSBOrder;
