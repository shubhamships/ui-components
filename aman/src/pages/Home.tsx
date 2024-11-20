import Login from "./Login";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import OuterLayout from "@/components/OuterLayout";
const Home = () => {
  const [currCard, setCurrCard] = useState("LoginPage");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotClick = () => {
    {
      currCard === "LoginPage" ? setCurrCard("ForgotPassword") : setCurrCard("LoginPage");
    }
  };
  return (
    <OuterLayout>
      {currCard === "LoginPage" ? (
        <Login handleClick={handleForgotClick} isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <ForgotPassword handleClick={handleForgotClick} />
      )}
    </OuterLayout>
  );
};
export default Home;
