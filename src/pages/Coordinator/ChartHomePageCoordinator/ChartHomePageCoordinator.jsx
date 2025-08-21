import React from 'react'
import './ChartHomePageCoordinator.css'
import TrainingHeader from '../TrainingHeader/TrainingHeader'
import GenderChart from '../Components/GenderChart/GenderChart'
import PunctualityRateChart from '../Components/PunctualityRateChart/PunctualityRateChart'
import EvaluationResultsChart from '../Components/EvaluationResultsChart/EvaluationResultsChart'
import EducationalLevelChart from '../Components/EducationalLevelChart/EducationalLevelChart'
import AverageTestResults from '../Components/AverageTestResults/AverageTestResults'
import Checklist from '../Components/Checklist/Checklist'
function ChartHomePageCoordinator() {
    return (

        <div className='homepage'>
            <div className="b-home">
                <div className="k-home">
                    <GenderChart />
                </div>
                <div className="k-home">
                <PunctualityRateChart data={81} color={'#7BBC67'} text={'Punctuality rate'} />
                      <PunctualityRateChart data={35} color={'#007AFF'} text={'Improvement rate'} />

                </div>
            </div>
            <div className="b-home">
                <div className="k-home">


                     <EvaluationResultsChart /> 
                     <EducationalLevelChart /> 
                </div>
                <div className="k-home">
                    <AverageTestResults />
                </div>
            </div>
            <div className="b-home">

                <Checklist />

            </div>
        </div>
    )
}

export default ChartHomePageCoordinator