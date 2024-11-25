import Popup from "../popup/Popup";

interface ColorProps {
  bgColor: string;
  glassBgColor: string;
  textColor: string;
  inputBgColor: string;
  buttonBgColor: string;
  spanColor: string;
  popupBgColor: string;
  popupButton: string;
  inputBorder: string;
}

interface PopupColorsProps {
  colors: ColorProps;
}

const PopupColors = ({ colors }: PopupColorsProps) => {
  return <Popup {...colors} />;
};

export default PopupColors;
