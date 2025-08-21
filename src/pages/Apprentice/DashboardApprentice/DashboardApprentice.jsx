import React from 'react'
import ProjectNav from '../../../components/ProjectNav/ProjectNav'
import { Route, Routes } from 'react-router-dom'
import ChartHomePageApprentice from '../ChartHomePageApprentice/ChartHomePageApprentice'

function DashboardApprentice() {
  return (
    <>
      {/* <ProjectNav /> */}
      <Routes>
        <Route path='/' element={<ChartHomePageApprentice />} />
        {/*
        <Route path='/activity-page' element={<ActivitiesPage />} />
        <Route path='/training-sessions' element={<TrainingSessions />} />
        <Route path='/instructors' element={<Instructors />} />
        <Route path='/trainees' element={<Trainees />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/objectives' element={<Objectives />} /> */}

      </Routes>

    </>
  )
}

export default DashboardApprentice