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
  console.log(data, "fsdfsd");
  const handlePunchIn = () => {
    try {
      console.log("data", data); // save data in iso string or epoch time
      dispatch(punchIn(new Date()));
      setIsDisabled(true);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handlePunchOut = () => {
    const time = new Date();
    const punchOutTime = time.getTime();
    const punchInTime = data.getTime(); // - epoch time in ms
    const totalTime = (punchOutTime - punchInTime) / (100);
    console.log(totalTime);
    console.log(data.getTime(), "asssssssbchdcjjsdhjdsh", punchOutTime - punchInTime);
    if (totalTime < 9) {
      setError(true);
      setIsCompleted(false);
      console.log("You have not completed 9 hours");
    } else {
      setError(false);
      setIsCompleted(true);
      setIsDisabled(false);
      console.log("success");
      dispatch(punchOut(new Date()));
    }
  };
  console.log(data);
  return (
    <>
      <div className="flex justify-center items-center h-screen p-4 py-32">
        <Card className="flex flex-col justify-between items-center h-full py-8 px-8">
          <div className="flex flex-col justify-center items-center min-w-80 max-w-96 gap-2">
            <Button
              title="Punch In"
              disabled={isDisabled}
              className={`${isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              type=""
              onClick={() => handlePunchIn()}
            />
            {data && (
              <Card
                className="flex justify-center items-center h-14 w-full px-16 gap-2 text-sm font-semibold bg-purple-100 whitespace-nowrap"
                variant="default"
              >
                <p className="text-purple-600 text-sm">{isCompleted ? "Attendance Marked" : data.toUTCString()}</p>
              </Card>
            )}
          </div>

          <div className="flex flex-col justify-end items-center gap-1">
            <Button
              title="Punch Out"
              variant="success"
              disabled={!isDisabled}
              className={`${!isDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              onClick={() => handlePunchOut()}
            />
            <div>
              {error && <span className="text-sm font-medium text-destructive">You have not Completed 9 hours</span>}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
