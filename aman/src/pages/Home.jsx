import Login from "./Login";
import background from "../assets/background.jpg";
import shipGlobal from "../assets/shipGlobal.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Forgotpsswrd from "./ForgotPsswrd";
const Home = () => {
  const [currCard, setCurrCard] = useState("A");
  const [isLoading,setIsLoading]= useState(false);

  const handleForgotClick = () => {
    if(currCard==='A'){
        setCurrCard("B");
    }else if(currCard==='B'){
        setCurrCard("A");
    }
    
    console.log(currCard);
  };
  return (
    <div
      className=" bg-cover h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link to="#" className="grid">
        <div className="flex  items-start m-4 mb-40 justify-center lg:my-5 lg:mx-20 md:justify-start">
          <img src={shipGlobal} className="h-12 " alt="logo" />
        </div>
      </Link>
      {currCard === "A" ? (
        <Login handleClick={handleForgotClick}
        isLoading={isLoading} 
        setIsLoading={setIsLoading}/>
      ) : (
        <Forgotpsswrd handleClick={handleForgotClick} />
      )}
    </div>
  );
};
export default Home;
