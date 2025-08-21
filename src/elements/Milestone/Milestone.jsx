import React from 'react';
import './Milestone.css';
import milestoneSvg from '../../images/milestone.svg'; 

const Milestone = ({ title, description }) => {
  return (
    <div className="milestone">
      <img src={milestoneSvg} alt="Status" className="status-indicator-m top-indicator" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
      <img src={milestoneSvg} alt="Status" className="status-indicator-m bottom-indicator" />
    </div>
  );
};

export default Milestone;
