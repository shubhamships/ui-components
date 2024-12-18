import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [circlesVisible, setCirclesVisible] = useState(true);
  const [circle2Visible, setCircle2Visible] = useState(false);
  const [circle3Visible, setCircle3Visible] = useState(false);
  const [circle4Visible, setCircle4Visible] = useState(false);
  const fullText = "Welcome";

  useEffect(() => {
    if (index < fullText.length) {
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [index]);

  useEffect(() => {
    const timers:any = [];

    timers.push(setTimeout(() => setCirclesVisible(true), 100));
    timers.push(setTimeout(() => setCirclesVisible(false), 5000));

    timers.push(setTimeout(() => setCircle2Visible(true), 3000));
    timers.push(setTimeout(() => setCircle2Visible(false), 9000));

    timers.push(setTimeout(() => setCircle3Visible(true), 5000));

    timers.push(setTimeout(() => setCircle4Visible(true), 7000));

    return () => timers.forEach((timer:any) => clearTimeout(timer));
  }, []);

  const circleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0, transition: { duration: 1, ease: "easeIn" } },
  };

  return (
    <div className="h-screen w-full relative flex justify-center items-center overflow-hidden">
      <motion.div
        className="relative z-10 text-center text-white p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.p className="text-5xl font-bold">{displayedText}</motion.p>
      </motion.div>

      <motion.div className="absolute inset-0" initial="initial" animate="animate" exit="exit">
        {circlesVisible && (
          <motion.div
            className="absolute rounded-full bg-purple-200 filter blur-2xl"
            style={{ width: "220px", height: "150px", top: "40%", left: "50%" }}
            variants={circleVariants}
            key="circle1"
          />
        )}

        {circlesVisible && (
          <motion.div
            className="absolute rounded-full bg-orange-200 filter blur-2xl"
            style={{ width: "180px", height: "180px", top: "40%", left: "40%" }}
            variants={circleVariants}
            key="circle2"
          />
        )}

        {circlesVisible && (
          <motion.div
            className="absolute rounded-full bg-yellow-300 filter blur-2xl"
            style={{ width: "220px", height: "220px", top: "40%", left: "30%" }}
            variants={circleVariants}
            key="circle3"
          />
        )}

        {circlesVisible && (
          <motion.div
            className="absolute rounded-full bg-blue-300 filter blur-2xl"
            style={{ width: "250px", height: "250px", top: "30%", left: "40%" }}
            variants={circleVariants}
            key="circle4"
          />
        )}

        {circle2Visible && (
          <motion.div
            className="absolute rounded-full bg-yellow-300 filter blur-2xl"
            style={{ width: "210px", height: "200px", top: "25%", left: "40%" }}
            variants={circleVariants}
            key="circle5"
          />
        )}

        {circle2Visible && (
          <motion.div
            className="absolute rounded-full bg-purple-300 filter blur-2xl"
            style={{ width: "210px", height: "200px", top: "45%", left: "30%" }}
            variants={circleVariants}
            key="circle6"
          />
        )}

        {circle3Visible && (
          <motion.div
            className="absolute rounded-full bg-blue-300 filter blur-2xl"
            style={{ width: "210px", height: "200px", top: "30%", left: "50%" }}
            variants={circleVariants}
            key="circle7"
          />
        )}

        {circle3Visible && (
          <motion.div
            className="absolute rounded-full bg-purple-300 filter blur-2xl"
            style={{ width: "210px", height: "200px", top: "40%", left: "30%" }}
            variants={circleVariants}
            key="circle8"
          />
        )}

        {circle4Visible && (
          <motion.div
            className="absolute rounded-full bg-blue-300 filter blur-2xl"
            style={{ width: "210px", height: "200px", top: "25%", left: "30%" }}
            variants={circleVariants}
            key="circle9"
          />
        )}

        {circle4Visible && (
          <motion.div
            className="absolute rounded-full bg-purple-300 filter blur-2xl"
            style={{ width: "210px", height: "200px", top: "35%", left: "40%" }}
            variants={circleVariants}
            key="circle10"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Welcome;
