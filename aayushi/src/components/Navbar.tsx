import imgSrc from "../assets/img.png";
import { NavItem } from "./NavItem";
export const Navbar = () => {
  return (
    <div className="grid grid-cols-2 p-8 m-2">
      <img src={imgSrc} className="h-14 hover:opacity-70" />

      <ul className="flex flex-row justify-end space-x-12 mr-14 m-8 font-bold ">
        <NavItem href="#">Projects</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Say Hi !</NavItem>
      </ul>
    </div>
  );
};
