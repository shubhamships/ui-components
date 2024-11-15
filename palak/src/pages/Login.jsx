import { useState } from "react";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import withLoading from "../components/withLoading";
import Button from "../components/Button";
import { Label } from "../components/Label";
import { loginUser } from "../api/FetchApi";
import Error from "../components/Error";

const ButtonLoader = withLoading(Button);

const Login = ({
  handleClick,
  handleDataChange,
  handleDataSubmit,
  formData,
  error,
}) => {
  const [showPsswrd, setshowPsswrd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [wrongError, setWrongError] = useState(false);
  const navigate = useNavigate();

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
      setWrongError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 pt-0 font-poppins">
      <form action="" onSubmit={handleDataSubmit}>
        <div className="flex flex-col space-y-1 ">
          <Label type="Email" />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleDataChange}
            className="pr-48"
            placeholder="Enter Email ID ..."
          />
          {error.email && <Error>{error.email._errors[0]}</Error>}
        </div>
        <div className="space-y-1 mt-4">
          <Label type="Password" />
          <div className="flex items-end  relative">
            <Input
              type={showPsswrd ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleDataChange}
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
        {wrongError && <Error>Wrong email or password. Try again</Error>}
        <div className="flex items-center justify-center ">
          <ButtonLoader isLoading={isLoading} onClick={handleLogin}>
            Submit
          </ButtonLoader>
        </div>
      </form>
    </div>
    //
  );
};
export default Login;
