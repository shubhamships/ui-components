import { FaRegCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";
interface ApppleCardProps {
  title: string;
  description: string;
}
const AppleCard = ({ title, description }: ApppleCardProps) => {
  return (
    <motion.div
      className="w-96 h-72 bg-gray-50 p-10 rounded-2xl cursor-pointer 
      mx-auto
      my-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      animate={{ y: -20 }}
      whileHover={{ scale: 1.05 }}
    >
      <FaRegCreditCard className="h-10 w-10" />
      <p className="font-bold text-2xl mt-3">{title}</p>
      <p className="text-md mt-3">{description}</p>
    </motion.div>
  );
};
export default AppleCard;
