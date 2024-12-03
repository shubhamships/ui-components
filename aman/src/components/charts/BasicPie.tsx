import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      width={250}
      height={200}
      colors={["red", "blue", "green"]}
      series={[
        {
          data: [
            { value: 10, color: "orange" },
            { value: 30, color: "red" },
            { value: 70, color: "green" },
          ],
          cx: 90,
        },
      ]}
    />
  );
}
