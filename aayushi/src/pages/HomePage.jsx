import { LoginPage } from "./LoginPage";

export const HomePage = () => {
  return (
    <div className="">
      <div className="w-full h-screen">
        <div className="bg-[url('src/assets/bg.jpg')]  bg-center grid h-screen bg-cover bg-auth">
          <a href="/">
            <div className="flex items-start justify-center m-4 mb-0 lg-my-8 lg:mx-20 md:justify-start">
              <img src="src/assets/logo.png" className="h-12" />
            </div>
          </a>
          <LoginPage />
          
        </div>
      </div>
    </div>
  );
};
