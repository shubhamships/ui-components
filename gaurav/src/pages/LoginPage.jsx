import Card from "../components/ui/Card";
import logo from "../assets/logo.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import eye from "../assets/eye.svg";

export const LoginPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="bg-login-image bg-cover h-screen w-full">
        <a href="https://fr.stg.shipglobal.in/" className="">
          <div className="flex justify-center items-start p-4 md:justify-start lg:py-8 lg:mx-16">
            <img src={logo} style={{ height: 48 }} />
          </div>
        </a>
        <div className="flex justify-center items-center m-4 mt-32 md:mt-[118px]">
          <Card className="p-3 w-full mb-18 h-[512px] lg:mb-32 max-w-md  shadow-lg">
            <div className="flex justify-center items-center font-semibold text-xl tracking-tighter p-6">
              <h3>Login</h3>
            </div>
            <div className="px-6 pb-6">
              <form
                action="
              "
              >
                <div className="relative">
                  <Input
                    labelData="Email"
                    placeholder="Enter Email ID..."
                    className="w-full"
                  />
                </div>
                <div className="space-y-1 mt-4 relative">
                  <Input labelData="password" placeholder="Type here..." />
                  <img
                    src={eye}
                    alt=""
                    height={20}
                    width={20}
                    className="absolute right-4 top-7 font-bold"
                  />
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
