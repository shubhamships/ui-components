import { motion } from "framer-motion";
import i1 from "../assets/i1.webp";
import i2 from "../assets/i2.webp";
import i3 from "../assets/i3.webp";
interface InteriorProps {
  number: string;
  title: string;
  img: string;
}

const Interior = ({ number, title, img }: InteriorProps) => {
  return (
    <div className="relative w-full max-h-screen">
      <motion.div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-90"
        style={{ backgroundImage: `url(${img})` }}
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <motion.div
        className="relative text-left pl-20 pt-48"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-red-600 text-4xl font-semibold mb-3">{number}</p>
        <p className="text-white text-8xl font-bold mb-3">
          {title}
          <span className="text-red-600">.</span>
        </p>
        <p className="text-white text-xs">Interior Designs for your home.</p>
      </motion.div>
      <motion.p
        className="text-sm text-red-600 relative pl-20 mt-3 font-semibold cursor-pointer"
        initial={{ opacity: 0, x: 600 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        See more ➡
      </motion.p>
      <div className="flex relative gap-5 ml-20 mt-3">
        <motion.img
          src={i1}
          className="object-cover w-28 h-20 rounded-md"
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        />
        <motion.img
          src={i2}
          className="object-cover w-28 h-20 rounded-md"
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={i3}
          className="object-cover w-28 h-20 rounded-md"
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Interior;
