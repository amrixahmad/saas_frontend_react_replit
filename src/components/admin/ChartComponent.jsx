// Chart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

const ChartComponent = ({ title, subtitle, chartId, chartType, smallChart = false }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      let chartInstance = new Chart(ctx, getChartConfig(chartType));

      return () => {
        chartInstance.destroy();
      };
    }
  }, [chartType]);

  const getChartConfig = (type) => {
    const colors = {
      primary: '#3B7DDD',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      info: '#17a2b8',
    };
    
    const configs = {
      line: {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Sales ($)",
            fill: true,
            backgroundColor: "transparent",
            borderColor: colors.primary,
            data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327]
          }, {
            label: "Orders",
            fill: true,
            backgroundColor: "transparent",
            borderColor: "#adb5bd",
            borderDash: [4, 4],
            data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827]
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            intersect: false
          },
          hover: {
            intersect: true
          },
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            x: {
              reverse: true,
              grid: {
                color: "rgba(0,0,0,0.05)"
              }
            },
            y: {
              ticks: {
                stepSize: 500
              },
              display: true,
              borderDash: [5, 5],
              grid: {
                color: "rgba(0,0,0,0)",
                fontColor: "#fff"
              }
            }
          }
        }
      },
      bar: {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Last year",
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            hoverBackgroundColor: colors.primary,
            hoverBorderColor: colors.primary,
            data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
            barPercentage: .75,
            categoryPercentage: .5
          }, {
            label: "This year",
            backgroundColor: "#dee2e6",
            borderColor: "#dee2e6",
            hoverBackgroundColor: "#dee2e6",
            hoverBorderColor: "#dee2e6",
            data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
            barPercentage: .75,
            categoryPercentage: .5
          }]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
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
        }
      },
      doughnut: {
        type: "doughnut",
        data: {
          labels: ["Social", "Search Engines", "Direct", "Other"],
          datasets: [{
            data: [260, 125, 54, 146],
            backgroundColor: [
              colors.primary,
              colors.warning,
              colors.danger,
              "#dee2e6"
            ],
            borderColor: "transparent"
          }]
        },
        options: {
          maintainAspectRatio: false,
          cutout: '65%',
          plugins: {
            legend: {
              display: false
            }
          }
        }
      },
      pie: {
        type: "pie",
        data: {
          labels: ["Social", "Search Engines", "Direct", "Other"],
          datasets: [{
            data: [260, 125, 54, 146],
            backgroundColor: [
              colors.primary,
              colors.warning,
              colors.danger,
              "#dee2e6"
            ],
            borderColor: "transparent"
          }]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      }
    };

    return configs[type];
  };
  
  return (
    <div className="col-12 col-lg-6">
      <div className={`card ${chartType !== 'line' ? '' : 'flex-fill w-100'}`}>
        <div className="card-header">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle text-muted">{subtitle}</h6>
        </div>
        <div className="card-body">
          <div className={`chart ${smallChart ? 'chart-sm' : ''}`}>
            <canvas ref={chartRef} id={chartId}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;