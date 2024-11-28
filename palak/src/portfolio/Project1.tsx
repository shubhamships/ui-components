import zura1 from "../assets/zura1.png";
import Footer from "../components/Footer";
import PathLink from "../components/PathLink";
import { Link } from "react-router-dom";
import BrandOverview from "./BrandOverview";
const Project1 = () => {
  const brandArray = [
    { text: "1. Brand Overview", link: "/project1" },
    { text: "2. Project Overview", link: "#" },
    { text: "3. Brand Mockup", link: "#" },
    { text: "4. UX Research", link: "" },
    { text: "5. UI Designs", link: "#" },
    { text: "6. Zura Demo Video", link: "#" },
  ];
  return (
    <div>
      <div className="px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:gap-5">
          <div className="grid grid-cols-1 md:w-96 md:justify-between">
            <h1 className="text-3xl font-extrabold md:pt-28 md:text-5xl text-gray-600">
              ZURA <br />
              <span className="text-gray-600">CASE STUDY</span>
            </h1>
            <p className="text-xs leading-5 mt-5">
              ​Zura was a passion project that represents my love of music. The project was initially inspired by one of
              my foster kitten that I had. He was full of curiosity, energy and spirit, but still so comforting and
              loving. So, I wanted to convey, curiosity, energy but ease, and comfort with this design.
            </p>
          </div>

          <img src={zura1} className="mt-5 rounded-md" />
        </div>
        <p className="uppercase font-semibold text-xl mt-16 border-l-4 border-red-800 p-6 text-gray-800">
          table of Content
        </p>
        {brandArray &&
          brandArray.map(({ text, link }) => {
            return (
              <Link to={link}>
                <PathLink text={text} />
              </Link>
            );
          })}
        <div className="">
          <BrandOverview />
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Project1;
