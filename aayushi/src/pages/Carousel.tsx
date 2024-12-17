import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Carousel = () => {
  const [showText, setShowText] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "The art of delivery, Perfected.",
    "Your goods, our responsibility, every step of the way.",
    "Where every package tells a story of speed and care.",
    "Moving goods, building trust.",
    "Uniting the globe through every shipment and every mile.",
    "Your partner in air logistics, your key to global trade."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowText(false);
    const timer = setTimeout(() => {
      setShowText(true); 
    }, 1500);

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <div className="relative rounded-l-md bg-blue-900 h-full">
      <div className="carousel-container w-full">
        <div className="w-full py-auto flex items-center justify-center flex-col relative">
         
          <motion.img
            src="src/assets/img.gif" 
            alt="GIF Animation"
            className="w-72 h-full object-cover rounded-md mt-4"
            animate={{
              scale: [1, 1, 1], 
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
          <p
           className={`z-10 italic w-64 text-center text-white font-bold absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          >
            {texts[textIndex]}
          </p>
        </div>
      </div>

      <div className="justify-center mt-4 hidden">
        {texts.map((_, index) => (
          <span
            key={index}
            onClick={() => setTextIndex(index)}
            className={`dot rounded-full h-2 w-2 mx-2 cursor-pointer transition-all ${
              index === textIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};
