import React from 'react';
import './ProgressBar.css'; // make sure the path to your CSS file is correct

const ProgressBar = ({ label, percentage,colorBar }) => {
  return (
    <div className="progress-bar-g-container">
      <div className="progress-top">

        <div className="progress-bar-g-label">{label}</div>
        <div className="progress-bar-g-percentage">{percentage}%</div>
      </div>

      <div className="progress-bar-g-wrapper">
        <div className="progress-bar-g" style={{ width: `${percentage}%` ,backgroundColor:colorBar}}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
