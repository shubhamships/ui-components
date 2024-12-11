import { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";
import Card from "./ui/Card";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./ui/personal/Button";

export const Log = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [showLogData, setShowLogData] = useState<boolean>(false);
  const [punchData, setPunchData] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const dateData = queryParams.get("date");
    return dateData ? new Date(dateData) : new Date();
  });
  const [totalTime, setTotalTime] = useState<{ time: number; date: string }[]>(() => {
    const data = JSON.parse(localStorage.getItem("totalTime") || "[]");
    return data;
  });

  // Fetching data from local storage
  useEffect(() => {
    const punchData = JSON.parse(localStorage.getItem("punchData") || "[]");
    const newTotalTime = JSON.parse(localStorage.getItem("totalTime") || "[]");
    setPunchData(punchData);
    setTotalTime(newTotalTime);
  }, []);
  console.log(punchData, "punchDatahaa");

  // Handling the date change
  const handleOnChange = (date: Date) => {
    setSelectedDate(date);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("date", date.toISOString().split("T")[0]);
    setShowLogData(false);
  };

  // Handling the click event
  const handleOnClick = (date: Date) => {
    setShowLogData(!showLogData);
    navigate(`/timelog?date=${date.toISOString().split("T")[0]}`);
  };

  // Filtering the data based on the selected date
  const filteredPunchData = punchData.filter(
    (log) => new Date(log.time).toDateString() === selectedDate.toDateString(),
  );
  const filteredTime = totalTime.filter((time) => new Date(time.date).toDateString() === selectedDate.toDateString());
  const punchDates = punchData.map((data) => new Date(data.time).toDateString());
  const lastLog = filteredPunchData[filteredPunchData.length - 1];

  return (
    <div className="flex justify-center bg-gradient-to-b from-purple-200 to-blue-100 h-screen">
      <div className="">
        <Calendar
          className="border shadow-lg bg-blue-50 rounded-lg mx-5 mt-12"
          mode="single"
          onDayClick={handleOnChange}
          classNames={{
            head_row: "flex gap-3 md:gap-10 mt-2 justify-center items-center",
          }}
          punchDates={punchDates}
          selectedDate={selectedDate}
        />
        <div className="mt-4 bg-slate-50 p-4 rounded mx-4">
          <h2 className="font-bold text-gray-800 pb-2">Log Data</h2>
          {filteredPunchData.map((log, index) => (
            <div key={index}>
              {index === 0 ? (
                <Card className="text-primary text-sm font-medium border-primary bg-white bg-opacity-25 flex justify-around items-center">
                  <div>PunchIn Time</div>
                  {new Date(log.time).toLocaleTimeString()}
                </Card>
              ) : null}
              {log.type === "OUT" && index === filteredPunchData.length - 1 ? (
                <Card className="mt-2 text-sm font-medium text-green-700 border-green-500 bg-</Card>green-50 flex justify-around items-center">
                  <div>PunchOut Time</div>
                  {new Date(log.time).toLocaleTimeString()}
                </Card>
              ) : null}
            </div>
          ))}
          {lastLog && new Date().toDateString() === new Date(lastLog.time).toDateString() && lastLog.type === "IN" && (
            <Card className="mt-2 text-sm font-medium text-yellow-700 border-yellow-500 bg-</Card>green-50 flex justify-around items-center">
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

          <div className="flex flex-col justify-center items-center mt-5 w-full">
            <Button
              variant="default"
              title={showLogData ? "Hide Details" : "Show Details"}
              className="px-28 w-full"
              onClick={() => handleOnClick(selectedDate)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};