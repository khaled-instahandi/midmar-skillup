import React from 'react';
import './CircleProgressBar.css';

const CircleProgressBar = ({ value,backgroundColor }) => {
    const percentage = parseInt(value);
    let progressBarStyle;

    if (percentage < 30) {
        progressBarStyle = {
            background: `conic-gradient(rgba(255, 200, 0, 1) ${percentage}%, #f0f0f0 ${percentage}%)`,
        };
    } else {
        progressBarStyle = {
            background: `conic-gradient(rgba(0, 122, 255, 1) ${percentage}%, #f0f0f0 ${percentage}%)`,
        };
    }

    return (
        <div className="circle-progress-container">
            <div className="circle-progress-bar" style={progressBarStyle}></div>
            <div className="circle-progress-bar-m" style={{backgroundColor:backgroundColor}}></div>
        </div>
    );
}

export default CircleProgressBar;
