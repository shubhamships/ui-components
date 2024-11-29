import { Navbar } from "../components/Navbar";
import Allura from "../assets/Allura.png"
import { Link } from "react-router-dom";
import {PathLink} from '../components/PathLink';

const brandArray = [
    { text: "Brand Overview", link: "/brand-overview" },
    { text: "Project Overview", link: "/project-overview" },
    { text: "Style Guide", link: "/style-guide" },
    { text: "Brand Mockup", link: "/brand-mockup" },
    { text: "UX Research", link: "/ux-research" },
    { text: "UI Designs", link: "/ui-designs" },
    { text: "Allura Demo Video", link: "/allura-demo-video" },
  ];

export const Project2 = () => {
  return (
    <div>
      <Navbar />
     
      <div className="px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 md:gap-2">
          <div className="grid grid-cols-1 md:w-96 md:justify-between">
            <h1 className="text-3xl font-extrabold md:pt-20 md:text-5xl text-gray-600">
              ALLURA <br />
              <span className="text-gray-600">CASE STUDY</span>
            </h1>
            <p className="text-xs leading-5 mt-5">
            Allura was a project that was inspired by my favorite corner café that I used to visit. The clientele at the café ranged from retirees to young students. It was a community café that welcomed everyone and one of those little spots where everyone says greets each other with a smile. It was located at a historic building and the atmosphere inside had many different stories. With this project, I wanted to combine classic style with modern excitement.
            </p>
          </div>

          <img src={Allura} className="mt-5 rounded-md" />
        </div>
        <p className="uppercase font-semibold text-xl mt-16 border-l-4 border-orange-200 p-6 text-gray-800">
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
        
      </div>
      
    
    
    </div>
  );
};
