import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';

// Register the chart.js components we need
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "rgba(215, 227, 244, 0.8)", // Simplified gradient usage
        borderColor: "rgb(75, 192, 192)",
        data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917, 3327],
        tension: 0.4
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { intersect: false },
    },
    interaction: {
      intersect: true
    },
    scales: {
      x: { 
        reverse: false,
        grid: { display: false } 
      },
      y: { 
        ticks: { stepSize: 1000 },
        grid: { drawBorder: false, borderDash: [3, 3], display: false }
      }
    }
  };

  return (
    <div className="col-xl-6 col-xxl-7">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Recent Movement</h5>
        </div>
        <div className="card-body py-3">
          <div className="chart chart-sm">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LineChartComponent;
