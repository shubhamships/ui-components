import {
  Box,
  Users,
  Truck,
  Wallet,
  Layers,
  Package2,
  Calculator,
  LayoutDashboard,
  CircleChevronLeft,
  CircleChevronRight,
} from "lucide-react";
import { useState } from "react";
import { NavItem } from "./NavItem";
import { NavIcon } from "./NavIcon";

const sidebarItems = [
  { id: 1, icon: <LayoutDashboard />, text: "Dashboard" },
  { id: 2, icon: <Box />, text: "Orders" },
  { id: 3, icon: <Users />, text: "Customers" },
  { id: 4, icon: <Package2 />, text: "Manifest" },
  { id: 5, icon: <Truck />, text: "Pickups" },
  { id: 6, icon: <Calculator />, text: "Rate Calculator" },
  { id: 7, icon: <Wallet />, text: "Wallet" },
  { id: 8, icon: <Layers />, text: "Bulk Report" },
];

export const Sidebar = ({ className, colorSchema }: { className: string; colorSchema?: any }) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleClick = (index: number) => {
    setActiveId(index);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const iconClass =
    "text-blue-50 bg-blue-600 rounded-full z-10 cursor-pointer transform transition-transform ease-in-out duration-200";
  const colors = `${colorSchema.clickBg} ${colorSchema.clickBorder} ${colorSchema.text}`;

  return (
    <div className={`flex space-8 gap-2 relative font-semibold`}>
      <div className="absolute top-0 -right-7 p-4 z-10">
        <div className={iconClass} onClick={toggleSidebar}>
          {isSidebarVisible ? <CircleChevronLeft /> : <CircleChevronRight />}
        </div>
      </div>
      <div
        className={`flex flex-col space-y-4 p-4 w-full transform transition-transform ease-in-out duration-200 ${className} 
        ${isSidebarVisible ? "translate-x-0" : "-translate-x-1"}`}
      >
        {sidebarItems.map((item, _) => (
          <div
            key={item.id}
            className={`group flex items-center space-x-2 p-2 rounded-md cursor-pointer hover:font-semibold 
        ${activeId === item.id && colors}  
        ${colorSchema.hoverBorder} ${colorSchema.hoverBg}`}
            onClick={() => handleClick(item.id)}
          >
            <NavIcon icon={item.icon} className={`group-hover:${colorSchema.text}`} />
            {isSidebarVisible && <NavItem text={item.text} className={`group-hover:${colorSchema.text}`} />}
          </div>
        ))}
      </div>
    </div>
  );
};
