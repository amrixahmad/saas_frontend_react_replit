import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlySales = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "This year",
      backgroundColor: "#3b7ddd", // Replace with your theme color
      borderColor: "#3b7ddd", // Replace with your theme color
      hoverBackgroundColor: "#3b7ddd", // Replace with your theme color
      hoverBorderColor: "#3b7ddd", // Replace with your theme color
      data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
      barPercentage: 0.75,
      categoryPercentage: 0.5
    }]
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          display: false
        },
        ticks: {
          stepSize: 20
        }
      },
      x: {
        grid: {
          color: "transparent"
        }
      }
    }
  };

  return (
    <div className="col-12 col-lg-4 col-xxl-3 d-flex">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Monthly Sales</h5>
        </div>
        <div className="card-body d-flex w-100">
          <div className="align-self-center chart chart-lg">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySales;