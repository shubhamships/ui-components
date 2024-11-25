import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import Card from "./ui/Card";
import { punchIn, punchOut } from "@/redux/actions";
import { useState } from "react";

export const MarkTime = () => {
  const [error, setError] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.punchInDate);
  const punchData = useSelector((state: any) => state.data);

  console.log(data, "fsdfsd");
  const handlePunchIn = () => {
    try {
      // save data in iso string or epoch time
      dispatch(punchIn(new Date().toISOString()));
      setIsDisabled(true);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handlePunchOut = () => {
    const time = new Date();
    const punchOutTime = time.getTime();
    const punchInTime = new Date(data).getTime(); // - epoch time in ms
    const totalTime = (punchOutTime - punchInTime) / 100;
    console.log(totalTime);
    console.log(new Date(data).getTime(), "asssssssbchdcjjsdhjdsh", punchOutTime - punchInTime);
    if (totalTime < 9) {
      setError(true);
      setIsCompleted(false);
      console.log("You have not completed 9 hours");
    } else {
      console.log("success");
      dispatch(punchOut(new Date().toISOString()));
      setError(false);
      setIsCompleted(true);
      setIsDisabled(false);
    }
  };
  console.log("isCompleted : ",isCompleted + " |" +  "isDisabled : " + isDisabled + " |"  +  " error : " + error );
  return (
    <>
      <div className="flex flex-col items-center h-screen w-full p-4 py-32 bg-slate-50">
        <h1 className="text-3xl font-semibold text-primary m-4">TimeLog</h1>
        <Card className="relative flex flex-col items-center h-full min-w-80 max-w-96 py-8 px-8 gap-2 bg-gray-50 shadow-sm overflow-auto">
          <Button
            title="Punch In"
            disabled={isDisabled}
            className={` ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} w-full sticky top-0`}
            type=""
            onClick={handlePunchIn}
          />
          <div className="flex flex-col justify-center w-full items-center gap-1 sticky top-11">
            <Button
              title="Punch Out"
              variant="success"
              disabled={!isDisabled}
              className={`${!isDisabled ? "cursor-not-allowed" : "cursor-pointer"} w-full`}
              onClick={handlePunchOut}
            />
            <div>
              {error && <span className="text-sm font-medium text-destructive">You have not Completed 9 hours</span>}
            </div>
          </div>
          <div className="overflow-y-scroll overflow-x-clip space-y-2 w-full mt-4">
            {punchData.punchData.map((item: any, index: number) => (
              <Card
                className={`flex justify-center items-center h-14 w-full px-16 gap-2 text-sm font-semibold  whitespace-nowrap border-none
                ${ index % 2 !== 0 ? "bg-green-50" : "bg-sky-50"}
                `}
                variant="default"
                key={index}
              >
                <div className="flex justify-around items-center gap-4">
                  <div className={`text-sm `}>
                    {index % 2 !== 0? (
                      <div className="text-sm text-success">Punch Out TIme {new Date(item.time).toLocaleTimeString()}</div>
                    ) : (
                      <div className="text-sm text-primary">Punch In Time {new Date(item.time).toLocaleTimeString()}</div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};
