import { useState } from "react";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "src/assets/img1.jpg" },
    { src: "src/assets/img2.jpg" },
    { src: "src/assets/img3.jpg" },
    { src: "src/assets/img4.jpg" },
    { src: "src/assets/img5.jpg" },
    { src: "src/assets/img6.jpg" },
  ];

  const plusSlides = (n: number) => {
    const nextIndex = (currentIndex + n + images.length) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center backdrop-blur-2xl mb-6"
      style={{ backgroundImage: `url(${images[currentIndex].src})` }}
    >
      <div className="pl-96 w-2/3 h-full flex justify-center items-center">
        <img src={images[currentIndex].src} className="w-full h-full object-cover" alt={`Slide ${currentIndex + 1}`} />
      </div>

      <a
        className="prev absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </a>

      <a
        className="next absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </a>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((image, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot rounded-full h-10 w-10 cursor-pointer transition-all relative overflow-hidden ${
              currentIndex === index ? "bg-white" : "bg-gray-400 opacity-60"
            }`}
          >
            <img
              src={image.src}
              alt={`Dot ${index + 1}`}
              className={`absolute inset-0 object-cover w-full h-full rounded-full`}
            />
          </span>
        ))}
      </div>
    </div>
  );
};
