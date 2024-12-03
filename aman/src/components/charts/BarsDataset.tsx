import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { Dataset, valueFormatter } from "@/components/charts/Dataset"

const chartSetting = {
  yAxis: [
    {
      label: "packets",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-30px, 0)",
    },
  },
};

export default function BarsDataset() {
  return (
    <BarChart
    className=""
      dataset={Dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "london", label: "London", valueFormatter },
        { dataKey: "paris", label: "Paris", valueFormatter },
        { dataKey: "newYork", label: "New York", valueFormatter },
        { dataKey: "seoul", label: "Seoul", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
