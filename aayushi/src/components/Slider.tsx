import { Navbar } from "./Navbar";
import { Mail, CircleArrowRight } from "lucide-react";
import imgSrc from "../assets/img.png";

export const Slider = () => {
  return (
    <>
      <div className="bg-amber-900 h-65 md:h-80 lg:h-96 px-28 overflow-hidden">
        <Navbar />
        <div>
          <div className="flex flex-row space-x-10 p-2 md:p-4 lg-p-8">
            <div className="text-white font-semibold text-md md:p-6">
              <p className="hidden sm:block text-4xl mb-sm space-bottom-xs-sm leading-tight">
                Get your book reviewed by a professional reviewer
              </p>

              <p className="text-lg font-normal mb-4 mt-2 leading-tight">Submit your book to Reedsy Discovery for $50.</p>
              <div className="grid grid-cols-2 md:grid md:grid-cols-3 ">
                <button className="text-xs lg:text-sm md:text-md bg-white text-black py-1 border-2 border-white rounded  inline-flex items-center sm:pl-4 md:pl-8 object-cover">
                  Sign in with Google
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-color-icon.png"
                    className="w-4 h-4 ml-0.5 mr-2 sm:mr-4 md:mr-6"
                  />
                </button>

                <button className="text-xs lg:text-sm border-2 bg-amber-400 border-amber-400 rounded px-1 py-1/2 mx-1 inline-flex items-center justify-center sm:mx-3 md:mx-5 lg:px-2 lg:py-1">
                  Sign up <Mail className="ml-2" />
                </button>

                <button className="hidden w-2/3 text-xs lg:text-sm md:inline-flex md:border-2 border-white rounded px-2 py-1 mx-2">
                  Learn More <CircleArrowRight className="ml-2" />
                </button>
              </div>
            </div>

            <img src={imgSrc} className="h-48 pl-20 pr-20 lg:block hidden lg:pr-5 lg:pl-5" />
          </div>
        </div>
      </div>
      <div className="bg-pink/20 h-64  md:h-80 lg:h-80 p-2 overflow-hidden"></div>
    </>
  );
};
