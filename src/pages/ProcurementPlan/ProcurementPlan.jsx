import React from 'react'
import ProcurementPlanTable from './ProcurementPlanTable/ProcurementPlanTable'
import PurchaseRequestsTable from './PurchaseRequestsTable/PurchaseRequestsTable'

function ProcurementPlan() {
    return (
        <div className='activity-page'>
            <ProcurementPlanTable />
            <PurchaseRequestsTable />
        </div>
    )
}

export default ProcurementPlan