import Card from "../components/ui/Card";
import logo from "../assets/logo.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import { loginSchema } from "../zod/loginSchema";
// import { set } from "zod";
// import { z } from "zod";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { withLogger } from "../components/WithLogger";
// import { set } from "zod";
import withAuth from "../components/WithAuth";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const LoginPage = ({ login }) => {
  const [forgot, setForgot] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const handleForgot = () => {
    setForgot(!forgot);
  };
  const validateForm = () => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const errors = result.error.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setError(errors);
      return false;
    }
    setError({});
    return false;
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      return;
    }
    setLoading(true);
    setApiError(false);
    try {
      const result = await login(formData);
      if (!result.success) {
        setApiError(true);
      } else {
        navigate("/");
      }
    } catch (error) {
      setApiError(true);
      console.log("Login Failed :", error);
    }
    setLoading(false);

    // if (error.email !== "" && error.password !== "") {
    //   // handleLogin();
    //   setLoading(false);
    // }
  };

  {
    /*
      const handleLogin = async () => {
      setLoading(true);
      const loginPayload = {
        email: formData.email,
        password: formData.password,
      };
      try {
        const res = await axios.post(
          "https://api.fr.stg.shipglobal.in/public/api/v1/auth/login",
          loginPayload,
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        const token = res.data.token;
        // Storing the token
        localStorage.setItem("token", token);
        // Set token in axios headers
        setAuthToken(token);
        navigate("/");
        console.log("Successful");
      } catch (error) {
        console.log("Error occured", error);
        setApiError(true);
      }
      setLoading(false);
    };
    const setAuthToken = (token) => {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    };
  */
  }

  return (
    <div className="h-screen w-full">
      <div className="bg-login-image bg-cover h-screen w-full">
        <a href="https://fr.stg.shipglobal.in/" className="">
          <div className="flex justify-center items-start p-4 md:justify-start lg:py-8 lg:mx-16">
            <img src={logo} className="h-12" />
          </div>
        </a>
        <div className="flex justify-center items-center m-4 mt-32 md:mt-28">
          {forgot ? (
            <Card className="p-3 w-full mb-18 pb-32 lg:mb-32 max-w-md  shadow-xl">
              <div className="flex justify-center items-center font-semibold text-xl tracking-tighter p-6">
                <h3 className="">Login</h3>
              </div>
              <div className="px-6 pb-6 space-y-1">
                <form onSubmit={handleSubmit} className="">
                  <Input
                    labelData="Email"
                    placeholder="Enter Email ID . . ."
                    className="w-full"
                    name="email"
                    type="email"
                    errorName={error.email}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="space-y-1 mt-5 relative text-black">
                    <Input
                      labelData="Password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Type here . . ."
                      name="password"
                      errorName={error.password}
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <div className="" onClick={handlePasswordVisibility}>
                      {showPassword ? (
                        <FiEye className="absolute right-5 top-8 font-bold cursor-pointer text-lg" />
                      ) : (
                        <FiEyeOff className="absolute right-5 top-8 font-bold cursor-pointer text-lg" />
                      )}
                    </div>
                  </div>
                  <div className="cursor-pointer mt-2" onClick={handleForgot}>
                    <p className="text-sm font-medium text-blue-800 hover:underline">
                      Forgot Password?
                    </p>
                  </div>
                  {apiError && (
                    <div className="text-red-600 text-xs font-medium pt-2">
                      Wrong email or password. Try again
                    </div>
                  )}
                  <div className="relative">
                    <FiLoader
                      className={`animate-spin text-white absolute mr-3 right-32 top-11 z-10 item-center mt-5  ${
                        loading ? "block" : "hidden"
                      }`}
                    />
                    <Button
                      title="Submit"
                      loading={loading}
                      className={`text-sm font-medium hover:opacity-90 w-full mt-12 ${
                        loading ? "bg-opacity-75" : ""
                      }`}
                    />
                  </div>
                </form>
              </div>
            </Card>
          ) : (
            <Card className="p-3 w-full mb-18 pb-36 lg:mb-32 max-w-md shadow-xl">
              <div className="flex flex-col justify-center items-center p-6">
                <h3 className=" font-semibold text-xl  text-center w-40 md:w-auto">
                  Forgot Your Password?
                </h3>
                <div className="text-sm font-normal mt-6 pt-2 text-center">
                  Enter email address associated with your account and you will
                  receive an email to reset your password.
                </div>
              </div>
              <div className="px-6 pb-4">
                <form onSubmit={handleSubmit} className="">
                  <div className="">
                    <Input
                      labelData="Email"
                      placeholder="Enter Email ID..."
                      className="w-full"
                      name="email"
                      type="email"
                      errorName={error.email}
                      // value={value}
                      // onChange={change}
                    />
                  </div>
                  <div>
                    <Button
                      title="Submit"
                      className="text-sm font-medium w-full mt-12"
                    />
                  </div>
                </form>
                <div
                  className="font-medium text-blue-800 hover:underline text-center block mt-4 cursor-pointer"
                  onClick={handleForgot}
                >
                  Return to Login
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

const EnhancedLoginPage = withAuth(LoginPage);
//  EnhancedLoginPage.displayName = "LoginPage"
export default EnhancedLoginPage;
