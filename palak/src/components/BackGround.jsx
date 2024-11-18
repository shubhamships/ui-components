import { Link } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Logo from "../assets/logo.png";
import BackgroundImage from "../assets/bg.jpg";

const BackGround = ({
  type,
  handleTypeChange,
  formData,
  error,
  handleDataChange,
  handleDataSubmit,
}) => {
  return (
    <div
      className="bg-cover h-screen"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <Link to="#" className="grid">
        <div className="flex items-start mb-8 justify-center lg:mt-8 mx-20 md:justify-start md:my-2">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
      </Link>

      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg shadow-lg w-full max-w-md max-h-screen m-12 px-3 bg-white pb-28">
          <p className="font-semibold text-xl text-center flex flex-col p-8 tracking-tight">
            {type === "login" && "Login"}
            {type === "forgotPassword" && "Forgot Your Password?"}
          </p>
          {type === "login" && (
            <Login
              handleTypeChange={handleTypeChange}
              handleDataChange={handleDataChange}
              handleDataSubmit={handleDataSubmit}
              formData={formData}
              error={error}
            />
          )}
          {type === "forgotPassword" && (
            <ForgotPassword
              handleTypeChange={handleTypeChange}
              handleDataChange={handleDataChange}
              handleDataSubmit={handleDataSubmit}
              formData={formData}
              error={error}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BackGround;
