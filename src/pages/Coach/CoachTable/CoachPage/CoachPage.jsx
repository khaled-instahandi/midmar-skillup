import React from "react";
import { Route, Routes } from "react-router-dom";
import ProjectNav from "src/components/ProjectNav/ProjectNav";
import CoachTable from "../CoachTable";
import CoachTrainingInstructions from "../CoachTrainingInstructions/CoachTrainingInstructions";
import CoachFileTemplates from "../CoachFileTemplates/CoachFileTemplates";

function CoachPage() {
  return (
    <div>
      <ProjectNav />
      <Routes>
        <Route path="/attendance-schedule" element={<CoachTable />} />
        <Route
          path="/training-instructions"
          element={<CoachTrainingInstructions />}
        />
        <Route
          path="/file-template"
          element={<CoachFileTemplates />}
        />
      </Routes>
    </div>
  );
}

export default CoachPage;
