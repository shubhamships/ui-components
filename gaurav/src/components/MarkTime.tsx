import Button from "./ui/Button";
import Card from "./ui/Card";

export const MarkTime = () => {
  return (
    <>
      <div className="flex justify-center h-dvh items-center p-4">
        <Card className="flex flex-col justify-between items-center md:mb-18 h-full p-4">
          <div className="flex flex-col justify-center items-center w-96 gap-2">
            <Button title="Punch In" className="" />
            <Card className="shadow-none bg-white w-full space-y-2">
              <Card className="flex justify-center items-center h-14 w-full gap-2 text-sm font-semibold" variant="default">
                  <p className="text-purple-600 text-sm">22-Nov-2024</p>
                  <p className="text-purple-600 text-sm">09:30 am</p>
              </Card>
              <Card className="flex justify-center items-center h-14 w-full gap-2 text-sm font-semibold" variant="default">
                  <p className="text-purple-600 text-sm">21-Nov-2024</p>
                  <p className="text-purple-600 text-sm">09:30 am</p>
              </Card>
            </Card>
            
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
