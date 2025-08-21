import React from 'react';
import './Timeline.css'; 
import Add from '../../images/add.svg'; 
import negative from '../../images/negative.svg'; 
import home from '../../images/home.svg'; 
import mouse from '../../images/mouse.svg'; 
import menu from '../../images/menu.svg'; 
import zoom from '../../images/zoom.svg'; 

const milestones = [
  { id: 1, date: '01/01/2023', status: 'done', label: 'Project Kickoff' },
  { id: 2, date: '02/15/2023', status: 'done', label: 'Phase 1 Release' },
  { id: 3, date: '05/20/2023', status: 'done', label: 'Phase 2 Release' },
  { id: 4, date: '06/20/2023', status: 'done', label: 'Phase 2 Release' },

  { id: 5, date: '08/10/2023', status: 'pending', label: 'Testing Start' },
  { id: 6, date: '10/01/2023', status: 'pending', label: 'Final Review' },
];
const startDate = new Date('2023-01-01'); 
const endDate = new Date('2024-01-01'); 
const lastCompletedIndex = milestones.reduce(
  (lastIndex, milestone, index) => (milestone.status === 'done' ? index : lastIndex),
  -1
);
function calculatePosition(dateString) {
  const milestoneDate = new Date(dateString);
  const totalTimelineDuration = endDate - startDate;
  const milestonePosition = milestoneDate - startDate;

  return (milestonePosition / totalTimelineDuration) * 100; 
}


const Timeline = () => {
  const lastCompletedMilestone = milestones.filter(m => m.status === 'done').pop();

  const completedWidth = lastCompletedMilestone
    ? calculatePosition(lastCompletedMilestone.date)
    : 0;

  const incompleteWidth = lastCompletedMilestone
    ? 100 - completedWidth
    : 100; 

  return (
    <div className="timeline-container">
      <div className="header">
        <h1>Project Milestones</h1>
        <div className="date-controls">
          <span>Start date: <input type="date" className='date-timeline' defaultValue="2023-01-01" /></span>
          <span>End date: <input type="date" className='date-timeline' defaultValue="2024-12-31" /></span>
        </div>
        <div className="icons">
         <img src={Add} alt='' />
         <img src={negative} alt='' />
         <img src={zoom} alt='' />
         <img src={mouse} alt='' />
         <img src={home} alt='' />
         <img src={menu} alt='' />

        </div>
      </div>
      <div className="milestone-box">
        <span className="milestone-title">milestone 2</span>
        <p className="milestone-description">Simple description Simple description Simple description</p>
      </div>
      <div className="timeline">
        <div className="timeline-line timeline-completed" style={{ width: `${completedWidth}%` }}></div>
        {lastCompletedMilestone && (
          <div className="timeline-line timeline-incomplete" style={{ width: `${incompleteWidth}%`, left: `${completedWidth}%` }}></div>
        )}

        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={`task ${milestone.status}`}
            style={{ left: `calc(${calculatePosition(milestone.date)}% - 6px)` }}
          >
            <div className={`task-point task-status ${milestone.status === 'done' ? 'done' : 'incomplete'}`}></div>
            <span className={`flag ${milestone.status}`}></span>
            <span className={`status `}>{milestone.status}</span>

            <div className="date">{milestone.date}</div>
          </div>
        ))}
        <div className="timeline-axis"></div>
      </div>
      <hr className='hr' />

      <div className="footer">
        <span>Jan / 2023</span>
        <span>Feb / 2023</span>
        <span>Mar / 2023</span>
        <span>Jun / 2023</span>
        <span>Jul / 2023</span>
        <span>Aug / 2023</span>
        <span>Sep / 2023</span>
        <span>Oct / 2023</span>
   
      </div>
    </div>
  );
};

export default Timeline;
