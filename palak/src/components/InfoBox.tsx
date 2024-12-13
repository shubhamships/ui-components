import { BsPerson } from "react-icons/bs";
interface InfoBoxProps {
  title: string;
  text: string;
}
const InfoBox = ({ title, text }: InfoBoxProps) => {
  return (
    <div className="border border-gray-100 w-full max-h-max rounded-lg">
      <div className="flex p-3 gap-x-3">
        <div className="w-10 h-10 rounded-lg bg-blue-100">
          <BsPerson className="w-5 h-5 text-blue-800 m-2.5" />
        </div>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-gray-400 text-xs">{text}</p>
        </div>
      </div>
    </div>
  );
};
export default InfoBox;
