// import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import Card from "./ui/Card";
// import { punchIn, punchOut } from "@/redux/actions";
import { useState } from "react";
import Errors from "./ui/Errors";

export const MarkTime = () => {
  const [error, setError] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [punchData, setPunchData] = useState<{ id: number; time: string; type: string }[]>([]);
  // const [fieldDisAbled, setFieldDisAbled] = useState("PUNCHIN");

  // Redux
  // const dispatch = useDispatch();
  // const data = useSelector((state: any) => state.data.punchInDate);
  // const punchData = useSelector((state: any) => state.data);
  // const type = punchData.punchData[punchData.punchData.length - 1]?.type;

  // console.log(punchData.punchData.id, "fsdfsd");

  // on punch in - save time in punchintim and type in
  // on punch out - save time in punchouttime and type out

  const handlePunchIn = () => {
    try {
      // save data in iso string or epoch time
      // if (punchData.punchData.length === 0 ||
      //   type  === "OUT") {
      //   dispatch(punchIn(new Date().toISOString()));
      // }
      if (punchData.length === 0 || punchData[punchData.length - 1].type === "OUT") {
        setPunchData([
          ...punchData,
          {
            id: punchData.length,
            time: new Date().toISOString(),
            type: "IN",
          },
        ]);
        setIsDisabled(true);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(punchData);
  const handlePunchOut = () => {
    const time = new Date();
    const punchOutTime = time.getTime();
    const punchInTime = new Date(punchData[punchData.length - 1].time).getTime();
    // const punchInTime = new Date(punchData.length - 1).getTime(); // - epoch time in ms
    const totalTime = (punchOutTime - punchInTime) / 100;
    console.log(totalTime);
    console.log(
      new Date(punchData[punchData.length - 1].time).getTime(),
      "total time in ms",
      punchOutTime - punchInTime,
    );
    if (totalTime < 9) {
      setError(true);
      setIsCompleted(false);
      console.log("You have not completed 9 hours");
    } else {
      console.log("success");
      if (punchData.length === 0 || punchData[punchData.length - 1].type === "IN") {
        setPunchData([
          ...punchData,
          {
            id: punchData.length,
            time: new Date().toISOString(),
            type: "OUT",
          },
        ]);
      }
      // if(punchData.punchData.length > 0 && type === "IN"){
      //   dispatch(punchOut(new Date().toISOString()));
      // }
      setError(false);
      setIsCompleted(true);
      setIsDisabled(false);
    }
  };
  // console.log(punchData.punchData.id, "Data type")

  // console.log("id", punchData.punchData.id);
  // console.log(punchData.punchData, "punchData");
  console.log("isCompleted : ", isCompleted + " |" + "isDisabled : " + isDisabled + " |" + " error : " + error);
  return (
    <>
      <div className="flex flex-col items-center h-screen w-full p-4 pt-11 bg-slate-50">
        <h1 className="text-3xl font-semibold text-primary m-4">TimeLog</h1>
        <Card className="relative flex flex-col items-center h-full min-w-80 max-w-96 py-8 px-8 gap-2 bg-gray-50 shadow-sm overflow-auto">
          <Button
            title="Punch In"
            disabled={isDisabled}
            className={` ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} w-full sticky top-0`}
            type=""
            // disabled={fieldDisAbled==='PUNCHIN'}
            onClick={handlePunchIn}
          />
          <div className="flex flex-col justify-center w-full items-center gap-2 sticky top-11">
            <Button
              title="Punch Out"
              variant="success"
              disabled={!isDisabled}
              className={`${!isDisabled ? "cursor-not-allowed" : "cursor-pointer"} w-full`}
              onClick={handlePunchOut}
            />
            <Errors name={error} errorDescription={`Time elapsed `} className="text-sm font-medium" />
          </div>
          <div className="scroll-auto overflow-x-clip space-y-2 w-full mt-4">
            {punchData.map((item: any, index: number) => (
              <Card
                className={`flex justify-center items-center h-14 w-ful gap-2 text-sm font-semibold  whitespace-nowrap border-none
                ${item.type === "OUT" ? "bg-green-100" : "bg-blue-100"}
                `}
                variant="default"
                key={index}
              >
                <div className="flex justify-around items-center gap-4">
                  <div className={`text-sm tracking-wide `}>
                    {item.type === "OUT" ? (
                      <div className="text-sm text-success">
                        Punch Out TIme {new Date(item.time).toLocaleTimeString()} {index}
                      </div>
                    ) : (
                      <div className="text-sm text-primary">
                        Punch In Time {new Date(item.time).toLocaleTimeString()} {index}
                      </div>
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
