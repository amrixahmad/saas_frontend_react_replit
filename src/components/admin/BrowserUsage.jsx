import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BrowserUsage = () => {
  const browserData = [
    { name: 'Chrome', value: 4306 },
    { name: 'Firefox', value: 3801 },
    { name: 'IE', value: 1689 }
  ];

  const chartData = {
    labels: browserData.map(browser => browser.name),
    datasets: [
      {
        data: browserData.map(browser => browser.value),
        backgroundColor: ['#3b7ddd', '#ffc107', '#dc3545'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
      <div className="card flex-fill w-100">
        <div className="card-header">
          <h5 className="card-title mb-0">Browser Usage</h5>
        </div>
        <div className="card-body d-flex">
          <div className="align-self-center w-100">
            <div className="py-3">
              <div className="chart chart-xs">
                <Pie data={chartData} options={chartOptions} />
              </div>
            </div>
            <table className="table mb-0">
              <tbody>
                {browserData.map((browser, index) => (
                  <tr key={index}>
                    <td>{browser.name}</td>
                    <td className="text-end">{browser.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserUsage;