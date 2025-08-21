import "devextreme/dist/css/dx.light.css";
import React from "react";
import { redirect, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import Profile from "./pages/Profile/Profile";
import Policies from "./pages/Policies/Policies";
import Complaints from "./pages/Complaints/Complaints";
import Leave from "./pages/Leave/Leave";
import Panel from "./pages/Panel/Panel";
import StyleTile from "./pages/StyleTile/StyleTile";
import SignUp from "./pages/SignUp/SignUp";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import AccountCreated from "./pages/AccountCreated/AccountCreated";
import LogicalFramework from "./pages/LogicalFramework/LogicalFramework";
import ProjectList from "./pages/ProjectList/ProjectList";
import Activity from "./pages/Activity/Activity";

import "./App.css";
import SubActivitiesTable from "./pages/Activity/SubActivitiesTable/SubActivitiesTable";
import UpdatesTable from "./pages/Activity/UpdatesTable/UpdatesTable";
import DetailsActivity from "./pages/Activity/DetailsActivity/DetailsActivity";
import BudgetTable from "./pages/Budget/BudgetTable/BudgetTable";
import RiskRegisterTable from "./pages/RiskRegister/RiskRegisterTable";
import ProcurementPlan from "./pages/ProcurementPlan/ProcurementPlan";
import Stakeholders from "./pages/Stakeholders/Stakeholders";
import Signatures from "./pages/Signatures/Signatures";
import Notifications from "./pages/Notifications/Notifications";
import DashboardCoordinator from "./pages/Coordinator/DashboaedCoordinator/DashboardCoordinator";
import ActivitiesPage from "./pages/Coordinator/ActivitiesPage/ActivitiesPage";
import TrainingSessions from "./pages/Coordinator/TrainingSessions/TrainingSessions";
import Instructors from "./pages/Coordinator/Instructors/Instructors";
import Trainees from "./pages/Coordinator/Trainees/Trainees";
import Exams from "./pages/Coordinator/Exams/Exams";
import Objectives from "./pages/Coordinator/Objectives/Objectives";
import NotificationCoordinator from "./pages/Coordinator/NotificationCoordinator/NotificationCoordinator";
import ComplaintsCoordinatorTable from "./pages/Coordinator/ComplaintsCoordinator/ComplaintsCoordinatorTable/ComplaintsCoordinatorTable";
import PanelCoordinator from "./pages/Coordinator/PanelCoordinator/PanelCoordinator";
import VacationsCoordinator from "./pages/Coordinator/VacationsCoordinator/VacationsCoordinator";
import LoginAr from "./pages/ar/Login/LoginAr";
import SignUpAr from "./pages/ar/SignUp/SignUpAr";
import EmailVerificationAr from "./pages/EmailVerification/EmailVerification";
import DashboardApprentice from "./pages/Apprentice/DashboardApprentice/DashboardApprentice";
import Activities from "./pages/Apprentice/Activities/Activities";
import ActivitiesDetails from "./pages/Apprentice/Activities/ActivitiesDetails";
import ComplaintContentApprentice from "./pages/Apprentice/ComplaintContentApprentice/ComplaintContentApprentice";
import ApprenticeCalendar from "./pages/Apprentice/ApprenticeCalendar/ApprenticeCalendar";
import PanelApprentice from "./pages/Apprentice/PanelApprentice/PanelApprentice";
import ApprenticeNotification from "./pages/Apprentice/ApprenticeNotification/ApprenticeNotification";
import InteractivePanel from "./pages/Coach/InteractivePanel/InteractivePanel";
import CoachActivities from "./pages/Coach/CoachActivites/CoachActivities";
import CoachActivitiesDetails from "./pages/Coach/CoachActivites/CoachActivitiesDetails/CoachActivitiesDetails";
import CoachDashboard from "./pages/Coach/CoachDashboard";
import CoachAttendance from "./pages/Coach/CoachAttendance/CoachAttendance";
import CoachReports from "./pages/Coach/CoachReports/CoachReports";
import CoachReceipt from "./pages/Coach/CoachReceipt/CoachReceipt";
import CoachTrainingMaterial from "./pages/Coach/CoachTrainingMaterial/CoachTrainingMaterial";
import CoachExam from "./pages/Coach/CoachExam/CoachExam";
import CoachRankingExam from "./pages/Coach/CoachRankingExam/CoachRankingExam";
import CoachTest from "./pages/Coach/CoachTest/CoachTest";
import CoachTestDetails from "./pages/Coach/CoachTest/CoachTestDetails";
import CoachTable from "./pages/Coach/CoachTable/CoachTable";
import CoachPage from "./pages/Coach/CoachTable/CoachPage/CoachPage";
import CoachTrainingInstructions from "./pages/Coach/CoachTable/CoachTrainingInstructions/CoachTrainingInstructions";
import CoachFileTemplates from "./pages/Coach/CoachTable/CoachFileTemplates/CoachFileTemplates";
import CoachComplaintContent from "./pages/Coach/CoachComplaintContent/CoachComplaintContent";
import CoachPanel from "./pages/Coach/CoachPanel/CoachPanel";
import CoachTrainingVacancies from "./pages/Coach/CoachTrainingVacancies/CoachTrainingVacancies";
import CoachTrainingVacanciesDetails from "./pages/Coach/CoachTrainingVacanciesDetails/CoachTrainingVacanciesDetails";
import CoachRequests from "./pages/Coach/CoachRequests/CoachRequests";
import DashboardSystemAdmin from "./pages/SystemAdmin/DashboardSystemAdmin/DashboardSystemAdmin";

import DonorsTable from "./pages/SystemAdmin/Donors/DonorsTable";
import CoursesTable from "./pages/SystemAdmin/Courses/CoursesTable";
import PurchaseRequestsTable from "./pages/SystemAdmin/PurchaseRequests/PurchaseRequestsTable";
import UserProfilesTable from "./pages/SystemAdmin/UserProfiles/UserProfilesTable";
import UsersTable from "./pages/SystemAdmin/Users/UsersTable";
import TrainersTable from "./pages/SystemAdmin/Trainers/TrainersTable";
import EvaluationForms from "./SystemAdmin/EvaluationForms";
import EvaluationFormDetail from "./SystemAdmin/EvaluationFormDetail";
import PurchaseRequests from "./pages/SystemAdmin/Signatures/PurchaseRequests/PurchaseRequests";
import SignaturesContainer from "./pages/SystemAdmin/Signatures/SignaturesContainer";
import FilesCenter from "./pages/SystemAdmin/FilesCenter/FilesCenter";
function App() {
  // const role = localStorage.getItem("role");
  // if (!role) {
  //   redirect("/login");
  // }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* Coordinator Trip */}
          <Route
            path="/dashboard-coordinator"
            element={<DashboardCoordinator />}
          />
          <Route
            path="/activities-coordinator"
            element={<ActivitiesPage />}
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

          <Route
            path="/dashboard-coordinator/objectives"
            element={<Objectives />}
          />
          <Route
            path="/notification-coordinator"
            element={<NotificationCoordinator />}
          />
          <Route
            path="/complaints-coordinator"
            element={<ComplaintsCoordinatorTable />}
          />
          <Route path="/panel-coordinator" element={<PanelCoordinator />} />
          <Route path="/leave-coordinator" element={<VacationsCoordinator />} />

          {/* Project officer Trip */}
          <Route
            path="/dashboard/logical-framework"
            element={<LogicalFramework />}
          />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/dashboard/activity" element={<Activity />} />
          <Route
            path="/dashboard/activity/sub-activities-table"
            element={<SubActivitiesTable />}
          />
          <Route
            path="/dashboard/activity/updates-table"
            element={<UpdatesTable />}
          />
          <Route
            path="/dashboard/activity/details-activity"
            element={<DetailsActivity />}
          />
          <Route path="/dashboard/budget" element={<BudgetTable />} />
          <Route
            path="/dashboard/risk-register"
            element={<RiskRegisterTable />}
          />
          <Route
            path="/dashboard/procurement-plan"
            element={<ProcurementPlan />}
          />
          <Route path="/dashboard/stakeholders" element={<Stakeholders />} />

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
          <Route path="/calendar-apprentice" element={<ApprenticeCalendar />} />
          <Route path="/panel-apprentice" element={<PanelApprentice />} />
          <Route
            path="/notification-apprentice"
            element={<ApprenticeNotification />}
          />
          {/* Coach Trip */}
          <Route path="/coach-requests" element={<CoachRequests />} />

          <Route
            path="/coach-training-vacancies"
            element={<CoachTrainingVacancies />}
          />
          <Route
            path="/coach-training-vacancies/details"
            element={<CoachTrainingVacanciesDetails />}
          />

          <Route path="/coach-complaint" element={<CoachComplaintContent />} />
          <Route path="/coach-panel" element={<CoachPanel />} />

          <Route path="/coach-dashboard" element={<CoachDashboard />} />
          <Route path="/coach-page" element={<CoachPage />} />

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

          <Route
            path="/coach/interactive-panel"
            element={<InteractivePanel />}
          />
          <Route path="/coach-dashboard/activities" element={<CoachActivities />} />
          <Route
            path="/coach-dashboard/activities/attendance"
            element={<CoachAttendance />}
          />
          <Route
            path="/coach-dashboard/activities/details"
            element={<CoachActivitiesDetails />}
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
          <Route
            path="/coach-dashboard/activities/coach-exams"
            element={<CoachExam />}
          />
          <Route
            path="/coach-dashboard/activities/ranking-exams"
            element={<CoachRankingExam />}
          />
          <Route path="/coach/test" element={<CoachTest />} />
          <Route path="/coach/test/details" element={<CoachTestDetails />} />

          {/* System Admin Trip */}
          <Route
            path="/dashboard-system-admin"
            element={<DashboardSystemAdmin />}
          />
          <Route
            path="/dashboard-system-admin/donors"
            element={
              <DonorsTable // Pass any necessary props here
              />
            }
          />
          {/* <CoursesTable /> */}
          <Route
            path="/dashboard-system-admin/courses"
            element={
              <CoursesTable // Pass any necessary props here
              />
            }
          />
          {/* Purchase Requests */}
          <Route
            path="/dashboard-system-admin/purchase-requests"
            element={
              <PurchaseRequestsTable // Pass any necessary props here
              />
            }
          />
          {/* User Profiles */}
          <Route
            path="/dashboard-system-admin/user-profiles"
            element={
              <UserProfilesTable // Pass any necessary props here
              />
            }
          />
          {/* Users */}
          <Route
            path="/dashboard-system-admin/users"
            element={
              <UsersTable // Pass any necessary props here
              />
            }
          />
          {/* Trainers */}
          <Route
            path="/dashboard-system-admin/trainers"
            element={
              <TrainersTable // Pass any necessary props here
              />
            }
          />
          {/* EvaluationForms */}
          <Route
            path="/dashboard-system-admin/evaluation-forms"
            element={
              <EvaluationForms />
            }
          />
          <Route
            path="/dashboard-system-admin/evaluation-forms/:type/:subtype"
            element={
              <EvaluationFormDetail />
            }
          />
          {/* Signatures/PurchaseRequests */}

          <Route
            path="/dashboard-system-admin/signatures"
            element={
              <SignaturesContainer />
            }
          />
          {/* FilesCenter */}
          <Route
            path="/dashboard-system-admin/files-center"
            element={<FilesCenter />}
          />
        </Route>

        {/* Auth English Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/sginup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/account-created" element={<AccountCreated />} />

        {/* Auth Ar Pages */}
        <Route path="/ar/login" element={<LoginAr />} />
        <Route path="/ar/sginup" element={<SignUpAr />} />
        <Route
          path="/ar/email-verification"
          element={<EmailVerificationAr />}
        />
      </Routes>
    </Router>
  );
}

export default App;
