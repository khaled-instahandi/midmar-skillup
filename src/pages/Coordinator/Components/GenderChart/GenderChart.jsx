import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './GenderChart.css'; 

const GenderChart = () => {
    const chartData = {
        labels: ['male', 'female'],
        datasets: [
            {
                label: 'Number of trainees',
                data: [92, 14],
                backgroundColor: ['#FFA726', '#26A69A'],
            },
        ],
    };
    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                display: false,
            }
        },
    };

    const total = chartData.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="gender-chart-container">
            <h1>Number of male and female trainees</h1>
            <div className="chart-container-gender">

                <div className="chart-gender">
                    <Bar data={chartData} options={chartOptions} />

                </div>
                <div className="chart-legend-gender">
                    <div className="legend-item-g">
                        Number of males:
                        <span className="legend-label-g" style={{ color: chartData.datasets[0].backgroundColor[0] }}>
                            <span className="legend-color-box-g male"></span>
                            {chartData.datasets[0].data[0]}
                        </span>
                    </div>
                    <div className="legend-item-g">
                        Number of females:
                        <span className="legend-label-g" style={{ color: chartData.datasets[0].backgroundColor[1] }}>
                            <span className="legend-color-box-g female"></span>
                            {chartData.datasets[0].data[1]}

                        </span>
                    </div>
                    <div className="legend-item-g">
                        Total:
                        <span style={{ color: '#838383' }}>
                            <span className="legend-color-box-g total"></span>
                            {total}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenderChart;
