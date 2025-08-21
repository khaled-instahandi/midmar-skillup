import React from 'react';
import './EstimateAtCompletionCircular.css';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const EstimateAtCompletionCircular = () => {
  const data = {
    labels: ['Total project costs'],
    datasets: [
      {
        label: 'Estimate At Completion (EAC)',
        data: [100],
        backgroundColor: ['#FFC700'],
        borderColor: ['#FFFFFF'],
        borderWidth: 2,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: '#000000',
        textAlign: 'center',
        font: {
          size: 20,
        },
        formatter: (value, context) => {
          const datasets = context.chart.data.datasets;
          if (context.dataIndex === datasets.indexOf(Math.max(...datasets[0].data))) {
            return `${value}%`;
          } else {
            return '';
          }
        },
        anchor: 'center',
        align: 'middle',
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };


  return (
    <div className="card">
      <div className="eac-value">600,988.70 €</div>
      <div className="eac-label">Estimate At Completion (EAC)</div>
      <div className="eac-card-butoom">
        <div className="eac-chart-container">
          <Pie data={data} options={options} />
          <span className="eac-chart-label">{data.datasets[0].data} %</span>

        </div>
        <div className="eac-legend">
          <div className="eac-legend-item">
            <span className="eac-legend-color" style={{ backgroundColor: '#FFC700' }}></span>
            <span className="eac-legend-text" style={{ color: '#FFC700' }}>Total project costs</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default EstimateAtCompletionCircular;

