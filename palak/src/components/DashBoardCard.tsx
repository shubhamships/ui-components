import { motion } from "framer-motion";
interface DashBoardProps {
  className: string;
  content: string;
  number: string;
}
const DashBoardCard = ({ className, content, number }: DashBoardProps) => {
  const insideContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 2 } },
  };
  const insideContentVariants2 = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 2.5 } },
  };
  const insideContentVariants3 = {
    hidden: { opacity: 0, y: -50, x: 40 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay: 2.5 } },
  };
  return (
    <motion.div
      className={`w-56 h-44 rounded-md flex flex-col items-center justify-center cursor-pointer ${className}`}
      variants={insideContentVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
    >
      <motion.p className="text-lg" variants={insideContentVariants2} initial="hidden" animate="visible">
        {content}
      </motion.p>
      <motion.p
        className="font-semibold p-4 text-xl"
        variants={insideContentVariants3}
        initial="hidden"
        animate="visible"
      >
        {number}
      </motion.p>
      <motion.p variants={insideContentVariants2} initial="hidden" animate="visible">
        View
      </motion.p>
    </motion.div>
  );
};

export default DashBoardCard;
