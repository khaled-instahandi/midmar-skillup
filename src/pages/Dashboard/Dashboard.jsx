import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { Routes, Route, redirect } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Profile from "../../pages/Profile/Profile";
import Policies from "../../pages/Policies/Policies";
import Complaints from "../../pages/Complaints/Complaints";
import Leave from "../../pages/Leave/Leave";
import Panel from "../../pages/Panel/Panel";
import StyleTile from "../StyleTile/StyleTile";

import LogicalFramework from "../LogicalFramework/LogicalFramework";

import ProjectList from "../ProjectList/ProjectList";
import Activity from "../Activity/Activity";
import BudgetTable from "../Budget/BudgetTable/BudgetTable";
import RiskRegisterTable from "../RiskRegister/RiskRegisterTable";
import ProcurementPlan from "../ProcurementPlan/ProcurementPlan";
import Stakeholders from "../Stakeholders/Stakeholders";
import Signatures from "../Signatures/Signatures";
import Notifications from "../Notifications/Notifications";
import DashboardCoordinator from "../Coordinator/DashboaedCoordinator/DashboardCoordinator";
import ActivitiesPage from "../Coordinator/ActivitiesPage/ActivitiesPage";
import TrainingSessions from "../Coordinator/TrainingSessions/TrainingSessions";
import Instructors from "../Coordinator/Instructors/Instructors";
import Trainees from "../Coordinator/Trainees/Trainees";
import Exams from "../Coordinator/Exams/Exams";
import Objectives from "../Coordinator/Objectives/Objectives";
import NotificationCoordinator from "../Coordinator/NotificationCoordinator/NotificationCoordinator";
import ComplaintsCoordinatorTable from "../Coordinator/ComplaintsCoordinator/ComplaintsCoordinatorTable/ComplaintsCoordinatorTable";
import PanelCoordinator from "../Coordinator/PanelCoordinator/PanelCoordinator";
import VacationsCoordinator from "../Coordinator/VacationsCoordinator/VacationsCoordinator";
import DashboardApprentice from "../Apprentice/DashboardApprentice/DashboardApprentice";
import Activities from "../Apprentice/Activities/Activities";
import ActivitiesDetails from "../Apprentice/Activities/ActivitiesDetails";
import ComplaintContentApprentice from "../Apprentice/ComplaintContentApprentice/ComplaintContentApprentice";
import ApprenticeCalendar from "../Apprentice/ApprenticeCalendar/ApprenticeCalendar";
import PanelApprentice from "../Apprentice/PanelApprentice/PanelApprentice";
import ApprenticeNotification from "../Apprentice/ApprenticeNotification/ApprenticeNotification";
import InteractivePanel from "../Coach/InteractivePanel/InteractivePanel";
import CoachActivities from "../Coach/CoachActivites/CoachActivities";
import CoachActivitiesDetails from "../Coach/CoachActivites/CoachActivitiesDetails/CoachActivitiesDetails";
import CoachDashboard from "../Coach/CoachDashboard";
import CoachAttendance from "../Coach/CoachAttendance/CoachAttendance";
import CoachReports from "../Coach/CoachReports/CoachReports";
import CoachReceipt from "../Coach/CoachReceipt/CoachReceipt";
import CoachTrainingMaterial from "../Coach/CoachTrainingMaterial/CoachTrainingMaterial";
import CoachExam from "../Coach/CoachExam/CoachExam";
import CoachRankingExam from "../Coach/CoachRankingExam/CoachRankingExam";
import CoachTest from "../Coach/CoachTest/CoachTest";
import CoachTestDetails from "../Coach/CoachTest/CoachTestDetails";
import CoachTable from "../Coach/CoachTable/CoachTable";
import CoachPage from "../Coach/CoachTable/CoachPage/CoachPage";
import CoachTrainingInstructions from "../Coach/CoachTable/CoachTrainingInstructions/CoachTrainingInstructions";
import CoachFileTemplates from "../Coach/CoachTable/CoachFileTemplates/CoachFileTemplates";
import CoachComplaintContent from "../Coach/CoachComplaintContent/CoachComplaintContent";
import CoachPanel from "../Coach/CoachPanel/CoachPanel";
import CoachTrainingVacancies from "../Coach/CoachTrainingVacancies/CoachTrainingVacancies";
import CoachTrainingVacanciesDetails from "../Coach/CoachTrainingVacanciesDetails/CoachTrainingVacanciesDetails";
import CoachRequests from "../Coach/CoachRequests/CoachRequests";
import DashboardSystemAdmin from "../SystemAdmin/DashboardSystemAdmin/DashboardSystemAdmin";

