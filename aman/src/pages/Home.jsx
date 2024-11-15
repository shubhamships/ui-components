import Login from "./Login";
import { useState } from "react";
import Forgotpsswrd from "./ForgotPsswrd";
import OuterLayout from "../components/OuterLayout";
const Home = () => {
  const [currCard, setCurrCard] = useState("A");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotClick = () => {
    if (currCard === "A") {
      setCurrCard("B");
    } else if (currCard === "B") {
      setCurrCard("A");
    }
  };
  return (
    <OuterLayout>
      {currCard === "A" ? (
        <Login
          handleClick={handleForgotClick}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        <Forgotpsswrd handleClick={handleForgotClick} />
      )}
    </OuterLayout>
  );
};
export default Home;
