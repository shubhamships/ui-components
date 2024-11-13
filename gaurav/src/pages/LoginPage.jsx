import Card from "../components/ui/Card";
import logo from "../assets/logo.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
// import eye from "../assets/eye.svg";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { loginSchema } from "../zod/loginSchema";
// import { set } from "zod";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const validateForm = (data) => {
    const errors = {};
    if (!data.email) {
      errors.email = "Must be a valid email address";
    } else if (!/^\b[\w\\.-]+@[\w\\.-]+\.\w{2,4}\b$/i.test(data.email)) {
      errors.email = "Must be a valid email address";
    }
    if (!data.password) {
      errors.password = "Password must bt 6 or more characters long";
    }
    return errors;
  };
  // const validateForm = () => {
  //   const result = loginSchema.safeParse(formData);
  //   if (!result.success) {
  //     const errors = result.error.errors.reduce((acc, error) => {
  //       acc[error.path[0]] = error.message;
  //       return acc;
  //       setErrors(errors);
  //       return false;
  //     }, {});
  //     setError(errors);
  //   }
  // };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handlePasswordVisibility = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setError(errors);
    if (Object.keys(errors).length > 0) return;
  };
  return (
    <div className="h-screen w-full">
      <div className="bg-login-image bg-cover h-screen w-full">
        <a href="https://fr.stg.shipglobal.in/" className="">
          <div className="flex justify-center items-start p-4 md:justify-start lg:py-8 lg:mx-16">
            <img src={logo} style={{ height: 48 }} />
          </div>
        </a>
        <div className="flex justify-center items-center m-4 mt-32 md:mt-[118px]">
          <Card className="p-3 w-full mb-18 h-[512px] lg:mb-32 max-w-md  shadow-xl">
            <div className="flex justify-center items-center font-semibold text-xl tracking-tighter p-6">
              <h3 className="">Login</h3>
            </div>
            <div className="px-6 pb-6">
              <form
                action="
              "
                onSubmit={handleSubmit}
                className=""
              >
                <div className="">
                  <Input
                    labelData="Email"
                    placeholder="Enter Email ID..."
                    className="w-full"
                    name="email"
                    errorName={error.email}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-1 mt-4 relative text-black">
                  <Input
                    labelData="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Type here..."
                    name="password"
                    errorName={error.password}
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {/* <img
                    src={eye}
                    alt=""
                    height={20}
                    width={20}
                    className="absolute right-4 top-7 font-bold"
                  /> */}
                  <div className="" onClick={handlePasswordVisibility}>
                    {showPassword ? (
                      <FiEye className="absolute right-5 top-8 font-bold cursor-pointer text-lg" />
                    ) : (
                      <FiEyeOff className="absolute right-5 top-8 font-bold cursor-pointer text-lg" />
                    )}
                  </div>
                </div>
                <div className="">
                  <p className="text-sm font-medium text-blue-800">
                    Forgot Password?
                  </p>
                </div>
                <Button
                  title="Submit"
                  className="text-sm font-medium w-full mt-10"
                />
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
