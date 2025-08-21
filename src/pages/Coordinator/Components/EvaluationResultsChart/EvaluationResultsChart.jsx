import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './EvaluationResultsChart.css';

const EvaluationResultsChart = () => {
    const chartData = {
        labels: ['<30', '30 - 60', '61 - 80', '>80'],
        datasets: [
            {
                data: [20, 60, 40, 70],
                backgroundColor: '#D0E8E5',
                borderColor: '#FFC800',
                pointBorderColor: '#A1D1CC',
                pointBackgroundColor: '#A1D1CC',
                pointBorderWidth: 2,
                tension: 0.4,
                fill: true,
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
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            datalabels: {
                display: false,
            }
        },
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
        elements: {
            line: {
                borderWidth: 4,
            },
            point: {
                radius: 5,
                borderWidth: 2,
                hoverRadius: 8,
            },
        },
    };

    return (
        <div className="evaluation-chart-container-r">
            <h2>Evaluation results</h2>
            <div className="chart-container-r">
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default EvaluationResultsChart;
