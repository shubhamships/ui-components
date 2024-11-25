import React from "react";

const cardDimension = {
  primary: "w-full max-w-xs m-3 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 border rounded-lg sm:p-6 md:p-8",
  secondary: "w-full p-8 m-8 w-5/6 xl:w-full lg:w-5/6 md:w-4/5 sm:w-3/4 border rounded-xl",
};
const cardTheme = {
  defaultDark: "border-gray-200 shadow bg-gray-800 border-gray-700",
  defaultLight: "border-gray-200 shadow bg-white text-black",
};

interface CardProps {
  children: React.ReactNode;
  dimension?: keyof typeof cardDimension;
  className?: string;
  theme?: keyof typeof cardTheme;
}
function CardComponet({ children, dimension = "primary", theme = "defaultLight", className }: CardProps) {
  const baseClass = "rounded-lg shadow-sm";
  const DimensionClass = cardDimension[dimension];
  const ThemeClass = cardTheme[theme];
  return <div className={`${DimensionClass} ${baseClass} ${ThemeClass} ${className || ""}`}>{children}</div>;
}

export default CardComponet;
