import React from 'react'
import StakeholdersTable from './StakeholdersTable/StakeholdersTable'
import CommunicationPlan from './CommunicationPlan/CommunicationPlan'
import RecruitmentPlanTable from './RecruitmentPlan/RecruitmentPlanTable'

function Stakeholders() {
    return (
        <div className='activity-page'>
            <StakeholdersTable />
            <CommunicationPlan />
            <RecruitmentPlanTable />
        </div>
    )
}

export default Stakeholders