import { Chart as ChartJS, registerables } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import './DonorPayments.css'; 
ChartJS.register(...registerables);

const PaymentItem = ({ label, value, color }) => {
    const formattedValue = value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return (
        <div className="payment-item">
            <span className="payment-label">{label}</span>
            <span className="payment-value" style={{ color }}>
                <span className="payment-color-box" style={{ backgroundColor: color }}></span>
                {`${formattedValue} €`}
            </span>
        </div>
    );
};

const DonorPayments = () => {
    const totalPayments = 210000.00;
    const expenses = 400000.00;
    const availableAmount = totalPayments - expenses;

    const colors = {
        payments: 'rgb(0, 122, 255,1)',
        expenses: 'rgb(21, 139, 127,1)',
        available: 'rgb(234, 81, 72,1)'
    };

 
    const data = {
        datasets: [
            {
                label: 'Donor Payments',
                data: [
                    { x: 1, y: totalPayments, percentage: 44 },
                    { x: 2, y: expenses, percentage: 190 },
                 
                ],
                backgroundColor: Object.values(colors),
                pointRadius: 6,
            }
        ]
    };


    const options = {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false 
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return `${value}`;
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += new Intl.NumberFormat().format(context.raw.y) + '€';
                        label += ` (${context.raw.percentage}%)`;
                        return label;
                    }
                }
            }
        },
        maintainAspectRatio: false
    };

    return (
        <div className="donor-payments-container">
            <h2>Donor payments</h2>
            <div className="chart-and-info">
                <div className="chart-container">
                    <Scatter data={data} options={options} />
                </div>
                <div className="payments-info">
                    <PaymentItem label="Total payments from donor:" value={totalPayments} color={colors.payments} />
                    <PaymentItem label="Expenses:" value={expenses} color={colors.expenses} />
                    <PaymentItem label="Available amount:" value={availableAmount} color={colors.available} />
                </div>
            </div>
        </div>
    );
};

export default DonorPayments;
