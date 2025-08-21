import React from 'react'
import './HomePage.css'
import { Route, Routes } from 'react-router-dom'
import LogicalFramework from '../LogicalFramework/LogicalFramework'
import ChartHomePage from '../ChartHomePage/ChartHomePage'
import ProjectNav from '../../components/ProjectNav/ProjectNav'
import ActivityTable from '../Activity/ActivityTable/ActivityTable'
import Activity from '../Activity/Activity'
import SubActivitiesTable from '../Activity/SubActivitiesTable/SubActivitiesTable'
import UpdatesTable from '../Activity/UpdatesTable/UpdatesTable'
import DetailsActivity from '../Activity/DetailsActivity/DetailsActivity'
import BudgetTable from '../Budget/BudgetTable/BudgetTable'
import RiskRegisterTable from '../RiskRegister/RiskRegisterTable'
import ProcurementPlan from '../ProcurementPlan/ProcurementPlan'
import Stakeholders from '../Stakeholders/Stakeholders'

function HomePage({role}) {

  return (
    <>
      <ProjectNav role={role} />

      <Routes>
        <Route path='/budget' element={<BudgetTable />} />
        <Route path='/risk-register' element={<RiskRegisterTable />} />
        <Route path='/procurement-plan' element={<ProcurementPlan />} />
        <Route path='/stakeholders' element={<Stakeholders />} />

        <Route path='/logical-framework' element={<LogicalFramework />} />
        <Route path='/activity' element={<Activity />} >

          <Route path='sub-activities-table' element={<SubActivitiesTable />} />
          <Route path='updates-table' element={<UpdatesTable />} />
          <Route path='details-activity' element={<DetailsActivity />} />

        </Route>

        <Route path='/' element={<ChartHomePage />} />
      </Routes>
    </>
  )
}

export default HomePage