import PopupColors from "./components/PopupColors";

const Root = () => {
  const BlueColorPalette = {
    bgColor: "bg-gradient-to-br from-[#4335A7] via-white to-[#4335A7]",
    glassBgColor: "bg-white/20",
    textColor: "text-blue-900",
    inputBgColor: "bg-white/60",
    buttonBgColor: "bg-white/10 text-blue-900",
    spanColor: "text-blue-950",
    popupBgColor: "bg-gradient-to-br from-white to-[#4335A7]",
    popupButton: "bg-[#4335A7] text-white",
    inputBorder: "focus:ring-blue-800 border border-blue-600",
  };

  const LightBlueColorPalette = {
    bgColor: "bg-gradient-to-br from-[#80C4E9] via-blue-100 to-white",
    glassBgColor: "bg-white/30",
    textColor: "text-blue-950",
    inputBgColor: "bg-white/50",
    buttonBgColor: "bg-white/30 text-blue-950",
    spanColor: "text-blue-700",
    popupBgColor: "bg-gradient-to-br from-[#80C4E9] to-white",
    popupButton: "bg-[#80C4E9] text-white",
    inputBorder: "focus:ring-blue-400 border border-blue-300",
  };

  const OrangeColorPalette = {
    bgColor: "bg-gradient-to-br from-[#FF7F3E] via-orange-300 to-white",
    glassBgColor: "bg-white/20",
    textColor: "text-white",
    inputBgColor: "bg-orange-200/40",
    buttonBgColor: "bg-white/10 text-orange-800",
    spanColor: "text-orange-800",
    popupBgColor: "bg-gradient-to-br from-[#FF7F3E] to-white",
    popupButton: "bg-[#FF7F3E] text-white",
    inputBorder: "focus:ring-orange-500 border border-orange-400",
  };

  const PinkColorPalette = {
    bgColor: "bg-gradient-to-br from-pink-200 to-white",
    glassBgColor: "bg-white/40",
    textColor: "text-pink-700",
    inputBgColor: "bg-white/30",
    buttonBgColor: "bg-pink-200/20 text-pink-700",
    spanColor: "text-pink-900",
    popupBgColor: "bg-gradient-to-br from-white to-pink-200",
    popupButton: "bg-pink-200 text-pink-600",
    inputBorder: "focus:ring-pink-400 border border-pink-200",
  };

  return (
    <div>
      <PopupColors colors={BlueColorPalette} />
      <PopupColors colors={LightBlueColorPalette} />
      <PopupColors colors={OrangeColorPalette} />
      <PopupColors colors={PinkColorPalette} />
    </div>
  );
};

export default Root;
