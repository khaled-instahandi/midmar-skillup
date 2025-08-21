import React from 'react';
import './WorkProgressIndicator.css'; 

const WorkProgressIndicator = ({ monthsElapsed, totalMonths }) => {
    const progressPercentage = (monthsElapsed / totalMonths) * 100;

    const monthLabels = [
        'Jan / 2023', 'Feb / 2023', 'Mar / 2023', 'Jun / 2023',
        'Jul / 2023', 'Aug / 2023', 'Sep / 2023', 'Oct / 2023'
    ];

    return (
        <div className="timeline-container-c">
            <div className="timeline-header">
                <h2>Number of months of work</h2>
            </div>
            <div className="progress-bar-v">
                <div className="months-indicator" style={{ width: `${progressPercentage}%` }}>{monthsElapsed} months</div>

                <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
                <div className="progress-bar-thumb start" style={{ left: `0%` }}></div>

                <div className="progress-bar-thumb current" style={{ left: `${progressPercentage}%` }}></div>
                <div className="progress-bar-thumb end" style={{ left: `99%` }}></div>
                <div className="text-thumb">
                    <div className="text-thumb-start" >Beginning work </div>
                    <div className="text-thumb-current" style={{ width: `${progressPercentage}%` }}>Curent work </div>

                    <div className="text-thumb-end" style={{ width: '100%' }}>End of year </div>
                </div>


            </div>
            <div className="hidden-footer-work">
                <hr className="hr" />
                <div className="timeline-footer ">
                    {monthLabels.map((label, index) => (
                        <span key={index} style={{ left: `${(index / (monthLabels.length - 1)) * 100}%` }}>
                            {label}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default WorkProgressIndicator;
