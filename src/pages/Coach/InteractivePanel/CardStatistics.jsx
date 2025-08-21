import React from "react";
import "./CardStatistics.css";
function CardStatistics({ image, title, value, color ,width}) {
  return (
    <div className="card-statistics-container" style={{maxWidth:width}}>
      <div className="icon-card-statistics" style={{ backgroundColor: color }}>
        <img src={`${image}`} alt="icon" />
      </div>
      <div className="content-card-statistics">
        <h5>{title}</h5>
        <p style={{ color: color }}>{value}</p>
      </div>
      {/* CardStatistics */}
    </div>
  );
}

export default CardStatistics;
