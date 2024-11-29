import imgHand from "../assets/hand.gif";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

export const Intro = () => {
  return (
    <div className="">
      <div className="flex flex-row space-x-8 ml-64 p-12 items-center mt-6 text-xl">
        <img src={imgHand} alt="image" className="h-36 opacity-80 animate-slide-from-top" />
        <div className="opacity-80">
          <strong className="text-purple-950 animate-slide-from-top font-black">HELLO!</strong>
          <div className="animate-slide-from-left">I AM ENKHMAA.</div>
          <strong className="text-purple-950 animate-slide-from-right font-black">INTERACTION DESIGNER</strong>
          <div className="animate-slide-from-left">INSPIRED BY FUNCTIONAL DESIGNS THAT</div>
          <strong className="text-pink-900 animate-slide-from-right font-black">HIGHLIGHT HUMAN EXPERIENCE.</strong>
        </div>
      </div>
      <div className="underline decoration-1 flex flex-row space-x-60  font-semibold justify-center mt-16">
        <Link
          to="#"
          className="flex items-center space-x-0 
          "
        >
          <span>View Case Studies</span>
          <ArrowDown />
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-0 text-red-600 text-xl opacity-45 hover:text-red-600 hover:opacity-100"
        >
          <span>View Gallery</span>
          <ArrowDown />
        </Link>{" "}
      </div>
    </div>
  );
};
