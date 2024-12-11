import { MarkTime } from "./components/MarkTime";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Calendar, Clock, House } from "lucide-react";
import { Root } from "./routes/Root";
import { Log } from "./components/Log";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex justify-center items-center fixed bottom-0 w-full border">
          <ul className="flex justify-between md:justify-center items-center bg-white gap-6 p-2 px-8 w-full">
            <MenuLink name="Home" route="/" iconName={<House className="w-5 h-5 text-gray-500" />} />
            <MenuLink name="Log" route="login" iconName={<Calendar className="w-5 h-5 text-gray-500" />} />
            <MenuLink name="Timelog" route="timelog" iconName={<Clock className="w-5 h-5 text-gray-500" />} />
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="login" element={<Log />} />
            <Route path="timelog" element={<MarkTime />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

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
        <div className={`flex flex-col justify-center items-center text-gray-500 ${className}`}>
          <span>{iconName}</span>
          <div className={`text-xs ${className}`}>{name}</div>
        </div>
      </Link>
    </li>
  );
};

export default App;
