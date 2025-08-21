import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './ProjectFlowChart.css';
import Add from '../../images/add.svg';
import negative from '../../images/negative.svg';
import home from '../../images/home.svg';
import mouse from '../../images/mouse.svg';
import menu from '../../images/menu.svg';
import zoom from '../../images/zoom.svg';
import ProgressBar from '../../elements/ProgressBar/ProgressBar';
const ProjectFlowChart = ({ projectData, milestones }) => {
    const lineChartData = {
        labels: projectData.labels,
        datasets: projectData.datasets,
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
          // Disable datalabels for your chart
          datalabels: {
            display: false,
          }
        },
        scales: {
          x: {
            // Configuration for x-axis
          },
          y: {
            min: 0,
            max: 100,
            // Configuration for y-axis
          },
        },
      };
      

    return (
        <div className='project-flow-chart'>
            <div className="project-flow-container">
                <div className="top-project-flow">
                    <div className="project-flow-tite">Project flow chart</div>
                    <div className="project-flow-buttons">
                        <img src={Add} alt='' />
                        <img src={negative} alt='' />
                        <img src={zoom} alt='' />
                        <img src={mouse} alt='' />
                        <img src={home} alt='' />
                        <img src={menu} alt='' />

                    </div>
                </div>
                <div >
                    <Line data={lineChartData} options={lineChartOptions} />
                </div>
            </div>

            <div className="project-milestone">
                <div className="date-controls-flow">

                    <span>Start date: <input type="date" className='date-timeline' defaultValue="2023-01-01" /></span>
                    <span>End date: <input type="date" className='date-timeline' defaultValue="2024-12-31" /></span>
                </div>
                <div className="milestone-project-flow">
                    <ProgressBar label="milestone 1" percentage={90} colorBar={projectData.datasets[0].borderColor} />
                    <ProgressBar label="milestone 2" percentage={90} colorBar={projectData.datasets[1].borderColor} />
                    <ProgressBar label="milestone 3" percentage={90} colorBar={projectData.datasets[2].borderColor} />
                </div>
            </div>

        </div>
    );
};
export default ProjectFlowChart;