import Button from "./ui/Button";
import Card from "./ui/Card";
import { useState, useEffect } from "react";

export const MarkTime = () => {
  const [netTime, setNetTime] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [punchInDisabled, setPunchInDisabled] = useState<boolean>();
  const [punchOutDisabled, setPunchOutDisabled] = useState<boolean>();
  const [punchData, setPunchData] = useState<{ id: number; time: string; type: string }[]>(() => {
    const storedData = localStorage.getItem("punchData");
    return storedData ? JSON.parse(storedData) : [];
  });
  useEffect(() => {
    const storedButtonData = localStorage.getItem("buttonPunchInData");
    const storedButtonData1 = localStorage.getItem("buttonPunchOutData");
    setPunchInDisabled(storedButtonData ? JSON.parse(storedButtonData) : false);
    setPunchOutDisabled(storedButtonData1 ? JSON.parse(storedButtonData1) : true);
    const storedNetTime = localStorage.getItem("netTime");
    setNetTime(storedNetTime ? JSON.parse(storedNetTime) : 0);
  }, []);
  const handlePunchIn = () => {
    try {
      if (punchData.length === 0 || punchData[punchData.length - 1].type === "OUT") {
        const newPunchInData = [
          ...punchData,
          {
            id: punchData.length,
            time: new Date().toISOString(),
            type: "IN",
          },
        ];
        setPunchData(newPunchInData);
        localStorage.setItem("punchData", JSON.stringify(newPunchInData));
      }
      setPunchInDisabled(true);
      setPunchOutDisabled(false);
      localStorage.setItem("buttonPunchInData", JSON.stringify(true));
      localStorage.setItem("buttonPunchOutData", JSON.stringify(false));
    } catch (error) {
      console.log("error", error);
    }
  };
  const handlePunchOut = () => {
    const time = new Date();
    const punchOutTime = time.getTime();
    const punchInTime = new Date(punchData[punchData.length - 1].time).getTime();
    console.log("success");
    if (punchData.length === 0 || punchData[punchData.length - 1].type === "IN") {
      const newPunchOutData = [
        ...punchData,
        {
          id: punchData.length,
          time: new Date().toISOString(),
          type: "OUT",
        },
      ];
      setPunchData(newPunchOutData);
      localStorage.setItem("punchData", JSON.stringify(newPunchOutData));

      const newNetTime = (punchOutTime - punchInTime) / 1000 + netTime;
      setNetTime(newNetTime); // time in seconds
      localStorage.setItem("netTime", JSON.stringify(newNetTime));
    }
    setIsCompleted(true);
    setPunchInDisabled(false);
    setPunchOutDisabled(true);
    localStorage.setItem("buttonPunchInData", JSON.stringify(false));
    localStorage.setItem("buttonPunchOutData", JSON.stringify(true));
  };
  const reversedData = punchData.slice().reverse();
  return (
    <>
      <div className="flex flex-col items-center h-screen w-full p-4 pt-11 bg-slate-50">
        <h1 className="text-3xl font-semibold text-primary m-4">Time Log</h1>
        <Card className="relative flex flex-col items-center h-full mb-11 min-w-80 max-w-96 py-4 px-8 gap-2 bg-gray-50 shadow-sm overflow-auto">
          <div className="text-sm font-semibold text-primary text-center contrast-200 sticky top-0">
            <div>Total time elapsed</div>
            {`${Math.floor(netTime / 3600)} hours ${Math.floor((netTime % 3600) / 60)} minutes ${(netTime % 60).toFixed(
              0,
            )} seconds`}
          </div>
          <Button
            title="Punch In"
            disabled={punchInDisabled}
            className={` ${
              punchInDisabled ? "cursor-not-allowed bg-opacity-60 hover:bg-opacity-60 " : "cursor-pointer"
            } w-full sticky top-8`}
            onClick={handlePunchIn}
          />
          <Button
            title="Punch Out"
            variant="success"
            disabled={punchOutDisabled}
            className={`${
              punchOutDisabled ? "cursor-not-allowed bg-opacity-60 hover:opacity-60" : "cursor-pointer"
            } w-full sticky-top-20`}
            onClick={handlePunchOut}
          />
          <div className="py-2 h-full scroll-auto overflow-auto mt-4 overflow-x-clip">
            <div className="space-y-2 w-full mt-4">
              {reversedData.map((item: any, index: number) => (
                <Card
                  className={`flex justify-center items-center px-14 h-14 w-full gap-2 text-sm font-semibold whitespace-nowrap
                ${item.type === "OUT" ? "border border-green-500" : "border border-primary"}
                `}
                  variant="default"
                  key={index}
                >
                  <div className="flex justify-around items-center gap-4">
                    <div className={`text-sm tracking-wide `}>
                      {item.type === "OUT" ? (
                        <div className="text-sm text-success">
                          Punch Out TIme {new Date(item.time).toLocaleTimeString()}
                        </div>
                      ) : (
                        <div className="text-sm text-primary">
                          Punch In Time {new Date(item.time).toLocaleTimeString()}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
