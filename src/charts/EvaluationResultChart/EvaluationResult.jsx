import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './EvaluationResult.css'; // Make sure to create a corresponding CSS file
import { ReactComponent as EmojiIcon } from '../../images/emoji-normal.svg'
const EvaluationResult = ({ score, resultText }) => {
    const data = {
        datasets: [
            {
                label: 'Evaluation',
                data: [score, 100 - score],
                backgroundColor: [
                    'rgba(76, 175, 80, 1)', // Green color for score
                    'rgba(211, 211, 211, 1)' // Light grey for the remaining part
                ],
                cutout: '70%',
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: {
                enabled: false 
            },
            legend: {
                display: false,
            },
            datalabels: {
                display: false, 
            }
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    return (
        <div className="evaluation-result-container">
            <h2>Result of the last evaluation</h2>
            <div className="evaluation-result-s">
                <div className="chart-container">
                    <Doughnut data={data} options={options} />
                    <div className="center-text">{`${score}%`}</div>
                </div>
                <div className="evaluation-details">
                    <p>Evaluation: <span className="evaluation-score">{`${score}%`}</span></p>
                    <p>The result: <span className="evaluation-result">{resultText} <EmojiIcon /></span></p>
                </div>
            </div>

        </div>
    );
};

export default EvaluationResult;
