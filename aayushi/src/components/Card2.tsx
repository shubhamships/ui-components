import { Link } from "react-router-dom";

export const Card2 = () => {
  return (
    <Link to="#" className={`rounded-lg m-4 h-36 bg-gray-100 w-1/2 p-2 `}>
      <div className="flex flex-col items-center justify-center p-auto">
        
        <p className="text-sm text-gray-500 text-center">Manifest</p>
        <div className="flex flex-row space-x-4 items-center">
            <div className="bg-white w-16 h-20 flex flex-col space-y-2 items-center">
                <p>02</p>
                <p className="bg-green-100 border border-green-700 rounded-2xl text-green-700 text-sm w-10">open</p>
            </div>
            <div className="bg-white w-16 h-20">
                <p >04</p>
                <p className="bg-red-100 border border-red-700 rounded-2xl text-red-700 text-sm">closed</p>
            </div>
        </div>

        <button className="bg-gray-100 cursor-pointer rounded-md mt-2">View</button>
      </div>
    </Link>
  );
};
