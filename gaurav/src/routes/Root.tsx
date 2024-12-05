import { Calendar, Clock, House, } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <>
      <div className="flex justify-center items-center fixed bottom-0 w-full">
        <ul className="flex justify-between md:justify-center items-center bg-primary gap-6 p-2 px-4 w-full">
          <MenuLink name="Home" route="/" iconName={<House className="w-5 h-5 text-white" />} />
          <MenuLink name="Log" route="login" iconName={<Calendar className="w-5 h-5 text-white" />} />
          <MenuLink name="Timelog" route="timelog" iconName={<Clock className="w-5 h-5 text-white" />} />
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
const MenuLink = ({
  name,
  iconName,
  route,
  className,
}: {
  name: string;
  iconName?: React.ReactNode;
  route: string;
  className?: string;
}) => {
  return (
    <li className={`text-gray-200 font-medium ${className}`}>
      <Link to={route}>
        <div className={`flex flex-col justify-center items-center ${className}`}>
          <span>{iconName}</span>
          <div className={`text-xs ${className}`}>{name}</div>
        </div>
      </Link>
    </li>
  );
};
