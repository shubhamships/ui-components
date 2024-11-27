import { Navbar } from "./Navbar";
import imgSrc from "../assets/img.png";
import Button from "./Button";
import { Mail, CircleArrowRight } from "lucide-react";

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
              <div className="grid grid-cols-2 md:grid md:grid-cols-3 ">
                <Button
                  text="Sign in with Google"
                  className="bg-white text-black py-1 px-2 border-white sm:pl-4 md:pl-8 mr-1 object-cover lg:pl-4 lg:py-1"
                  icon={
                    <img src="src/assets/img1.png" className="w-4 h-4 ml-0.5 mr-2 sm:mr-4 md:mr-6" alt="Google Icon" />
                  }
                />
                <Button
                  text="Sign up"
                  className="bg-amber-400 border-amber-400 px-1 py-1/2 mx-2 sm:mx-3 md:mx-2 lg:px-2 lg:py-1 lg:mx-2 "
                  icon={<Mail className="ml-2" />}
                />
                <Button
                  text="Learn more"
                  className="hidden max-w-max md:inline-flex md:border-2 border-white  px-2 py-1 mx-2"
                  icon={<CircleArrowRight className="ml-2" />}
                />
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
