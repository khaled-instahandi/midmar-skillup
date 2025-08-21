import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './EstimateToCompleteCard.css';

const EstimateToCompleteCard = () => {
    const data = {
        labels: ['Costs to finish the work', 'Costs paid for the work'],
        datasets: [
            {
                data: [81.5, 18.5],
                backgroundColor: ['#7BBC67', '#007AFF'],
                borderColor: ['#ffffff'],
                borderWidth: 2,
            },
        ],
    };  

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        rotation: 90, 
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="card" >
            <div className="value">65,500.70 €</div>
            <div className="label">Estimate To Compete (ETC)</div>
            <div className="chart-legend-container">
                <div className="chart-container-e">
                    <Pie data={data} options={options} />
                </div>
                <div className="custom-legend">
                    {data.labels.map((label, index) => (
                        <div key={index} className="legend-item">
                            <span className="legend-color-box" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></span>
                            <span className="legend-label" style={{color:data.datasets[0].backgroundColor[index]}}>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EstimateToCompleteCard;
