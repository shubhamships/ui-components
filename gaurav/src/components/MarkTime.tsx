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
      setError(false);
      setIsCompleted(true);
      setIsDisabled(false);
      console.log("success");
      dispatch(punchOut(new Date().toISOString()));
    }
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen p-4 py-32">
        <Card className="flex flex-col items-center h-full py-8 px-8 w-96 gap-2 bg-gray-50 shadow-sm">
          <Button
            title="Punch In"
            disabled={isDisabled}
            className={`${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} w-full`}
            type=""
            onClick={() => handlePunchIn()}
          />
          <div className="flex flex-col justify-center w-full items-center gap-1">
            <Button
              title="Punch Out"
              variant="success"
              disabled={!isDisabled}
              className={`${!isDisabled ? "cursor-not-allowed" : "cursor-pointer"} w-full`}
              onClick={() => handlePunchOut()}
            />
            <div>
              {error && <span className="text-sm font-medium text-destructive">You have not Completed 9 hours</span>}
            </div>
          </div>
          {punchData.punchData.map((item: any, index: number) => (
            <Card
              className={`flex justify-center items-center h-14 w-full px-16 gap-2 text-sm font-semibold  whitespace-nowrap border-none
                ${isCompleted && index % 2 === 0 ? "bg-green-50" : "bg-sky-50"}
                `}
              variant="default"
              key={index}
            >
              <div className="flex justify-around items-center gap-4">
                <div className={`text-sm ${isCompleted && index % 2 === 0 ? "text-success" : "text-primary"}`}>
                  {isCompleted && index % 2 === 0 ? (
                    <div className="text-sm">Punch Out TIme {new Date(item.time).toLocaleTimeString()}</div>
                  ) : (
                    <div className="text-sm">Punch In Time {new Date(item.time).toLocaleTimeString()}</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </Card>
      </div>
    </>
  );
};