import DonorsTable from "../SystemAdmin/Donors/DonorsTable";
import CoursesTable from "../SystemAdmin/Courses/CoursesTable";
import PurchaseRequestsTable from "../SystemAdmin/PurchaseRequests/PurchaseRequestsTable";
import UserProfilesTable from "../SystemAdmin/UserProfiles";
import UsersTable from "../SystemAdmin/Users";
import TrainersTable from "../SystemAdmin/Trainers";
import EvaluationForms from "src/SystemAdmin/EvaluationForms";
import EvaluationFormDetail from "src/SystemAdmin/EvaluationFormDetail";
import PurchaseRequests from "../SystemAdmin/Signatures/PurchaseRequests/PurchaseRequests";
import SignaturesContainer from "../SystemAdmin/Signatures/SignaturesContainer";
import FilesCenter from "../SystemAdmin/FilesCenter/FilesCenter";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const role = localStorage.getItem("role");
  // if (!role) {
  //   redirect("/login");
  // }
  // console.log(role);
  return (
    <>
      <div dir={role === "apprentice" || role === "coach" ? "rtl" : undefined}>
        <Navbar toggleSidebar={toggleSidebar} role={role} />
        <Sidebar
          isOpen={!isSidebarOpen}
          toggleSidebar={toggleSidebar}
          role={role}
        />
        <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <Routes>
            {/* Coordinator Trip  */}
            <Route
              path="/dashboard-coordinator"
              element={<DashboardCoordinator />}
            >
              <Route
                path="/dashboard-coordinator/objectives"
                element={<Objectives />}
              />

              <Route
                path="/dashboard-coordinator/training-sessions"
                element={<TrainingSessions />}
              />
              <Route
                path="/dashboard-coordinator/instructors"
                element={<Instructors />}
              />
              <Route
                path="/dashboard-coordinator/trainees"
                element={<Trainees />}
              />
              <Route path="/dashboard-coordinator/exams" element={<Exams />} />
            </Route>
            <Route
              path="/notification-coordinator"
              element={<NotificationCoordinator />}
            />
            <Route
              path="/complaints-coordinator"
              element={<ComplaintsCoordinatorTable />}
            />
            <Route path="/panel-coordinator" element={<PanelCoordinator />} />
            <Route
              path="/leave-coordinator"
              element={<VacationsCoordinator />}
            />
            <Route
              path="/activities-coordinator"
              element={<ActivitiesPage />}
            />
            {/* Project officer Trip */}
            <Route path="/dashboard" element={<HomePage />}>
              <Route path="logical-framework" element={<LogicalFramework />} />
              <Route path="/dashboard/activity/*" element={<Activity />} />
              <Route path="/dashboard/budget" element={<BudgetTable />} />
              <Route
                path="/dashboard/risk-register"
                element={<RiskRegisterTable />}
              />
              <Route
                path="/dashboard/stakeholders"
                element={<Stakeholders />}
              />

              <Route
                path="/dashboard/procurement-plan"
                element={<ProcurementPlan />}
              />
            </Route>
            <Route path="/project" element={<ProjectList />} />
            <Route path="/signatures" element={<Signatures />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/notification" element={<Notifications />} />
            <Route path="/components" element={<StyleTile />} />
            {/* Apprentice Trip */}
            <Route
              path="/dashboard-apprentice"
              element={<DashboardApprentice />}
            />
            <Route path="/activities-apprentice" element={<Activities />} />
            <Route
              path="/activities-apprentice/activities-details"
              element={<ActivitiesDetails />}
            />
            <Route
              path="/complaints-apprentice"
              element={<ComplaintContentApprentice />}
            />
            <Route
              path="/calendar-apprentice"
              element={<ApprenticeCalendar />}
            />
            <Route path="/panel-apprentice" element={<PanelApprentice />} />
            <Route
              path="/notification-apprentice"
              element={<ApprenticeNotification />}
            />
            {/* Coach Trip */}
            <Route path="/coach-panel" element={<CoachPanel />} />
            <Route
              path="/coach-training-vacancies"
              element={<CoachTrainingVacancies />}
            />
            <Route
              path="/coach-training-vacancies/details"
              element={<CoachTrainingVacanciesDetails />}
            />
            <Route path="/coach-requests" element={<CoachRequests />} />

            <Route path="/coach/test" element={<CoachTest />} />
            <Route path="/coach/test/details" element={<CoachTestDetails />} />
            <Route path="/coach-dashboard" element={<CoachDashboard />}>
              <Route
                path="/coach-dashboard/activities/details"
                element={<CoachActivitiesDetails />}
              />
              <Route
                path="/coach-dashboard/activities/ranking-exams"
                element={<CoachRankingExam />}
              />
              <Route
                path="/coach-dashboard/activities/coach-exams"
                element={<CoachExam />}
              />
              <Route
                path="/coach-dashboard/activities/attendance"
                element={<CoachAttendance />}
              />
              <Route
                path="/coach-dashboard/activities/reports"
                element={<CoachReports />}
              />
              <Route
                path="/coach-dashboard/activities/receipt"
                element={<CoachReceipt />}
              />
              <Route
                path="/coach-dashboard/activities/training-material"
                element={<CoachTrainingMaterial />}
              />
            </Route>
            <Route path="/coach-page" element={<CoachPage />}>
              <Route
                path="/coach-page/attendance-schedule"
                element={<CoachTable />}
              />
              <Route
                path="/coach-page/training-instructions"
                element={<CoachTrainingInstructions />}
              />
              <Route
                path="/coach-page/file-template"
                element={<CoachFileTemplates />}
              />
            </Route>

            <Route
              path="/coach/interactive-panel"
              element={<InteractivePanel />}
            />
            <Route
              path="/coach-dashboard/activities"
              element={<CoachActivities />}
            />
            <Route
              path="/coach-complaint"
              element={<CoachComplaintContent />}
            />

            {/* System Admin Trip */}
            <Route
              path="/dashboard-system-admin"
              element={<DashboardSystemAdmin />}
            />
            {/* donors */}
            <Route
              path="/dashboard-system-admin/donors"
              element={<DonorsTable />}
            />
            {/* courses */}
            <Route
              path="/dashboard-system-admin/courses"
              element={<CoursesTable />}
            />
            <Route
              path="/dashboard-system-admin/purchase-requests"
              element={<PurchaseRequestsTable />}
            />
            {/* User Profiles */}
            <Route
              path="/dashboard-system-admin/user-profiles"
              element={<UserProfilesTable />}
            />
            {/* users */}
            <Route
              path="/dashboard-system-admin/users"
              element={
                <UsersTable /> // Pass any necessary props here
              }
            />
            {/* trainers */}
            <Route
              path="/dashboard-system-admin/trainers"
              element={
                <TrainersTable /> // Pass any necessary props here
              }
            />
            <Route
              path="/dashboard-system-admin/evaluation-forms"
              element={<EvaluationForms />}
            />
            <Route
              path="/dashboard-system-admin/evaluation-forms/:type/:subtype"
              element={<EvaluationFormDetail />}
            />
            <Route
              path="/dashboard-system-admin/signatures"
              element={<SignaturesContainer />}
            />
            {/* FilesCenter */}
            <Route
              path="/dashboard-system-admin/files-center"
              element={<FilesCenter />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
