import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface IToastData {
  message: string;
}
export const Toast = ({ message }: IToastData) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const closeToast = () => {
    setShowToast(false);
  };
  useEffect(() => {
    showToastMessage(message);
  }, [message]);

  return (
    <div className="relative bg-white border-2 border-green-600 rounded-md py-4 px-2 flex justify-center items-center gap-2 text-sm">
      {showToast && <div className="text-black pr-5">{toastMessage}</div>}
      <button
        onClick={closeToast}
        className="absolute top-1 right-1 bg-white hover:bg-red-500 hover:text-white rounded-sm text-xs"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};
