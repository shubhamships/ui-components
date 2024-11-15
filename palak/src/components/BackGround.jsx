import { Link } from "react-router-dom";
import Login from "../pages/Login";
import ForgotPsswrd from "../pages/ForgotPsswrd";

const BackGround = ({
  type,
  handleTypeChange,
  formData,
  error,
  handleDataChange,
  handleDataSubmit,
}) => {
  return (
    <div className="bg-cover h-screen bg-[url('src/assets/bg.jpg')]">
      <Link to="#" className="grid">
        <div className="flex items-start lg:mb-8 justify-center lg:mt-8 lg:mx-20 md:justify-start sm:my-2 md:my-2">
          <img src="src/assets/logo.png" alt="Logo" className="h-12" />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center font-poppins">
        <div className="rounded-lg shadow-lg w-full max-w-md h-[510px] m-7 p-3 bg-white mb-18">
          <p className="font-semibold text-xl text-center flex flex-col p-8 tracking-tight">
            {type === "login" && "Login"}
            {type === "forgotPassword" && "Forgot Your Password?"}
          </p>
          {type === "login" && (
            <Login
              handleClick={() => handleTypeChange("forgotPassword")}
              handleDataChange={handleDataChange}
              handleDataSubmit={handleDataSubmit}
              formData={formData}
              error={error}
            />
          )}
          {type === "forgotPassword" && (
            <ForgotPsswrd
              handleClick={() => handleTypeChange("login")}
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

// import React from "react";
// export const BackGround = ({ type, children }) => {
//   return (
//     <div className="">
//       <div className="w-full h-screen">
//         <div className="bg-[url('src/assets/bg.jpg')] bg-center grid h-screen bg-cover bg-auth">
//           <a href="/">
//             <div className="flex items-start justify-center m-4 mb-0 lg-my-8 lg:mx-20 md:justify-start">
//               <img src="src/assets/logo.png" className="h-12" />
//             </div>
//           </a>
//           <div className="flex flex-col items-center justify-center">
//             <div className="rounded-lg shadow-lg m-4 p-3 w-full max-w-md mb-18 lg:mb-32 h-128 bg-white">
//               {/* {type && React.createElement(type)} */}
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
