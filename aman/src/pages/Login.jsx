import { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import withLoading from "../components/withLoading";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import Input from "../components/Input";
import apiClient from "../api/ApiClient";
import Error from "../components/Error";
import Label from "../components/Label";

const LoadingButton = withLoading();

const schema = z.object({
  email: z.string().email("Must be a valid email address"),
  password: z.string().min(6, "Password must be 6 or more characters long"),
});

const Login = ({ handleClick, isLoading, setIsLoading }) => {
  const [showPsswrd, setshowPsswrd] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [wrongError, setWrongError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = schema.safeParse({
      ...formData,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setError(formattedErrors);
    } else {
      setError({});
      setIsLoading(true);
      try {
        await handleLogin();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleShow = () => {
    setshowPsswrd(!showPsswrd);
  };

  const handleLogin = async () => {
    try {
      const response = await apiClient.post("/auth/login", formData);
      const data = await response.data;

      if (data.data.token_details.token) {
        localStorage.setItem("jwtToken", data.token);
        navigate("/dashboard");
      } else {
        alert("failed");
      }
    } catch (error) {
      setWrongError("Wrong email or password. Try again");
    }
  };

  return (
    <div className="mb-28">
      <div className="flex flex-col p-6">
        <h3 className="font-bold text-xl text-center tracking-tight">Login</h3>
      </div>
      <div className="p-6 pt-0">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <Label lableTitle="Email" />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email ID ..."
            />
            {error.email && <Error>{error.email._errors[0]}</Error>}
          </div>
          <div className="space-y-1 mt-4">
            <Label lableTitle="Password" />
            <div className="flex items-end relative">
              <Input
                type={showPsswrd ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="pr-52"
                placeholder="Type here ..."
              />

              {showPsswrd ? (
                <LuEye
                  className="absolute right-4 bottom-3 cursor-pointer text-xl"
                  onClick={handleShow}
                />
              ) : (
                <LuEyeOff
                  className="absolute right-4 bottom-3 cursor-pointer text-xl"
                  onClick={handleShow}
                />
              )}
            </div>

            <div className="w-64">
              {error.password && <Error>{error.password._errors[0]}</Error>}
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
            <p className="text-sm font-medium text-red-600">{wrongError}</p>
          )}
          <div className="flex items-center justify-center">
            <LoadingButton loading={isLoading}>Submit</LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;