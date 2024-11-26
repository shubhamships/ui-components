import { Navbar } from "./Navbar";
import imgSrc from "../assets/img.png";
import Button from "./Button";

export const Slider = () => {
  return (
    <>
      <div className="bg-amber-900 h-65 md:h-80 lg:h-96 px-6 lg:px-28 md:px-20 overflow-hidden">
        <Navbar />
        <div>
          <div className="flex flex-row space-x-10 p-2 md:p-4 lg-p-8">
            <div className="text-white font-semibold text-md md:p-6">
              <p className="hidden sm:block text-4xl mb-sm space-bottom-xs-sm leading-tight">
                Get your book reviewed by a professional reviewer
              </p>

              <p className="text-lg font-normal mb-4 mt-2 leading-tight">
                Submit your book to Reedsy Discovery for $50.
              </p>

              <Button />
            </div>

            <img src={imgSrc} className="h-48 pl-20 pr-20 lg:block hidden lg:pr-5 lg:pl-5" />
          </div>
        </div>
      </div>
      <div className="bg-pink/20 h-64  md:h-80 lg:h-80 p-2 overflow-hidden"></div>
    </>
  );
};
