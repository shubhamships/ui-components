import { MdOutlineCancel } from "react-icons/md";
import { Input } from "../components/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

interface Colors {
  popupButton: string;
  textColor: string;
  inputBgColor: string;
  inputBorder: string;
  spanColor: string;
  handleClick: () => void;
  placeholder: string;
}

const Popup = ({ popupButton, textColor, spanColor, inputBgColor, inputBorder, handleClick, placeholder }: Colors) => {
  return (
    <div>
      {/* Normal Popup */}
      <MdOutlineCancel onClick={handleClick} className={`text-white text-xl absolute top-3 right-3 cursor-pointer`} />

      <Heading className={`mt-14 ${textColor}`}>Subscribe for free Music</Heading>
      <p className={`mt-2 px-10 ${textColor} text-sm`}>
        Enjoy the next 2 months for free. Pay <span className={`${spanColor}`}>99/month </span>after your free
        subscription expires.
      </p>

      <div className="flex">
        <Input
          type={"text"}
          name="email"
          placeholder="Type Password here ..."
          className={`mt-12 ml-10 ${inputBgColor} ${inputBorder} ${placeholder}`}
        />
        <Button className={`w-24 mr-8 mt-12 ${popupButton}`} onClick={handleClick}>
          Subscribe
        </Button>
      </div>

      <div className="flex justify-center mt-14">
        <Link to="#" className={`${spanColor} text-sm underline`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Popup;
