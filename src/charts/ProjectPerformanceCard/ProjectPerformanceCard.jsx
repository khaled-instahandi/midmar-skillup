import React from 'react';
import './ProjectPerformanceCard.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ProjectPerformanceCard = () => {
    return (
        <div className="performance-card">
            <h2>Project Performance</h2>
            <div className="indices">
                <div className="index-item">
                    <div className="index-value positive">
                        0.7 <FaArrowUp className="icon" />
                    </div>
                    <div className="change positive">+0.2%</div>
                    <div className="index-name">Cost Performance Index <b>(CPI)</b></div>
                </div>
                <div className="index-item">
                    <div className="index-value positive">
                        0.5 <FaArrowUp className="icon" />
                    </div>
                    <div className="change positive">+0.2%</div>
                    <div className="index-name">Schedule Performance Index <b>(SPI)</b></div>
                </div>
                <div className="index-item">
                    <div className="index-value negative">
                        -0.1 <FaArrowDown className="icon" />
                    </div>
                    <div className="change negative">+0.2%</div>
                    <div className="index-name">To Complete Performance Index <b>(TCPI)</b></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPerformanceCard;
