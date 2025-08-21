import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './BudgetCard.css'
const BudgetCard = () => {
  const data = {
    datasets: [{
      data: [84, 16],
      backgroundColor: [
        '#5856D6',
        '#D9D9D9'
      ],
      hoverBackgroundColor: [
        '#5856D6',
        '#D9D9D9'
      ],
      borderWidth: 0,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 0,
    rotation: 0,
    circumference: 360,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };

  return (
    <div className="card" >
      <div className="budget-content">
        <div className="budget-text">
          <span className="budget-amount">474,988.70 €</span>
          <span className="budget-description">Planned Value (PV)</span>
          <div className="budget-percentage-home">
            <span >84% </span>
            <span className="budget-percentage">has been spent</span>
          </div>

        </div>
        <div className="budget-chart">
          <Doughnut data={data} options={options} />
          <span className="chart-label">84%</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
