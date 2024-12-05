import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video from "../assets/ios.mp4";
const Scale = () => {
  const [scale, setScale] = useState(1);
  const [borderRadius, setBorderRadius] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const maxScale = 1;
    const minScale = 0.9;

    const newScale = Math.max(minScale, maxScale - scrollPosition / 2500);

    const newBorderRadius = Math.min(200, scrollPosition / 20);

    setScale(newScale);
    setBorderRadius(newBorderRadius);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-56">
      <motion.video
        className="w-full max-h-screen mb-48 object-cover"
        controls
        style={{
          borderRadius: `${borderRadius}px`,
        }}
        animate={{
          scale: scale,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 1.5,
        }}
      >
        <source src={video} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default Scale;
