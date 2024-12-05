import { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";
import Card from "./ui/Card";

export const Log = () => {
  const [punchData, setPunchData] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  //   const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    const punchData = JSON.parse(localStorage.getItem("punchData") || "[]");
    // const totalTime = JSON.parse(localStorage.getItem("netTime") || "0");
    setPunchData(punchData);
    // setTotalTime(totalTime);
  }, [selectedDate]);
  console.log(punchData, "punchDatahaa");
  const totalTime = 20;
  //   console.log(punchData[punchData.length - 1].time, "totalTime");
  const handleOnChange = (date: Date) => {
    setSelectedDate(date);
  };
  const filteredPunchData = punchData.filter(
    (log) => new Date(log.time).toDateString() === selectedDate.toDateString(),
  );
  //   console.log(selectedDate, "wggwg");
  //   console.log(filteredPunchData, "filteredPunchData");
  return (
    <div className="flex justify-center bg-slate-100 h-screen">
      <div>
        <Calendar
          className="border shadow-lg bg-blue-50 rounded-lg mx-2 mt-12"
          mode="single"
          onDayClick={handleOnChange}
          classNames={{ cell: "p-1", day_today: "bg-blue-600 text-white hover:bg-blue-500 hover:text-white text-accent-foreground", day_selected: "bg-primary text-primary-foreground" }}
        />
        <div className="mt-4">
          <h2 className="font-bold text-primary pb-2">Log Data</h2>
          {filteredPunchData.map((log, index) => (
            <div key={index}>
              {index === 0 ? (
                <Card className="text-primary text-sm font-medium border-blue-700 bg-blue-200 bg-opacity-25 flex justify-around items-center">
                  <div>PunchIn Time</div>
                  {new Date(log.time).toLocaleTimeString()}
                </Card>
              ) : null}
              {index === punchData.length - 1 ? (
                <Card className="mt-2 text-sm font-medium text-green-700 border-green-500 bg-green-50 flex justify-around items-center">
                  <div>PunchOut Time</div>
                  {new Date(log.time).toLocaleTimeString()}
                </Card>
              ) : null}
            </div>
          ))}
          <div className="mt-5 border p-2 rounded-md text-sm font-medium text-purple-500 border-purple-500 bg-purple-50">
            Total Time:{" "}
            {`${Math.floor(totalTime / 3600)} hours ${Math.floor((totalTime % 3600) / 60)} minutes ${(
              totalTime % 60
            ).toFixed(0)} seconds`}
          </div>
        </div>
      </div>
    </div>
  );
};
