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
        <div className="flex items-start lg:mb-8 justify-center mt-8 mx-20 md:justify-start">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>
      </Link>

      <div className="rounded-lg shadow-lg w-full mx-auto my-auto max-w-md max-h-screen mt-8 px-3 bg-white pb-28">
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
  );
};

export default BackGround;
