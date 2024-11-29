import { Link } from "react-router-dom";
import gif5 from "../assets/gif5.gif";
const DemoVideo = () => {
  return (
    <div className="mt-20">
      <p className="uppercase text-center border-b-2 border-slate-900 pb-3 text-2xl font-bold text-gray-600">
        zura demo video
      </p>
      <div className="grid grid-colspan-1 gap-10 md:grid-cols-2 items-center justify-center mt-20">
        <p className="text-sm border-l-4 border-red-800 p-2 cursor-pointer text-gray-800">
          To see the figma prototype,{" "}
          <Link to="#" className="text-red-500">
            click here
          </Link>
        </p>
        <img src={gif5} alt="" />
      </div>
    </div>
  );
};
export default DemoVideo;
