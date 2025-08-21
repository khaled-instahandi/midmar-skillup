import image from '../../images/ActualValueCard.svg';
import React from 'react';
import './ActualValueCard.css'; 

const ActualValueCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <div className="card-value">400,000.00 €</div>
          <div className="card-label">Actual Value (AV)</div>
        </div>
        <div className="card-icon">
        <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ActualValueCard;
