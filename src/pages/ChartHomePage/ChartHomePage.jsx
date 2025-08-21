import React from 'react'
import ProjectNav from '../../components/ProjectNav/ProjectNav'
import ProjectBudget from '../../charts/ProjectBudget/ProjectBudget'
import DonorPayments from '../../charts/DonorPayments/DonorPayments'
import BudgetCard from '../../charts/BudgetCard/BudgetCard'
import ActualValueCard from '../../charts/ActualValueCard/ActualValueCard'
import ProgressBarCard from '../../charts/ProgressBarCard/ProgressBarCard'
import EstimateToCompleteCard from '../../charts/EstimateToCompleteCard/EstimateToCompleteCard'
import CircularProgressbar from '../../charts/EstimateAtCompletionCircular/EstimateAtCompletionCircular'
import ProjectPerformanceCard from '../../charts/ProjectPerformanceCard/ProjectPerformanceCard'
import Timeline from '../../charts/Timeline/Timeline'
import './ChartHomePage.css'
function ChartHomePage() {
    return (
        <div className='homepage'>
            {/* <ProjectNav /> */}
            <div className="k-home">

                <Timeline />
            </div>
            <div className="b-home">
                <div className="k-home">

                    <ProjectBudget />
                </div>
                <div className="k-home">

                    <DonorPayments />
                </div>
            </div>
            <div className="b-home">
                <div className="k-home">
                    <BudgetCard />
                    <ActualValueCard />
                </div>
                <div className="k-home">


                    <ProgressBarCard />
                </div>
            </div>
            <div className="b-home">
                <div className="k-home">

                    <EstimateToCompleteCard />
                    <CircularProgressbar />
                </div>
                <div className="k-home">

                    <ProjectPerformanceCard />
                </div>
            </div>
            {/* <div className="b-home">

            </div> */}
        </div>
    )
}

export default ChartHomePage