import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <ul className="flex  bg-slate-950 gap-10 px-5 items-center justify-center h-20 py-5">
      <Link to="/toggle">
        <li className="cursor-pointer text-white">Toggle</li>
      </Link>
      <Link to="/Loginpage">
        <li className="cursor-pointer text-white">LoginPage</li>
      </Link>
      <Link to="/home">
        <li className="cursor-pointer text-white">Home</li>
      </Link>
      <Link to="/Interiorpage">
        <li className="cursor-pointer text-white">InteriorPage</li>
      </Link>
      <Link to="/dash">
        <li className="cursor-pointer text-white">DashBoard</li>
      </Link>
    </ul>
  );
};
export default MainPage;
