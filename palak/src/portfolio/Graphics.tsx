import Footer from "../components/Footer";
import gif5 from "../assets/gif5.gif";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/gif4.gif";
import gif6 from "../assets/gif6.gif";
import gallery3 from "../assets/gallery3.png";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import CardA from "../components/CardA";
const Graphics = () => {
  const imgArray = [gif1, gif2, gif3, gif4, gif5];
  const gifArray = [
    { image: gif5, link: "/project1" },
    { image: gallery3, link: "#" },
    { image: gif6, link: "#" },
  ];
  const carouselImages = [gif1, gif3];
  return (
    <div>
      <div className="px-6 md:px-40">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-600 pt-10 uppercase">motion graphics</h1>
        <p className="text-xs mt-5">
          Creativity is forever work in progress. These are animations of my 2d illustrations frame by frame in gif
          format.
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-5 w-full">
          {imgArray &&
            imgArray.map((img) => {
              return (
                <img src={img} alt="" className="h-72 cursor-pointer md:h-96 w-full object-cover rounded-md mt-12" />
              );
            })}
          <div className="mt-12">
            <Carousel images={carouselImages} />
          </div>
        </div>
        <h1 className="text-xl font-semibold text-gray-600 pt-20 md:pt-28 border-b-2 border-purple-900">
          OTHER PROJECTS
        </h1>
        <div className="grid grid-cols-3 gap-3 mt-10 cursor-pointer md:pb-32">
          {gifArray &&
            gifArray.map(({ image, link }) => {
              return (
                <Link to={link}>
                  <CardA image={image} className="md:h-72 mt-10 h-48" />
                </Link>
              );
            })}
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Graphics;
