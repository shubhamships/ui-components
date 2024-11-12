import background from "../assets/background.jpg";
import shipGlobal from "../assets/shipGlobal.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className=" bg-cover h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link to="/" className=" grid">
        <div className="flex  items-start m-4 mb-40 justify-center lg:my-5 lg:mx-20 md:justify-start">
          <img src={shipGlobal} className="h-12 " alt="logo" />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center m-4 mt-10">
        <div className="rounded-lg shadow-lg  w-full max-w-md h-[510px] m-8 p-3  bg-white mb-18">
          <div className="flex flex-col p-6 ">
            <h3 className="font-bold text-xl text-center tracking-tight">
              Login
            </h3>
          </div>
          <div className="p-6 pt-0">
            <form action="">
              <div className="flex flex-col space-y-1 ">
                <label className="text-sm font-normal">Email <span className="text-red-600 ml-1">*</span></label>
                <input
                  type="email"
                  className="border-gray-300 border-[1px] flex h-10 w-full rounded-md px-3 py-2 text-sm "
                  placeholder="Enter Email ID ..."
                />
              </div>
              <div className="space-y-1 mt-4">
                <label htmlFor="" className="text-sm font-normal">
                  Password <span className="text-red-600 ml-1 ">*</span>
                </label>
                <div className="flex items-end ">
                  <input
                    type="password"
                    className="border-gray-300 border-[1px] flex h-10 w-full rounded-md px-3 py-2 text-sm "
                    placeholder="Type here ..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-current self-center -ml-10 cursor-pointer"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                    <line x1="2" x2="22" y1="2" y2="22"></line>
                  </svg>
                </div>
              </div>
              <div className="my-1">
                <a href="">
                  <span className="text-sm font-medium text-blue-900">Forgot Password?</span>
                </a>
              </div>
              <div className="flex items-center justify-center ">
                <button className="bg-blue-900 w-full h-11 mt-10 text-white text-sm font-medium rounded-lg max-w-sm">Submit</button>
              </div>
            </form>
          </div> 
        </div>
      </div>
    </div>
  );
};
export default Login;
