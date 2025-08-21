import React from 'react';
import './StatsCard.css';

function StatsCard({ title, value, icon, color, trend, subtitle }) {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className="stats-icon" style={{ backgroundColor: `${color}20`, color: color }}>
          {icon}
        </div>
        <div className="stats-trend">
          <span className={`trend-value ${trend?.includes('+') ? 'positive' : trend?.includes('-') ? 'negative' : 'neutral'}`}>
            {trend}
          </span>
        </div>
      </div>
      
      <div className="stats-content">
        <h3 className="stats-title">{title}</h3>
        <div className="stats-value" style={{ color: color }}>
          {value}
        </div>
        <p className="stats-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatsCard;
