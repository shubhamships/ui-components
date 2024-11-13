import Login from "./Login";
// import background from "../assets/background.jpg";
// import shipGlobal from "../assets/shipGlobal.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgotpsswrd from "./ForgotPsswrd";
const Home = () => {
  const [currCard, setCurrCard] = useState("A");

  const handleForgotClick = () => {
    setCurrCard(!currCard);
  };
  return (
    <div className=" bg-cover h-screen bg-[url('src/assets/bg.jpg')]">
      <Link to="#" className="grid">
        <div className="flex  items-start m-4 mb-40 justify-center lg:my-5 lg:mx-20 md:justify-start">
          <img src="src/assets/logo.png" className="h-12" />
        </div>
      </Link>
      {currCard ? (
        <Login handleClick={handleForgotClick} />
      ) : (
        <Forgotpsswrd handleClick={handleForgotClick} />
      )}
    </div>
  );
};
export default Home;
