import { motion } from "framer-motion";

export const Orders = () => {
  const transitionSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className="relative h-screen bg-gray-100 text-black m-2">
      <div>
        <h2 className="text-3xl font-semibold">Create CSB-IV Order</h2>
        <p className="text-gray-400">Orders &gt; Create CSB-IV Order</p>
      </div>

      <div className="flex mt-6">
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
          
          <motion.div
            className="step border border-gray-400 mb-2 "
            initial={transitionSettings.initial}
            animate={transitionSettings.animate}
            exit={transitionSettings.exit}
            transition={{
              ...transitionSettings.transition,
              delay: 0,
            }}
          >
            <div className="relative m-2 p-4"><p>
            Consignor Details</p>
            <button className="bg-indigo-800 m-2 py-2 px-4 text-white rounded-sm flex justify-end items-end absolute bottom-0 right-4">Continue</button>
            </div>
            
          </motion.div>

        
          <motion.div
            className="step border border-gray-400 mb-2 "
            initial={transitionSettings.initial}
            animate={transitionSettings.animate}
            exit={transitionSettings.exit}
            transition={{
              ...transitionSettings.transition,
              delay: 0.5, 
            }}
          >
            <div className="m-2 p-4">consignee Details</div>
           
          </motion.div>

         
          <motion.div
            className="step border border-gray-400 mb-2 "
            initial={transitionSettings.initial}
            animate={transitionSettings.animate}
            exit={transitionSettings.exit}
            transition={{
              ...transitionSettings.transition,
              delay: 1,
            }}
          >
            <div className="m-2 p-4">Shipment Information</div>
            
          </motion.div>
          <motion.div
            className="step border border-gray-400 mb-2 "
            initial={transitionSettings.initial}
            animate={transitionSettings.animate}
            exit={transitionSettings.exit}
            transition={{
              ...transitionSettings.transition,
              delay: 1.5, 
            }}
          >
            <div className="m-2 p-4">Select Shipping Partner</div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
