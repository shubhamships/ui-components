import CardComponent from "../Components/cards/CardComponent.tsx";
import Button from "@/Components/Button/Button.tsx";
import logo from "@/assets/logo.png";
import { Instagram, Twitter } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import FormInput from "@/Components/FormInput.tsx";
import loginImage from "@/assets/loginImage.png";

function LoginSignUp() {
  const dimension = "secondary";
  return (
    <div className="bg-amber-50 bg-opacity-75 h-screen font-medium text-sm">
      <a href="/LoginSignup"></a>
      <div className="flex justify-center items-center h-screen">
        <CardComponent dimension={dimension} theme="Light" className="bg-opacity-80">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" height={48} width={125} />
            <div className="flex items-center justify-center gap-4">
              <a href="https://x.com/shipglobal_in" target="_blank">
                <div className="rounded-lg hover:bg-black hover:text-white">{<Twitter />}</div>
              </a>
              <a href="https://www.instagram.com/shipglobal.in/?hl=en" target="_blank">
                <div className="hover:animate-spin rounded-lg hover:bg-black hover:text-white">{<Instagram />}</div>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <CardComponent dimension="innerCard" theme="defaultLight" className="space-y-5 mt-6">
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
              />
              <div>
                <a target="_blank" href="https://www.google.com/">
                  <Button
                    title="Google"
                    variant="link"
                    size="lg"
                    className="w-full rounded-xl h-12 gap-2 hover:bg-slate-100"
                    iconName={<FaGoogle />}
                  />
                </a>
              </div>
              <p className="text-gray-500">
                Already Have An Account?
                <span className="text-black ml-1 hover:underline hover:cursor-pointer">
                  <a href="">Login</a>
                </span>
              </p>
            </CardComponent>
            {dimension === "secondary" && (
              <div className={`w-full flex justify-center items-center bg-transparent pt-10 `}>
                <img src={loginImage} className="w-full h-full rounded-xl object-cover" />
              </div>
            )}
          </div>
        </CardComponent>
      </div>
    </div>
  );
}

export default LoginSignUp;
