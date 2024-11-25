import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";

interface Colors {
  bgColor: string;
  glassBgColor: string;
  textColor: string;
  inputBgColor: string;
  buttonBgColor: string;
  spanColor: string;
  popupBgColor: string;
  popupButton: string;
  inputBorder: string;
}

const Popup = ({
  bgColor,
  glassBgColor,
  textColor,
  inputBgColor,
  buttonBgColor,
  spanColor,
  popupBgColor,
  popupButton,
  inputBorder,
}: Colors) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative inset-0 h-screen w-screen flex items-center justify-center ${bgColor}`}
      onMouseDownCapture={() => setIsOpen(false)}
    >
      <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? "bg-black/60" : ""}`}></div>

      {/* GlassEffect Popup */}
      <div
        className={`absolute z-20 w-96 max-h-screen pb-20 flex flex-col rounded-md shadow-lg transform transition-all duration-300 ${glassBgColor} backdrop-blur-sm`}
      >
        <Heading className={`mt-10 ${textColor}`}>
          Login for <span className={`${spanColor}`}>better</span> experience
        </Heading>

        <Label type="Email" className={`mt-12 px-8 ${textColor}`} />
        <Input
          type={"text"}
          name="email"
          placeholder="Type Email here ..."
          className={` ${inputBgColor} ${inputBorder} `}
        />

        <Label type="Password" className={`mt-6 px-8 ${textColor}`} />
        <Input
          type={"text"}
          name="password"
          placeholder="Type Password here ..."
          className={` ${inputBgColor} ${inputBorder} `}
        />

        <a className={`text-sm px-8 ${textColor} underline mt-1.5`} href="#">
          Forgot Password
        </a>

        <Button className={`px-36 mt-16 ${buttonBgColor}`} onClick={handleClick}>
          Login
        </Button>
      </div>

      {/* Normal Popup */}
      <div
        className={`absolute z-20 max-w-lg h-96 ${popupBgColor} flex flex-col p-2 rounded-md shadow-lg transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
        onMouseDownCapture={() => setIsOpen(true)}
      >
        <MdOutlineCancel onClick={handleClick} className={`text-white text-xl absolute top-3 right-3 cursor-pointer`} />

        <Heading className={`mt-14 ${textColor}`}>Subscribe for free Music</Heading>
        <p className={`mt-2 px-10 ${textColor} text-sm`}>
          Enjoy the next 2 months for free. Pay <span className={`${spanColor}`}>99/month </span>after your free
          subscription expires.
        </p>

        <div className="flex gap-3 mx-auto">
          <Input
            type={"text"}
            name="email"
            placeholder="Type Password here ..."
            className={`mt-12 ${inputBgColor} ${inputBorder} `}
          />
          <Button className={`w-24 mt-12 ${popupButton}`} onClick={handleClick}>
            Subscribe
          </Button>
        </div>

        <a href="#" className={`${spanColor} text-sm mx-auto my-auto underline`}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Popup;
