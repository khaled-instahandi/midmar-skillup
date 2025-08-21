import React from 'react';
import './AchievementCard.css';
import achievementIcon from '../../images/medal-star.svg';

const AchievementCard = ({ title, description }) => {
  return (
    <div className="achievement-card">
      <div className="achievement-icon-container">
        <img src={achievementIcon} alt="Achievement" className="achievement-icon" />
      </div>
      <div className="achievement-content">
        <p className="achievement-description">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
