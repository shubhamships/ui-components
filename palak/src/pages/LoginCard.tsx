import { useState } from "react";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Popup from "../popup/Popup";
import { Link } from "react-router-dom";

interface Colors {
  bgColor: string;
  textColor: string;
  inputBgColor: string;
  buttonBgColor: string;
  spanColor: string;
  popupBgColor: string;
  popupButton: string;
  inputBorder: string;
  placeholder: string;
}

const LoginCard = ({
  bgColor,
  textColor,
  inputBgColor,
  buttonBgColor,
  spanColor,
  popupBgColor,
  popupButton,
  inputBorder,
  placeholder,
}: Colors) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative inset-0 h-screen w-screen flex items-center bg-cover justify-center ${bgColor}`}
      onMouseDownCapture={() => setIsOpen(false)}
    >
      <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? "bg-black/60" : ""}`}></div>

      {/* GlassEffect Popup */}
      <div
        className={`absolute z-20 w-96 max-h-screen pb-20 flex flex-col rounded-md shadow-lg bg-white/20 backdrop-blur-md`}
      >
        <Heading className={`mt-10 ${textColor}`}>
          Login for <span className={`${spanColor}`}>better</span> experience
        </Heading>

        <Label type="Email" className={`mt-12 px-8 ${textColor}`} />
        <Input
          type={"text"}
          name="email"
          placeholder="Type Email here ..."
          className={` ${inputBgColor} ${inputBorder} ${placeholder}`}
        />

        <Label type="Password" className={`mt-6 px-8 ${textColor}`} />
        <Input
          type={"text"}
          name="password"
          placeholder="Type Password here ..."
          className={` ${inputBgColor} ${inputBorder} ${placeholder}`}
        />

        <Link to="#" className={`text-sm px-8 ${textColor} underline mt-1.5`}>
          Forgot Password
        </Link>

        <Button className={`px-36 mt-16 ${buttonBgColor}`} onClick={handleClick}>
          Login
        </Button>
      </div>

      <div
        className={`absolute z-20 max-w-lg h-96 ${popupBgColor} flex flex-col p-2 rounded-md shadow-lg transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 pointer-events-none"
        }`}
        onMouseDownCapture={() => setIsOpen(true)}
      >
        <Popup
          popupButton={popupButton}
          spanColor={spanColor}
          inputBgColor={inputBgColor}
          inputBorder={inputBorder}
          textColor={textColor}
          handleClick={handleClick}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default LoginCard;
