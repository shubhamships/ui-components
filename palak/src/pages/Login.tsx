import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import withLoading from "../components/withLoading";
import Button from "../components/Button";
import { Label } from "../components/Label";
import { loginUser } from "../api/FetchApi";
import Error from "../components/Error";
import Required from "../components/Required";
import { Eye, EyeOff } from "lucide-react";
import { FormError } from "../pages/Home";

const ButtonLoader = withLoading(Button);
interface LoginProps {
  handleTypeChange: (newType: "login" | "forgotPassword") => void;
  formData: { email: string; password: string };
  error: FormError;
  handleDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDataSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Login = ({ handleTypeChange, handleDataChange, handleDataSubmit, formData, error }: LoginProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [wrongError, setWrongError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const data = await loginUser({ additionalURL: "auth/login", formData });
      console.log(data);

      if (data.data.token_details.token) {
        localStorage.setItem("jwtToken", data.data.token_details.token);
        console.log(data.data.token_details.token);
        navigate("/dashboard");
      }
    } catch (error) {
      setWrongError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 pt-0">
      <form action="" onSubmit={handleDataSubmit}>
        <div className="flex flex-col space-y-1 ">
          <div className="flex items-start">
            <Label type="Email" />
            <Required />
          </div>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleDataChange}
            className="w-96"
            placeholder="Enter Email ID ..."
          />
          {error.email && <Error>{error.email._errors[0]}</Error>}
        </div>
        <div className="space-y-1 mt-4">
          <div className="flex items-start">
            <Label type="Password" />
            <Required />
          </div>
          <div className="flex items-end relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleDataChange}
              placeholder="Type here ..."
              className="w-96"
            />

            {showPassword ? (
              <Eye className="absolute right-4 bottom-2 cursor-pointer" onClick={handleShow} />
            ) : (
              <EyeOff className="absolute right-4 bottom-2 cursor-pointer" onClick={handleShow} />
            )}
          </div>
          <div className="w-64">{error.password && <Error>{error.password._errors[0]}</Error>}</div>
        </div>
        <div className="my-1">
          <a href="#">
            <span
              className="text-sm font-medium text-blue-900 hover:underline"
              onClick={() => handleTypeChange("forgotPassword")}
            >
              Forgot Password?
            </span>
          </a>
        </div>
        {wrongError && <Error>Wrong email or password. Try again</Error>}
        <div className="flex items-center justify-center ">
          <ButtonLoader isLoading={isLoading} onClick={handleLogin} className={`${isLoading ? "opacity-60" : ""}`}>
            Submit
          </ButtonLoader>
        </div>
      </form>
    </div>
  );
};

export default Login;
