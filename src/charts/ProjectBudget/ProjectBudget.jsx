import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './ProjectBudget.css';

const ProjectBudget = () => {
    const budgetValue = 474988.70;
    const expenses = 400000.00;
    const remaining = (budgetValue - expenses).toFixed(1);
    const percentage = Math.round((expenses / budgetValue) * 100);
    const expenseColor = '#158B7F';
    const remainingColor = '#ADADAD';

    const data = {
        labels: ['Expenses', 'Remaining'],
        datasets: [
            {
                data: [expenses, remaining],
                backgroundColor: [expenseColor, remainingColor],
                hoverBackgroundColor: [expenseColor, remainingColor],
            },
        ],
    };

    const options = {
        cutout: '0%',
        rotation: 0,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="project-budget-card">
            <div className="card-header-chart-project">
                <h2>Project Budget</h2>
            </div>
            <div className="card-body-chart-project">
                <div className="chart-container-project">
                    <Doughnut data={data} options={options} />
                    <div className="chart-percentage">
                        {percentage}%
                    </div>
                </div>
                <div className="budget-info">
                    <BudgetItem label="Budget value:" value={budgetValue} color="#5856D6" />
                    <BudgetItem label="Expenses:" value={expenses} color={expenseColor} />
                    <BudgetItem label="Remaining:" value={remaining} color={remainingColor} />
                </div>
            </div>
        </div>
    );
};

const BudgetItem = ({ label, value, color }) => {
    return (
        <div className="budget-item">
            <span className="budget-label">{label}</span>
            <div className="budget-value" style={{ color  }} >
                <span className="budget-color-box" style={{ backgroundColor: color }}></span>
                {value} €
            </div>
        </div>
    );
};

export default ProjectBudget;
