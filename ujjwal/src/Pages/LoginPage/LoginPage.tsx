import { ChangeEvent, useState } from "react";
import ForgotPassword from "./ForgotPassword.js";
import zod from "zod";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LuLoader } from "react-icons/lu";
import LogoImg from "@/assets/logo.png";
import InputField from "../../Components/InputField.js";
import Error from "../../Components/Errors.js";
import Button from "@/Components/Button.js";
import API from "@/Components/api.js";
function LoginPage() {
  const schema = zod.object({
    email: zod.string().email("Must be a valid email address"),
    password: zod.string().min(6, "Password must be 6 or more characters long").max(20),
  });
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<any>({});
  // usestate({email:"",password:""})
  // const [apiError, setApiError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleForgotPassword = (e: any) => {
    e.preventDefault();
    setForgotPassword(true);
  };
  const handleBackToLogin = () => {
    setForgotPassword(false);
  };
  const handleshowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = schema.safeParse({
      ...data,
    });
    if (!res.success) {
      const formatErrors = res.error.format();
      setError(formatErrors);
      handleAPI();
    } else {
      setError({});
      handleAPI();
    }
  };
  const handleAPI = async () => {
    setLoader(true);
    try {
      const res = await API.post("/auth/login", data);
      const APIData = await res.data;
      console.log(APIData);
      const token = APIData.data.token_details.token;
      if (token) {
        localStorage.setItem("JWTToken", token);
        navigate("/home");
      }
    } catch (error) {
      // setApiError(true);
      setApiErrorMessage("Wrong email or password. Try again");
    }
    setTimeout(() => {
      setLoader(false);
    }, 500);
  };
  return (
    <div className="bg-backgroundImage bg-cover h-screen">
      <a
        href="/"
        className="flex items-start justify-center lg:w-56 mb-0 h-12 py-4 -px-2 md:justify-center md:w-56 lg:py-8 lg:mx-16 sm:w-56"
      >
        <div>
          <img src={LogoImg} alt="Shipglobal" className="h-12" />
        </div>
      </a>
      <div className="flex items-center justify-center mt-14 lg:mt-20 px-4">
        <div className="rounded-lg bg-white shadow-lg p-3 max-w-md w-full">
          {forgotPassword ? (
            <ForgotPassword handleSubmit={handleSubmit} error={error} onBackToLogin={handleBackToLogin} />
          ) : (
            <>
              <div className="p-6">
                <h1 className="text-xl font-semibold text-center">Login</h1>
              </div>
              <form onSubmit={handleSubmit} className="pl-6 pr-6 pb-36">
                <div className="space-y-1">
                  <InputField
                    isRequired
                    name="email"
                    type="email"
                    placeholder="Enter Email ID . . ."
                    className="h-10 w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
                    onChange={handleChange}
                    label={"Email"}
                  />
                  <Error errors={error.email && error.email._errors[0]} />
                </div>
                <div className="space-y-1 mt-4">
                  <div className="flex relative">
                    <InputField
                      isRequired
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Type here . . ."
                      className="h-10 w-full px-3 outline- py-2 text-sm border border-gray-300 rounded-md"
                      onChange={handleChange}
                      label={"Password"}
                    />
                    <div onClick={handleshowPassword} className="top-9 right-3 absolute">
                      {!showPassword ? <EyeOff /> : <Eye />}
                    </div>
                  </div>
                  <Error errors={error.password && error.password._errors[0]} />
                </div>
                <div className="mt-1">
                  <a
                    href="#"
                    onClick={handleForgotPassword}
                    className="text-blue-900 text-sm hover:underline font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div>{apiErrorMessage && <p className="text-xs font-medium text-red-600">{apiErrorMessage}</p>}</div>
                <div className="mt-11">
                  <Button onClick={handleAPI} type="submit">
                    Submit
                    {loader ? <LuLoader className={`${loader ? "block" : "hidden"} animate-spin ml-2`} /> : ""}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
