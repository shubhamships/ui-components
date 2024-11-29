import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image) => (
          <img src={image} className="w-full h-72 md:h-96 object-cover flex-shrink-0" />
        ))}
      </div>

      <button onClick={prevSlide} className="absolute top-1/2 left-3 text-white text-5xl">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-5 text-white  text-5xl ">
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400 opacity-75"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
