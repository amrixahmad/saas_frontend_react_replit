// ChartPage.js
import React from 'react';
import { ChartComponent, Badge } from '../../components/component-services'

const ChartPage = () => {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="mb-3">
          <h1 className="h3 d-inline align-middle">Chart.js</h1>
          <Badge href="upgrade-to-pro.html" text="Get more chart examples" />
        </div>
        <div className="row">
          <ChartComponent
            title="Line Chart"
            subtitle="A line chart is a way of plotting data points on a line."
            chartId="chartjs-line"
            chartType="line"
          />
          <ChartComponent
            title="Bar Chart"
            subtitle="A bar chart provides a way of showing data values represented as vertical bars."
            chartId="chartjs-bar"
            chartType="bar"
          />
          <ChartComponent
            title="Doughnut Chart"
            subtitle="Doughnut charts are excellent at showing the relational proportions between data."
            chartId="chartjs-doughnut"
            chartType="doughnut"
            smallChart
          />
          <ChartComponent
            title="Pie Chart"
            subtitle="Pie charts are excellent at showing the relational proportions between data."
            chartId="chartjs-pie"
            chartType="pie"
            smallChart
          />
        </div>
      </div>
    </main>
  );
};

export default ChartPage;
