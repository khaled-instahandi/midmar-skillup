import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
// import './EducationalLevelChart.css';

const EducationalLevelChartCoach = () => {
  const chartData = {
    labels: ["تعليم أساسي", "تعليم ثانوي", "جامعي", "دراسات عليا"],
    datasets: [
      {
        data: [30, 10, 20, 40],
        backgroundColor: [
          "#158B7F", // Primary
          "#FFC800", // Secondary
          "#7BBC67", // Higher
          "#9AD5CE", // Postgraduate
        ],
        hoverOffset: 4,
      },
    ],
  };

  //   const chartOptions = {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     plugins: {
  //       legend: {
  //         display: true,
  //         position: "left",
  //         labels: {
  //           boxWidth: 20,
  //           font: {
  //             size: 18, // Adjust font size for legend
  //           },
  //         },
  //       },
  //       datalabels: {
  //         display: true, // Show values inside labels
  //         color: "white", // Set font color
  //         font: {
  //           size: 18, // Set font size
  //         },
  //         formatter: (value, context) => {
  //           // Format label value
  //           return `${value}%`;
  //         },
  //         textAlign: "center", // Align text inside labels
  //       },
  //     },
  //   };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 20,
          font: {
            size: 18,
            family: "Swissra, sans-serif",
          },
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, index) => {
                const value = data.datasets[0].data[index];
                const backgroundColor = data.datasets[0].backgroundColor[index];
                return {
                  text: `${label} ${value}%`, // Display value inside legend text
                  fillStyle: backgroundColor, // Use background color as text color
                  hidden:
                    isNaN(data.datasets[0].data[index]) ||
                    chart.getDatasetMeta(0).data[index].hidden,
                  index: index,
                };
              });
            }
            return [];
          },
        },
      },
      datalabels: {
        display: true, // Show values inside labels
        color: "white", // Font color
        font: {
          size: 18, // Font size for values inside labels
        },
        formatter: (value, context) => {
          // Format label value
          return `${value}%`;
        },
      },
    },
  };

  return (
    <div
      className="educational-level-chart-container"
      style={{ flex: "unset", width: "33%", margin: "1.5rem 1rem" }}
    >
      <h2 style={{ textAlign: "right" }}>
        رسم بياني للمستوى التعليمي للمتدربين:
      </h2>
      <div className="chart-container-s">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default EducationalLevelChartCoach;
