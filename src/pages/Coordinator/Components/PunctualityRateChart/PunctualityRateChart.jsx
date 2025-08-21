import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './PunctualityRateChart.css'; // Import the CSS

const PunctualityRateChart = ({ text, data, color }) => {
    const dataT = 100 - data;
    const chartData = {
        datasets: [
            {
                data: [data, dataT],
                backgroundColor: [color, '#D9D9D9'],
                borderColor: [color, '#D9D9D9'],
                borderWidth: 1,
                cutout: '70%', // This makes the doughnut chart thinner
            }
        ],
    };

    const chartOptions = {
        responsive: true, // Set to true for responsiveness
        maintainAspectRatio: false, // Set to false to allow custom dimensions
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: false, // Hide tooltips
            },
            datalabels: {
                display: false, // Ensure that data labels are not shown
            }
        },
    };

    return (
        <div className="chart-container-p">
            <h2>{text}</h2>
            <div className="punctuality-rate">

                <Doughnut data={chartData} options={chartOptions} width={200} height={200} />
                <div className="chart-label-p" style={{ color: chartData.datasets[0].backgroundColor[0] }}>
                    {chartData.datasets[0].data[0]}<span>%</span>
                </div>
            </div>
        </div>
    );
};

export default PunctualityRateChart;
