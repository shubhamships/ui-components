import { useState, useEffect } from "react";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "src/assets/1.png" },
    { src: "src/assets/2.jpg" },
    { src: "src/assets/3.jpg" },
    { src: "src/assets/4.jpg" },
    { src: "src/assets/5.jpg" },
    { src: "src/assets/6.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative text-center rounded-l-md backdrop-blur-lg bg-indigo-800/80 h-full">
    <div className="carousel-container relative w-full">
      <div className="w-full h-96 p-4"> 
        <img
          src={images[currentIndex].src}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-56 h-56 object-cover rounded-lg"
        />
      </div>
    </div>
  
    <div className="justify-center mt-4 hidden">
      {images.map((_, index) => (
        <span
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`dot rounded-full h-2 w-2 mx-2 cursor-pointer transition-all ${
            index === currentIndex ? "bg-white" : "bg-gray-500"
          }`}
        ></span>
      ))}
    </div>
  </div>
  
  );
};
