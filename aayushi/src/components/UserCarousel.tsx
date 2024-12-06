import { useState } from "react";
import {Link} from "react-router-dom";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "src/assets/user1.png", caption: "Caption One" },
    { src: "src/assets/user2.png", caption: "Caption Two" },
    { src: "src/assets/user3.png", caption: "Caption Three" },
    { src: "src/assets/user4.png", caption: "Caption Four" },
    { src: "src/assets/user5.png", caption: "Caption Five" },
    { src: "src/assets/user6.png", caption: "Caption Six" },
    { src: "src/assets/user7.png", caption: "Caption Seven" },
    { src: "src/assets/user8.png", caption: "Caption Eight" },
    { src: "src/assets/user9.png", caption: "Caption Nine" },
    { src: "src/assets/user10.png", caption: "Caption Ten" },
    { src: "src/assets/user11.png", caption: "Caption Eleven" },
    { src: "src/assets/user12.png", caption: "Caption Twelve" },
    { src: "src/assets/user13.png", caption: "Caption Thirteen" },
  ];

  const plusSlides = (n: number) => {
    const nextIndex = (currentIndex + n + images.length) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative text-center backdrop-blur-lg bg-black/80 h-screen">
      <div className="carousel-container mt-4">
        <img src={images[currentIndex].src} className="w-full h-96 object-contain" />
        <div className="z-50 text-white">{images[currentIndex].caption}</div>
      </div>
      <a
        className="prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </a>
      <Link to="/" className="absolute top-10 right-16 transform -translate-y-1/2 text-white font-bold">X</Link>
      <a
        className="next absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </a>

      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
           <span
           onClick={() => setCurrentIndex(index)}
           className={`dot rounded-md h-20 w-20 mx-2 cursor-pointer transition-all relative overflow-hidden`}
         >
          
           <img
             src={image.src}
             alt={`Dot ${index + 1}`}
             className={`absolute inset-0 object-cover w-full h-full ${
               currentIndex === index ? "" : "filter blur-0"
             }`}
           />
          
           {currentIndex !== index && (
             <div className="absolute inset-0 bg-gray-400 opacity-60"></div>
           )}
         </span>
        ))}
      </div>

      <div className="mt-2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};
