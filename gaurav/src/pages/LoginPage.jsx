import Card from "../components/ui/Card";
import logo from "../assets/logo.png";

export const LoginPage = () => {
  return (
    <div className="h-screen w-full">
      <div className="bg-login-image bg-cover h-screen w-full">
        <a href="https://fr.stg.shipglobal.in/" className="">
          <div className="flex justify-center items-center p-4 md:justify-start lg:py-8 lg:mx-16">
            <img src={logo} style={{ height: 48 }} />
          </div>
        </a>
        <div className="flex justify-center items-center">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};
