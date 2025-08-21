import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DailyLeaveBalanceChartAr = ({ totalDays, bookedDays }) => {
    const remainingDays = totalDays - bookedDays;

    const data = {
        labels: [totalDays, bookedDays, //'Remaining'
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
            tooltip: false,
            labels:false
            // tooltip: {
            //     callbacks: {
            //         label: function (context) {
            //             let label = context.dataset.label || '';
            //             if (label) {
            //                 label += ': ';
            //             }
            //             if (context.parsed.y !== null) {
            //                 label += context.parsed.y + 'تدريب';
            //             }
            //             return label;
            //         },
            //     },
            // },
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
        <div className="daily-leave-balance-container" dir='rtl'>

            <div className="daily-top">
                <h2>التدريبات</h2>
            </div>
            <div className="daily-buttom">
                <div className="details-container" >
                    <div>
                        <div className="detail-label">عدد التدريبات المشارك بها</div>
                        <div className="detail-value" style={{ color: '#F8BB86' }}>
                            <span class="payment-color-box" style={{ backgroundColor: '#F8BB86' }}></span>

                            <span> {totalDays} تدريب</span></div>
                    </div>
                    <div>
                        <div className="detail-label" >عدد التدريبات التي أنهيتها</div>
                        <div className="detail-value" style={{ color: '#158B7F' }}>
                            <span class="payment-color-box" style={{ backgroundColor: '#158B7F' }}></span>
                            <span>{bookedDays} تدريبات</span> </div>
                    </div>

                </div>
                <div className="chart-container-panel">
                    <Bar data={data} options={options} />
                </div>

            </div>

        </div>
    );
};

export default DailyLeaveBalanceChartAr;
