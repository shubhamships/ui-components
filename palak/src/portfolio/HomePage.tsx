import { useState, useEffect } from "react";
import Card from "../components/Card";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/gif4.gif";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="px-6 md:px-40">
        <h1 className="text-3xl font-extrabold text-gray-600 pt-10 border-b-2 border-purple-900">GALLERY</h1>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
          <Link to="/illustrations">
            <Card
              className="bg-customPurple"
              heading="ILLUSTRATIONS"
              subtitle="Creativity is a constant evolution of progress."
              imgArray={[gallery1, gallery2, gallery3, gallery4]}
            />
          </Link>
          <Link to="/graphics">
            <Card
              className="bg-customBlue"
              heading="MOTION GRAPHICS"
              subtitle="Creativity is forever work in progress."
              imgArray={[gif1, gif2, gif3, gif4]}
            />
          </Link>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 bg-purple-200/60 text-white rounded-md py-2 px-4 shadow-md hover:bg-purple-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default HomePage;
// return () => window.removeEventListener("scroll", handleScroll);
