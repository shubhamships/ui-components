import { Link } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPsswrd from "../pages/ForgotPsswrd";

const BackGround = ({ type, handleTypeChange, formData, error, handleDataChange, handleDataSubmit }) => {
  return (
    <div className="bg-cover h-screen bg-[url('src/assets/bg.jpg')]">
      <Link to="#" className="grid">
        <div className="flex items-start lg:mb-8 justify-center lg:mt-8 lg:mx-20 md:justify-start sm:my-2 md:my-2">
          <img src="src/assets/logo.png" alt="Logo" className="h-12" />
        </div>
      </Link>

      <div className="flex flex-col items-center justify-center font-poppins">
        <div className="rounded-lg shadow-lg w-full max-w-md max-h-screen m-7 px-3 bg-white pb-28">
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
            <ForgotPsswrd
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
