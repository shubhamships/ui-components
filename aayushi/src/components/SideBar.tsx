import { LayoutDashboard, Box, Users, Package2, Truck, Calculator, Wallet, Layers } from "lucide-react";
import { NavItem } from "./NavItem";
import { NavIcon } from "./NavIcon";
import { useState, useRef } from "react";

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

export const Sidebar = ({ className, colorScheme }: { className: string; colorScheme?: any }) => {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null); // Initialize activeId as null
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoverId(index);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoverId(null);
    }, 500);
  };

  const handleClick = (index: number) => {
    setActiveId(index); 
  };

  return (
    <div className={`h-screen flex flex-row space-8 gap-2`}>
      <div className={`flex flex-col items-center space-y-4 px-1 py-4 rounded-md cursor-pointer ${className}`}>
        {sidebarItems.map((item, index) => (
          <div
            key={item.id} 
            className={`group flex flex-col items-center p-2 rounded-md 
              ${activeId === item.id ? `${colorScheme.clickBg} ${colorScheme.clickBorder} ${colorScheme.text}` : ''}
              ${colorScheme.hoverBorder} ${colorScheme.hoverBg}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item.id)} 
          >
            <NavIcon
              icon={item.icon}
              className={`group-hover:${colorScheme.text} transition-all`}
            />
          </div>
        ))}
      </div>

      {hoverId !== null && (
        <div
          className={`flex flex-col space-y-4 px-4 rounded-md py-4 w-full ${className}`}
          onMouseEnter={() => setHoverId(hoverId)}
          onMouseLeave={handleMouseLeave}
        >
          {sidebarItems.map((item, index) => (
            <div
              key={item.id} 
              className={`group flex flex-row items-center space-x-2 p-2 rounded-md cursor-pointer hover:font-semibold
                ${activeId === item.id ? `${colorScheme.clickBg} ${colorScheme.clickBorder} ${colorScheme.text}` : ''}
                ${colorScheme.hoverBorder} ${colorScheme.hoverBg}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(item.id)}
            >
              <NavIcon
                icon={item.icon}
                className={`group-hover:${colorScheme.text} transition-all`}
              />
              <NavItem
                text={item.text}
                className={`group-hover:${colorScheme.text} transition-all`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
