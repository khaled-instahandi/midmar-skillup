import React from 'react';
import './FinancialOverviewCard.css'; // Make sure the path to your CSS file is correct
import moneys from '../../images/moneys.svg'

const FinancialOverviewCard = ({ value, title, icon, colorValue, backgroundColor }) => {

  return (
    <div className="financial-overview-card" style={{ backgroundColor: backgroundColor }}>
      <div className="financial-overview-card-icon" style={{ backgroundColor: colorValue }}>
        <img src={icon} alt="Budget Icon" />
      </div>
      <div className="financial-overview-card-info">
        <h3 className="financial-overview-card-title" >{title}</h3>
        <p className="financial-overview-card-value" style={{ color: colorValue }}>{value} €</p>
      </div>
    </div>
  );
};

export default FinancialOverviewCard;
