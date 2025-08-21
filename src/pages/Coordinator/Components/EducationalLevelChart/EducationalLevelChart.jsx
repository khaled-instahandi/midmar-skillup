import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './EducationalLevelChart.css'; 

const EducationalLevelChart = () => {
    const chartData = {
        labels: ['Primary', 'Secondary', 'Higher', 'Postgraduate'],
        datasets: [
            {
                data: [30, 10, 20, 40], 
                backgroundColor: [
                    '#158B7F',  // Primary
                    '#FFC800',  // Secondary
                    '#7BBC67',  // Higher
                    '#9AD5CE'   // Postgraduate
                ],
                hoverOffset: 4
            }
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 20
                }
            },
            datalabels: {
                display: false,
            }
        }
    };

    return (
        <div className="educational-level-chart-container">
            <h2>Educational Level</h2>
            <div className="chart-container-s">
                <Pie data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default EducationalLevelChart;
