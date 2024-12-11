import Card from "./ui/Card";

export const RenderCards = ({ reversedData }: { reversedData: any }) => {
  return (
    <>
      {reversedData.map((item: any, index: number) => (
        <Card
          className={`flex justify-center items-center px-14 h-14 w-full gap-2 text-sm font-semibold whitespace-nowrap transition ease-in duration-200
                ${item.type === "OUT" ? "border border-green-500" : "border border-primary"}
                `}
          variant="default"
          key={index}
        >
          <div className="flex justify-around items-center gap-4">
            <div className={`text-sm tracking-wide `}>
              {item.type === "OUT" ? (
                <div className="text-sm text-success">Punch Out TIme {new Date(item.time).toLocaleTimeString()}</div>
              ) : (
                <div className="text-sm text-primary">Punch In Time {new Date(item.time).toLocaleTimeString()}</div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
