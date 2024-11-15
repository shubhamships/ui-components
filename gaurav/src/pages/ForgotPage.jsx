import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const // eslint-disable-next-line react/prop-types
  ForgotPage = ({ handleSubmit, errorName, value, change }) => {
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
              <div className="flex flex-col justify-center items-center  p-6">
                <h3 className="font-semibold text-xl tracking-tighter">
                  Forgot Password
                </h3>
                <div className="text-sm font-normal mt-[6px] pt-6">
                  Enter email address associated with your account and you will
                  receive an email to reset your password.
                </div>
              </div>
              <div className="px-6 pb-4">
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
                      type="email"
                      errorName={errorName}
                      value={value}
                      onChange={change}
                    />
                  </div>
                  <Button
                    title="Submit"
                    className="text-sm font-medium w-full mt-12"
                  />
                </form>
                <div>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-blue-800 hover:underline text-center block mt-4"
                  >
                    Return to Login
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  };
