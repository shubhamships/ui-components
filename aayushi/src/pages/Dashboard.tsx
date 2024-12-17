import { Sidebar } from "../components/SideBar";
import Logo from "../assets/logo.png";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
    <div className="flex justify-between space-y-2 items-center mx-6 pb-2 border-b-2 border-gray-200">
      <Link to="/"> 
        <img src={Logo} className="h-6"/>
      </Link>
      <Button type="Logout" className="w-20 px-2 py-0.5"/>
    </div>
    <div className="flex flex-1">
      <Sidebar  className="bg-blue-700 text-blue-200"
      colorSchema={{
        text: 'text-blue-500',
        hoverText: 'group-hover:text-blue-500',
        hoverBorder: 'hover:border-blue-50',
        clickBorder:'border-blue-50',
        clickBg:'bg-white',
        hoverBg: 'hover:bg-white',
      }}/>
    </div>
  </div>
  );
};
