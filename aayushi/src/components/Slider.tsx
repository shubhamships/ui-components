import { Navbar } from "./Navbar";
import { Mail, CircleArrowRight } from "lucide-react";
import imgSrc from "../assets/img.png";

export const Slider = () => {
  return (
    <div className="bg-amber-900 h-80 p-6">
      <Navbar />
      <div>
        <div className="flex flex-row space-x-10 p-6">
          <div className="text-white font-semibold text-md pl-16 pt-8 pb-12 pr-6 sm:pt-2">
            <p className="text-4xl mb-sm space-bottom-xs-sm  xs:hidden">
              Get your book reviewed by a professional reviewer
            </p>

            <p className="text-lg font-normal mb-4 sm:decoration-none">Submit your book to Reedsy Discovery for $50.</p>
            <button className="bg-white text-black pl-20 py-1 border-2 border-white rounded mx-2 inline-flex items-center">
              Sign in with Google
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png"
                className="w-4 h-4 ml-0.5 mr-20"
              />
            </button>
            <button className="text-md border-2 bg-amber-400 border-amber-400 rounded px-2 py-1 mx-2 inline-flex items-center justify-center">
              Sign up <Mail className="ml-2" />
            </button>
            <button className="xs:hidden sm:hidden md:hidden border-2 border-white rounded px-2 py-1 mx-2 inline-flex items-center">
              Learn More <CircleArrowRight className="ml-2" />
            </button>
          </div>

          <img src={imgSrc} className="h-48 pl-20 pr-20 lg:block hidden" />
        </div>
      </div>
    </div>
  );
};
