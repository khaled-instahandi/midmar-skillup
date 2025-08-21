import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectNav from "src/components/ProjectNav/ProjectNav";
import CoachActivitiesDetails from "./CoachActivites/CoachActivitiesDetails/CoachActivitiesDetails";
import CoachAttendance from "./CoachAttendance/CoachAttendance";
import CoachReports from "./CoachReports/CoachReports";
import CoachReceipt from "./CoachReceipt/CoachReceipt";
import CoachTrainingMaterial from "./CoachTrainingMaterial/CoachTrainingMaterial";
import CoachExam from "./CoachExam/CoachExam";
import CoachRankingExam from "./CoachRankingExam/CoachRankingExam";

function CoachDashboard() {
  return (
    <div>
      <ProjectNav />
      <Routes>
        <Route
          path="/activities/details"
          element={<CoachActivitiesDetails />}
        />
        <Route path="/activities/attendance" element={<CoachAttendance />} />
        <Route path="/activities/reports" element={<CoachReports />} />
        <Route path="/activities/receipt" element={<CoachReceipt />} />
        <Route
          path="/activities/training-material"
          element={<CoachTrainingMaterial />}
        />
        <Route path="/activities/coach-exams" element={<CoachExam />} />
        <Route
          path="/activities/ranking-exams"
          element={<CoachRankingExam />}
        />
      </Routes>
    </div>
  );
}

export default CoachDashboard;
