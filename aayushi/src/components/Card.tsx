import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  number: number;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

export const Card = ({ icon, title, number, gradientFrom, gradientTo }: CardProps) => {
  return (
    <motion.div
      className={`group relative p-6 bg-gradient-to-b ${gradientFrom} ${gradientTo} rounded-lg shadow-xl flex flex-col items-center text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:translate-y-2`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center space-x-3">
        <div className="text-4xl">{icon}</div>
        <span className="text-xl font-semibold">{title}</span>
      </div>

      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 my-4 text-4xl font-bold">
        {number}
      </div>
      <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-4 text-sm">
        View
      </div>
    </motion.div>
  );
};
