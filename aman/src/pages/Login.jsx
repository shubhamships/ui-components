import background from "../assets/background.jpg";
import shipGlobal from "../assets/shipGlobal.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center h-screen "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Link to="/">
        <div className="flex items-start justify-center mb-0  lg:mx-20 md:justify-start">
          <img src={shipGlobal} className="h-12 " alt="logo" />
        </div>
      </Link>
    </div>
    
  );
};
export default Login;
