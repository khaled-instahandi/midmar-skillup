import React from 'react'
import ProjectNav from '../../../components/ProjectNav/ProjectNav'
import { Route, Routes } from 'react-router-dom'
import ChartHomePageCoordinator from '../ChartHomePageCoordinator/ChartHomePageCoordinator'
import ActivitiesPage from '../ActivitiesPage/ActivitiesPage'
import TrainingSessions from '../TrainingSessions/TrainingSessions'
import Instructors from '../Instructors/Instructors'
import Trainees from '../Trainees/Trainees'
import Exams from '../Exams/Exams'
import Objectives from '../Objectives/Objectives'

function DashboardCoordinator({role}) {
  console.log("role in DashboardCoordinator is:", role); // Log the received role
  return (
    <>
      <ProjectNav role={role} />
      <Routes>
        <Route path='/' element={<ChartHomePageCoordinator />} />

        <Route path='/activity-page' element={<ActivitiesPage />} />
        <Route path='/training-sessions' element={<TrainingSessions />} />
        <Route path='/instructors' element={<Instructors />} />
        <Route path='/trainees' element={<Trainees />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/objectives' element={<Objectives />} />

      </Routes>

    </>
  )
}

export default DashboardCoordinator