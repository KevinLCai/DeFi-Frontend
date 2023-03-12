import React from "react";
import { Line } from "react-chartjs-2";

function Chart(props) {
  const chartData = {
    labels: props.data.labels,
    datasets: [
      {
        label: "My Dataset",
        data: props.data.values,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
