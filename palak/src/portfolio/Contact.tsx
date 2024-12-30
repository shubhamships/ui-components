import cat from "../assets/cat.gif";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import Footer from "../components/Footer";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Contact = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-20">
        <img src={cat} className="w-32 h-32 mt-32" />
        <p className="font-medium text-3xl mt-5 text-gray-700">Let's Stay Connected!</p>
        <p className="text-xs mt-2 text-gray-700">
          Say hi and let's have a conversation. I would love to hear from you.
        </p>
        <div className="grid grid-cols-2 gap-x-10 mt-10 w-96 gap-y-5">
          <div className="flex flex-col">
            <Label type="first name" className="uppercase mb-2" />
            <Input type="text" name="firstname" className="w-48 border-gray-300" />
          </div>
          <div className="flex flex-col">
            <Label type="last name" className="uppercase mb-2" />
            <Input type="text" name="lastname" className="w-48 border-gray-300" />
          </div>
          <div className="flex flex-col">
            <Label type="email" className="uppercase mb-2" />
            <Input type="text" name="email" className="w-48 border-gray-300" />
          </div>
          <div className="flex flex-col">
            <Label type="phone number" className="uppercase mb-2" />
            <Input type="text" name="phone number" className="w-48 border-gray-300" />
          </div>
          <div className="flex flex-col">
            <Label type="message" className="uppercase mb-2" />
            <TextArea />
          </div>
        </div>
        <Button className="bg-footer text-white p-3 mt-5">Submit</Button>
        <p className="mt-20 text-gray-700 font-semibold text-2xl">OR</p>
        <p className="mt-4 text-gray-700">Say hi with one of the following!</p>
        <div className="grid grid-cols-3 gap-3">
          <Link to="#">
            <AiFillInstagram className="h-12 w-12 mt-5 fill-footer" />
          </Link>
          <Link to="#">
            <FaLinkedin className="h-10 w-11 fill-footer mt-6" />
          </Link>
          <Link to="#">
            <IoMail className="h-12 w-11 fill-footer mt-5" />
          </Link>
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
