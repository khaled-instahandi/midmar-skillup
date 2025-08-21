import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './AverageTestResults.css'; // Import the CSS file

const doughnutChartOptions = (cutout) => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: cutout,
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
});

const AverageTestResults = () => {
    const dataFirstChart = {
        datasets: [
            {
                data: [30, 70],
                backgroundColor: ['#FFC800', '#D9D9D9'],
                borderWidth: 0,
            },
        ],
    };

    const dataSecondChart = {
        datasets: [
            {
                data: [90, 10],
                backgroundColor: ['#007AFF', '#D9D9D9'],
                borderWidth: 0,
            },
        ],
    };

    const dataThirdChart = {
        datasets: [
            {
                data: [60, 40],
                backgroundColor: ['#5856D6', '#D9D9D9'],
                borderWidth: 0,
            },
        ],

    };

    return (
        <div className="test-results-container">
            <h2>Average test results</h2>
            <div className="charts-container">
                <div className="chart">
                    <Doughnut data={dataFirstChart} options={doughnutChartOptions('70%')} />
                    <div className="chart-label" style={{ color: dataFirstChart.datasets[0].backgroundColor[0] }}>30%</div>
                    <p>Level of improvement</p>
                </div>
                <div className="column-bt">

                </div>
                <div className="chart">
                    <Doughnut data={dataSecondChart} options={doughnutChartOptions('70%')} />
                    <div className="chart-label">90%</div>
                    <p>Average posttest score</p>
                </div>
                <div className="column-bt">

                </div>
                <div className="chart">
                    <Doughnut data={dataThirdChart} options={doughnutChartOptions('70%')} />
                    <div className="chart-label">60%</div>
                    <p>Average pre-test score</p>
                </div>
            </div>
        </div>
    );
};

export default AverageTestResults;
