import { motion } from "framer-motion";
import { Button } from "./Button";

interface CardProps {
  image: string;
  title: string;
  buttonProps: {
    label: string;
    bgColor: string;
    textColor: string;
    hoverColor: string;
    transitions: string;
    animations?:string;
  };
}

export const Card = ({ image, title, buttonProps }: CardProps) => {
  return (
    <motion.div
      className="group relative w-44 h-64 rounded-lg shadow-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110">
        <img src={image} className="object-cover h-full w-full" alt={title} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="text-center z-10 flex flex-col">
         
          <span className="text-white text-lg mt-2">{title}</span>

          <Button {...buttonProps} />
        </div>
      </div>
    </motion.div>
  );
};
