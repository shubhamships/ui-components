import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "src/assets/1.png", caption: "Caption One" },
    { src: "src/assets/2.jpg", caption: "Caption Two" },
    { src: "src/assets/3.jpg", caption: "Caption Three" },
    { src: "src/assets/4.jpg", caption: "Caption Four" },
    { src: "src/assets/5.jpg", caption: "Caption Five" },
    { src: "src/assets/6.jpg", caption: "Caption Six" },
  ];

  // Function to navigate through the images
  const plusSlides = (n: number) => {
    const nextIndex = (currentIndex + n + images.length) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
      {/* Carousel Column */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="carousel-container w-full">
          <img
            src={images[currentIndex].src}
            className="w-full h-full object-cover transition-opacity duration-1000 opacity-90 hover:opacity-100"
            alt={images[currentIndex].caption}
          />
          
        </div>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <span
              onClick={() => setCurrentIndex(index)}
              className={`dot rounded-full h-2 w-2 mx-2 cursor-pointer transition-all relative overflow-hidden`}
              key={index}
            >
              {currentIndex !== index && <div className="absolute inset-0 bg-black opacity-60"></div>}
            </span>
          ))}
        </div>

        {/* Slide Indicator */}
      </div>

      {/* Second Column (Login Content) */}
      <div>
    
      <div className="p-6">
  <div className="text-center mb-4">
    <h2 className="font-semibold text-xl">Login</h2>
  </div>
  <form>
    {/* Email Field */}
    <div className="mb-4">
      <label className="block text-sm font-medium">Email</label>
      <input
        type="email"
        placeholder="Enter Email ID..."
       
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>

    {/* Password Field */}
    <div className="mb-4">
      <label className="block text-sm font-medium">Password</label>
      <div className="relative">
        <input
          placeholder="Enter password"
          className="w-full p-2 border border-gray-300 rounded-md pr-10"
        />
        <span
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
        >
        </span>
      </div>
    </div>

    {/* Forgot Password Link */}
    <div className="mb-4">
      <span
        className="text-sm text-blue-600 cursor-pointer"
      >
        Forgot Password?
      </span>
    </div>

    {/* Error Message */}
      <p className="text-red-500 text-xs font-medium my-4">Wrong email or password. Try again</p>
    

    {/* Submit Button */}
    <div className="flex justify-center">
    <button
        className="text-sm font-medium h-11 rounded-md w-full focus-visible:outline-none focus-visible:ring-2  max-w-sm mt-10 text-white bg-blue-800"
      >
       Submit
          <span>
            <i className="fa-solid fa-spinner animate-spin ml-2"/>
          </span>
        
      </button>
    </div>
  </form>
</div>

      
      
    </div>
    </div>
  );
};
