import { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";
import Card from "./ui/Card";
import { se } from "date-fns/locale";
import { HeadRow } from "react-day-picker";

export const Log = () => {
  const [punchData, setPunchData] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [totalTime, setTotalTime] = useState<{ time: number; date: string }[]>(() => {
    const data = JSON.parse(localStorage.getItem("totalTime") || "[]");
    return data;
  });
  useEffect(() => {
    const punchData = JSON.parse(localStorage.getItem("punchData") || "[]");
    const newTotalTime = JSON.parse(localStorage.getItem("totalTime") || "[]");
    setPunchData(punchData);
    setTotalTime(newTotalTime);
  }, [selectedDate]);
  console.log(punchData, "punchDatahaa");
  // console.log(punchData[punchData.length - 1].time, "totalTime");
  const handleOnChange = (date: Date) => {
    setSelectedDate(date);
  };
  const filteredPunchData = punchData.filter(
    (log) => new Date(log.time).toDateString() === selectedDate.toDateString(),
  );
  const filteredTime = totalTime.filter((time) => new Date(time.date).toDateString() === selectedDate.toDateString());
  const punchDates = punchData.map((data) => new Date(data.time).toDateString());
  const lastLog = punchData[punchData.length - 1];
  //   console.log(selectedDate, "wggwg");
  //   console.log(filteredPunchData, "filteredPunchData");
  // console.log(totalTime[totalTime.length - 1].time, "totalTIme");

  console.log(punchDates, "filteredTime");

  return (
    <div className="flex justify-center bg-slate-100 h-screen">
      <div>
        <Calendar
          className="border shadow-lg bg-blue-50 rounded-lg mx-2 mt-12"
          mode="single"
          onDayClick={handleOnChange}
          classNames={{
            // cell: "md: w-16 h-12",
            head_row: "flex gap-3 md:gap-10 justify-center items-center",
            // day_today: "bg-blue-600 text-white hover:bg-blue-500 hover:text-white text-accent-foreground",
          }}
          punchDates={punchDates}
          selectedDate={selectedDate}
        />
        <div className="mt-4">
          <h2 className="font-bold text-primary pb-2">Log Data</h2>
          {filteredPunchData.map((log, index) => (
            <div key={index}>
              {index === 0 ? (
                <Card className="text-primary text-sm font-medium border-b</div>lue-700 bg-blue-200 bg-opacity-25 flex justify-around items-center">
                  <div>PunchIn Time</div>
                  {new Date(log.time).toLocaleTimeString()}
                </Card>
              ) : null}
              {log.type === "OUT" && index === punchData.length - 1 ? (
                <Card className="mt-2 text-sm font-medium text-green-700 border-green-500 bg-</Card>green-50 flex justify-around items-center">
                  <div>PunchOut Time</div>
                  {new Date(log.time).toLocaleTimeString()}
                </Card>
              ) : null}
            </div>
          ))}
          {lastLog && lastLog.type === "IN" && (
            <Card className="mt-2 text-sm font-medium text-green-700 border-green-500 bg-</Card>green-50 flex justify-around items-center">
              <div>PunchOut Time</div>
              <div>Waiting for punchOut</div>
            </Card>
          )}
          <div>
            {filteredTime.map((data, index) => (
              <div key={index}>
                {index === totalTime.length - 1 ? (
                  <Card className="flex justify-around items-center mt-5 border p-2 rounded-md text-sm font-medium text-purple-500 border-purple-500 bg-purple-50">
                    <div>Total Time:</div>
                    {`${Math.floor(data.time / 3600)} hours ${Math.floor((data.time % 3600) / 60)} minutes ${(
                      data.time % 60
                    ).toFixed(0)} seconds`}
                  </Card>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
