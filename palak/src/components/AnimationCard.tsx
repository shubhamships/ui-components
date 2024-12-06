import { FaRegCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";

interface AnimationCardProps {
  title: string;
  description: string;
  className?: string;
}

const AnimationCard = ({ title, description, className }: AnimationCardProps) => {
  return (
    <motion.div
      className={`h-72 bg-gray-50 p-10 rounded-2xl cursor-pointer mx-auto my-auto ${className}`}
      initial={{ width: "200px", opacity: 1, scale: 0.8 }}
      animate={{ scale: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ ease: "easeInOut" }}
      whileHover={{
        width: "350px",
        transition: { ease: "easeOut" },
      }}
    >
      <FaRegCreditCard className="h-10 w-10" />
      <p className="font-bold text-2xl mt-3">{title}</p>

      <motion.p
        className="text-md mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ ease: "easeOut" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default AnimationCard;
