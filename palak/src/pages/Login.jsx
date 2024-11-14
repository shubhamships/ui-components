import { useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import withLoading from "../components/withLoading";
import Button from "../components/Button";
import { Label } from "../components/Label";
import { loginUser } from "../api/FetchApi";

const schema = z.object({
  email: z.string().email("Must be a valid email address"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
});

const ButtonLoader = withLoading(Button);

const Login = ({ handleClick }) => {
  const [showPsswrd, setshowPsswrd] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const [wrongError, setWrongError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse({
      ...formData,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setError(formattedErrors);
    } else {
      setError({});
    }
  };

  const handleShow = () => {
    setshowPsswrd(!showPsswrd);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const data = await loginUser("auth/login", formData);
      console.log(data);

      if (data.data.token_details.token) {
        localStorage.setItem("jwtToken", data.data.token_details.token);
        console.log(data.data.token_details.token);
        navigate("/front");
      } else {
        alert("Login unsuccessful");
      }
    } catch (error) {
      setWrongError("Wrong email or password. Try again");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="rounded-lg shadow-lg  w-full max-w-md h-[510px] m-7 p-3  bg-white mb-18">
        <div className="flex flex-col p-6 ">
          <h3 className="font-bold text-xl text-center tracking-tight">
            Login
          </h3>
        </div>
        <div className="p-6 pt-0">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1 ">
              <Label type="Email" />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="pr-48"
                placeholder="Enter Email ID ..."
              />
              {error.email && (
                <p className="text-xs font-semibold text-red-600">
                  {error.email._errors[0]}
                </p>
              )}
            </div>
            <div className="space-y-1 mt-4">
              <Label type="Password" />
              <div className="flex items-end  relative">
                <Input
                  type={showPsswrd ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Type here ..."
                  className="pr-48"
                />

                {showPsswrd ? (
                  <GoEye
                    className="absolute right-4 bottom-3 cursor-pointer"
                    onClick={handleShow}
                  />
                ) : (
                  <GoEyeClosed
                    className="absolute right-4 bottom-3 cursor-pointer"
                    onClick={handleShow}
                  />
                )}
              </div>
              <div className="w-64">
                {error.password && (
                  <p className="text-xs font-semibold text-red-600">
                    {error.password._errors[0]}
                  </p>
                )}
              </div>
            </div>
            <div className="my-1">
              <a href="#">
                <span
                  className="text-sm font-medium text-blue-900 hover:underline"
                  onClick={handleClick}
                >
                  Forgot Password?
                </span>
              </a>
            </div>
            {wrongError && (
              <p className="text-xs font-medium text-red-600 mt-2">
                {wrongError}
              </p>
            )}
            <div className="flex items-center justify-center ">
              {/* <button
                className="bg-blue-900 hover:bg-blue-800 w-full h-11 mt-10 text-white text-sm font-medium rounded-lg max-w-sm"
                type="submit"
                onClick={handleLogin}
              >
                <div className="flex flex-row">
                  <div className="ml-40">Submit</div>
                  <div>
                    {isLoading ? (
                      <div className="w-4 h-4 border-4 ml-2 mt-0.5 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    ) : null}
                  </div>
                </div>
              </button> */}
              <ButtonLoader
                isLoading={isLoading}
                onClick={handleLogin}
                // name="Submit"
              >
                Submit
              </ButtonLoader>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
