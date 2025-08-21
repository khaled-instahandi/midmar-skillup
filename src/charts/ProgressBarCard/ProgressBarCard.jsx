import React from 'react';
import './ProgressBarCard.css'; 
const ProgressBarCard = () => {
  const earnedValue = 300988.70;
  const percentageLeft = 70; 

  return (
      <div className="progress-bar-card">
        <div className="value-section">
          <span className="value">{earnedValue.toLocaleString('en-US', { minimumFractionDigits: 2 })} €</span>
          <span className="label">Earned Value (EV)</span>
        </div>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${percentageLeft}%` }}></div>
          </div>
          <span className="percentage"><p> {percentageLeft}% </p> left from target</span>
        </div>
      </div>
  );
};

export default ProgressBarCard;
