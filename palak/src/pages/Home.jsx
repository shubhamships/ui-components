import Login from "./Login";
// import background from "../assets/background.jpg";
// import shipGlobal from "../assets/shipGlobal.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgotpsswrd from "./ForgotPsswrd";
const Home = ({ heading }) => {
  const [currCard, setCurrCard] = useState("A");

  const handleForgotClick = () => {
    setCurrCard(!currCard);
  };
  return (
    <div className=" bg-cover h-screen bg-[url('src/assets/bg.jpg')]">
      <Link to="#" className="grid">
        <div className="flex  items-start m-4 mb-40 justify-center lg:my-5 lg:mx-20 md:justify-start sm:my-2 md:my-2">
          <img src="src/assets/logo.png" className="h-12" />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center ">
        <div className="rounded-lg shadow-lg  w-full max-w-md h-[510px] m-7 p-3  bg-white mb-18 ">
          <h3 className="font-semibold text-xl text-center flex flex-col p-8 tracking-tight">
            {currCard ? "Login" : "Forgot Your Password?"}
          </h3>
          {currCard ? (
            <Login handleClick={handleForgotClick} heading="Login" />
          ) : (
            <Forgotpsswrd
              handleClick={handleForgotClick}
              heading="Forgot Your Password?"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
