import { X } from "lucide-react";

interface IToastData {
  message: string;
  onClose: () => void;
}
export const Toast = ({ message, onClose }: IToastData) => {
  return (
    <div className="relative bg-white border-2 border-green-600 rounded-md py-4 px-2 flex justify-center items-center gap-2 text-sm">
      <div className="text-black pr-5">{message}</div>
      <button onClick={onClose} className="absolute top-1 right-1 bg-white hover:bg-red-500 hover:text-white rounded-sm text-xs">
        <X className="h-4 w-4"/>
      </button>
    </div>
  );
};
