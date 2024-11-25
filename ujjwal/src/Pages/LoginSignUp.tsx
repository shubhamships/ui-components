import CardComponent from "../Components/cards/CardComponent.tsx";
import Button from "@/Components/Button/Button.tsx";
import logo from "@/assets/logo.png";
import { Instagram, Twitter } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import FormInput from "@/Components/FormInput.tsx";

function LoginSignUp() {
  return (
    <div className="bg-amber-50 h-screen font-medium text-sm">
      <a href="/LoginSignup"></a>
      <div className="flex justify-center items-center h-screen">
        <CardComponent dimension="primary" theme="defaultLight">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" height={48} width={90} />
            <div className="flex items-center justify-center gap-4">
              <a href="https://x.com/shipglobal_in">
                <div className="rounded-lg hover:bg-black hover:text-white">{<Twitter />}</div>
              </a>
              <a href="https://www.instagram.com/shipglobal.in/?hl=en">
                <div className="hover:animate-spin rounded-lg hover:bg-black hover:text-white">{<Instagram />}</div>
              </a>
            </div>
          </div>
          <CardComponent dimension="innerCard" theme="defaultLight" className="space-y-5 mt-10">
            <p className="text-3xl font-medium">
              Lets <br /> Start Shipping ...
            </p>
            <p className="mt-2 text-gray-600">Please Login or SignUp to continue</p>
            <FormInput
              type="email"
              placeholder="example@gmail.com"
              variant="defaultWhite"
              size="md"
              icon="mail"
              className="hover:bg-slate-100 bg-opacity-25 rounded-xl"
            />
            <FormInput
              type="password"
              placeholder="12345678"
              variant="defaultWhite"
              size="md"
              icon="password"
              className="hover:bg-slate-100 bg-opacity-25 rounded-xl"
            />
            <Button
              title="submit"
              variant="soft"
              size="lg"
              className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 h-12 text-white"
            ></Button>
            <Button
              title="Google"
              variant="soft"
              size="lg"
              className="w-full rounded-xl h-12 gap-2 hover:bg-slate-100"
              iconName={<FaGoogle />}
            ></Button>
            <p className="text-gray-500">
              Already Have An Account?
              <span className="text-black ml-1 hover:underline hover:cursor-pointer">Login</span>
            </p>
          </CardComponent>
        </CardComponent>
      </div>
    </div>
  );
}

export default LoginSignUp;
