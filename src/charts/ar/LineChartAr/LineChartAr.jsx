import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function LineChartAr() {
    const data = {
        labels: ['04/23', '05/23', '06/23', '07/23', '08/23', '09/23'],
        datasets: [
            {
                label: false,
                data: [23, 25, 15, 30, 20, 10],
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue',
                pointRadius: 5,
                pointHoverRadius: 7,
                pointLabel:false, // Hide the numerical values displayed next to each point

            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                displayColors: false, // Disable the square style in the tooltip
                titleFont: {
                    size: 16, // Set the font size for the title
                },
                bodyFont: {
                    size: 14, // Set the font size for the body
                },
                textDirection: 'rtl', // Set the text direction to right-to-left (RTL) for the tooltip content

                callbacks: {
                    title: (tooltipItem) => {
                        return 'عدد الساعات:';
                    },
                    label: (tooltipItem) => {
                        return tooltipItem.parsed.y + ' ساعة';
                    },
                },
                backgroundColor: 'rgba(0, 122, 255, 0.05)',
                titleColor: '#838383',
                bodyColor: '#007AFF',
            },
        },
        elements: {
            text: {
                // Disable point labels
                display: function (context) {
                    return context.parsed.y === null ? false : true;
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
    };

    return (
        <>
            <div className="daily-leave-balance-container" dir='rtl'>
                <div className="daily-top mb-5">
                    <h2>عدد ساعات الحضور</h2>
                </div>
                <div className="daily-buttom">
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    );
}

export default LineChartAr;
