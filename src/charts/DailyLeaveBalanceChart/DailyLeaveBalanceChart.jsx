import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './DailyLeaveBalanceChart.css'; // Make sure the path to your CSS file is correct

const DailyLeaveBalanceChart = ({ totalDays, bookedDays }) => {
    const remainingDays = totalDays - bookedDays;

    const data = {
        labels: ['Allowed', 'Booked', //'Remaining'
        ],
        datasets: [
            {
                data: [totalDays, bookedDays, remainingDays],
                backgroundColor: ['#F8BB86', '#158B7F', '#007AFF'],
                borderColor: ['#F8BB86', '#158B7F', '#007AFF'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            datalabels: {
                display: false, 
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + ' Days';
                        }
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, 
                    drawBorder: false,
                },
            },
            y: {
                grid: {
                    display: false, 
                    drawBorder: false, 
                },
                beginAtZero: true,
            },
        },
        maintainAspectRatio: false,
    };
    return (
        <div className="daily-leave-balance-container">

            <div className="daily-top">
                <h2>Daily leave balance</h2>
            </div>
            <div className="daily-buttom">
                <div className="chart-container-panel">
                    <Bar data={data} options={options} />
                </div>
                <div className="details-container">
                    <div>
                        <div className="detail-label">Allowed within one year:</div>
                        <div className="detail-value" style={{ color: '#F8BB86' }}>
                            <span class="payment-color-box" style={{ backgroundColor: '#F8BB86' }}></span>

                            <span> {totalDays} Days</span></div>
                    </div>
                    <div>
                        <div className="detail-label" >Which has been booked:</div>
                        <div className="detail-value" style={{ color: '#158B7F' }}>
                            <span class="payment-color-box" style={{ backgroundColor: '#158B7F' }}></span>
                            <span>{bookedDays} Days</span> </div>
                    </div>
                    <div>
                        <div className="detail-label">Number of days remaining:</div>
                        <div className="detail-value" style={{ color: '#007AFF' }}>
                            <span class="payment-color-box" style={{ backgroundColor: '#007AFF' }}></span>

                            <span>   {remainingDays} Days</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DailyLeaveBalanceChart;
