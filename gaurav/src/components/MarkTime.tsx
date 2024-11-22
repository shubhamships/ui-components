import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import Card from "./ui/Card";
import { punchIn } from "@/redux/actions";

export const MarkTime = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  const handlePunchIn = () => {
    try {
      dispatch(punchIn(data));
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(data.data);
  return (
    <>
      <div className="flex justify-center h-dvh items-center p-4">
        <Card className="flex flex-col justify-between items-center md:mb-18 h-full p-4">
          <div className="flex flex-col justify-center items-center w-96 gap-2">
            <Button title="Punch In" className="" onClick={() => handlePunchIn()} />
            {data.data.length > 0 &&
              data.data.map((info:any, index:number) => (
                <Card
                  className="flex justify-center items-center h-14 w-full gap-2 text-sm font-semibold"
                  variant="default"
                >
                  <p className="text-purple-600 text-sm">{info.date}</p>
                  <p className="text-purple-600 text-sm">{info.time}</p>
                </Card>
              ))}
          </div>

          <div className="flex flex-col justify-end items-center gap-1">
            <Button title="Punch Out" variant="success" />
            <p className="text-red-500 text-sm">You have not completed 9 hours</p>
          </div>
        </Card>
      </div>
    </>
  );
};
