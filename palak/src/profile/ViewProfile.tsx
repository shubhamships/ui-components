import ShimmerCircle from "../components/ShimmerCircle";
import NavbarFranchise from "../components/NavbarFranchise";
import ShimmerLine from "../components/ShimmerLine";
import { motion } from "framer-motion";

const ViewProfile = () => {
  return (
    <div>
      <NavbarFranchise />
      <div className="flex flex-col md:flex-row">
        <div className="flex h-screen w-full">
          <motion.div
            className="flex flex-col bg-gray-50 min-h-max w-full p-4 md:pl-24 md:pr-8 md:pt-4"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity }}
          >
            <div className="text-2xl font-medium">Profile</div>
            <div className="mt-4 bg-white max-h-max rounded-lg p-5 w-full">
              <div className="border border-gray-100 rounded-lg p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <ShimmerCircle className="w-10 ml-2 h-10 mr-4" />
                    <div className="flex flex-col gap-2">
                      <ShimmerLine className="w-28 h-6" />
                      <ShimmerLine className="w-48 h-6" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <ShimmerLine className="w-28 h-6" />
                    <ShimmerLine className="w-48 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <ShimmerLine className="w-28 h-6" />
                    <ShimmerLine className="w-48 h-6" />
                  </div>
                </div>
              </div>

              <div className="mt-4 border border-gray-100 rounded-lg px-6 py-5">
                <div className="flex items-center">
                  <ShimmerCircle className="w-10 h-10 ml-2" />
                  <ShimmerLine className="w-48 h-6 ml-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
                  <div className="flex flex-col gap-2">
                    <ShimmerLine className="w-28 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <ShimmerLine className="w-28 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <ShimmerLine className="w-28 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <ShimmerLine className="w-28 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                    <ShimmerLine className="w-40 h-6" />
                  </div>
                </div>
              </div>

              <div className="mt-4 border border-gray-100 rounded-lg p-7">
                <div className="flex items-center">
                  <ShimmerCircle className="w-10 h-10 ml-2" />
                  <ShimmerLine className="w-48 h-6 ml-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
                  <div className="flex flex-col gap-3">
                    <ShimmerLine className="w-full h-6" />
                    <ShimmerLine className="w-full h-6" />
                    <ShimmerLine className="w-full h-6" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <ShimmerLine className="w-full h-6" />
                    <ShimmerLine className="w-full h-6" />
                    <ShimmerLine className="w-full h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
