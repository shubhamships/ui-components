import LoginCard from "./pages/LoginCard";

const Root = () => {
  const BlueColorPalette = {
    bgColor: "bg-popup-image1",
    textColor: "text-blue-900",
    inputBgColor: "bg-white/60",
    buttonBgColor: "bg-white/20 text-blue-900",
    spanColor: "text-blue-950",
    popupBgColor: "bg-gradient-to-br from-white to-blue-500",
    popupButton: "bg-blue-950 text-white",
    inputBorder: "focus:ring-blue-800 border border-blue-600",
    placeholder: "placeholder:text-slate-900",
  };

  const PurpleColorPalette = {
    bgColor: "bg-popup-image2",
    textColor: "text-slate-900",
    inputBgColor: "bg-white/10",
    buttonBgColor: "bg-white/10 text-slate-950",
    spanColor: "text-black",
    popupBgColor: "bg-gradient-to-br from-purple-300 via-blue-200 to-pink-400",
    popupButton: "bg-slate-800 text-white",
    inputBorder: "focus:ring-blue-500 border border-blue-300",
    placeholder: "placeholder:text-slate-900",
  };

  const GreenColorPalette = {
    bgColor: "bg-popup-image3",
    textColor: "text-white",
    inputBgColor: "bg-green-100/50",
    buttonBgColor: "bg-white/10 text-green-950",
    spanColor: "text-green-950",
    popupBgColor: "bg-gradient-to-br from-green-700 via green-300 to-white",
    popupButton: "bg-green-950 text-white",
    inputBorder: "focus:ring-green-500 border border-green-400",
    placeholder: "placeholder:text-slate-900",
  };

  const BlackColorPalette = {
    bgColor: "bg-popup-image4",
    textColor: "text-white",
    inputBgColor: "bg-black/20",
    buttonBgColor: "bg-black/10 text-white",
    spanColor: "text-pink-700",
    popupBgColor: "bg-gradient-to-br from-pink-500 via-blue-300 via-40% to-white",
    popupButton: "bg-pink-300 text-pink-900",
    inputBorder: "focus:ring-slate-700 border border-slate-600",
    placeholder: "placeholder:text-white",
  };

  return (
    <div>
      <LoginCard {...BlueColorPalette} />
      <LoginCard {...PurpleColorPalette} />
      <LoginCard {...GreenColorPalette} />
      <LoginCard {...BlackColorPalette} />
    </div>
  );
};

export default Root;
