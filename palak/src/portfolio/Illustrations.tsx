import Footer from "../components/Footer";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gif5 from "../assets/gif5.gif";
import gif6 from "../assets/gif6.gif";
import Carousel from "../components/Carousel";
import OtherProjects from "./OtherProjects.tsx";
const Illustrations = () => {
  const imgArray = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];
  const gifArray = [
    { image: gif5, link: "/project1" },
    { image: gallery3, link: "#" },
    { image: gif6, link: "#" },
  ];
  const carouselImages = [gallery1, gallery3];
  return (
    <div>
      <div className="px-6 md:px-40">
        <h1 className="md:text-5xl text-3xl font-extrabold text-gray-600 pt-10 uppercase">Illustration Gallary</h1>
        <p className="text-xs mt-5">
          Creativity is a constant progress and evolution. This is a catalogue of my illustrations.
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
        <OtherProjects array={gifArray} />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Illustrations;
