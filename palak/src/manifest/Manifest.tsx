import NavbarFranchise from "../components/NavbarFranchise";
import ShimmerLine from "../components/ShimmerLine";

const Manifest = () => {
  return (
    <div>
      <NavbarFranchise />
      <div className="flex h-screen">
        <div className="flex flex-col bg-gray-50 min-h-max w-full pl-24 pt-4 pb-8 pr-3 animate-pulse">
          <ShimmerLine className="h-7 w-1/3 my-4 ml-6" />

          <div className="w-11/12 bg-white md:w-full border-2 border-gray-100 max-h-max mt-4">
            <div className="px-7 py-4">
              <ShimmerLine className="mt-1 h-6 w-1/3" />
              <ShimmerLine className="mt-1 h-6 w-1/3" />
            </div>

            <div className="p-8 grid w-2/3 grid-cols-3 gap-y-4 gap-x-15">
              <ShimmerLine className="w-52 h-16" />
              <ShimmerLine className="w-52 h-16" />
              <ShimmerLine className="w-52 h-16" />
              <ShimmerLine className="w-52 h-16" />
              <ShimmerLine className="w-52 h-16" />
              <ShimmerLine className="w-52 h-16" />
            </div>
          </div>
          <div className="bg-white w-full mt-3 px-7 py-5">
            <ShimmerLine className="h-6 w-full" />
            <ShimmerLine className="h-12 w-full mt-2" />
            <ShimmerLine className="h-12 w-full mt-2" />
            <ShimmerLine className="h-12 w-full mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifest;
