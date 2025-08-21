import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import "./ProjectNav.css";
import TagRight from "../../images/tag-right.svg";
import { ReactComponent as StakeholderIcon } from "../../images/profile-2user.svg";
import { ReactComponent as PresentionIcon } from "../../images/presention-chart.svg";
import { ReactComponent as LogicalIcon } from "../../images/hierarchy-square.svg";
import { ReactComponent as ActivitiesIcon } from "../../images/data-2.svg";
import { ReactComponent as BudgetIcon } from "../../images/chart-square.svg";
import { ReactComponent as InfoIcon } from "../../images/info-circle-nav.svg";
import { ReactComponent as PurchaseIcon } from "../../images/bag-2.svg";
import { ReactComponent as TimerIcon } from "../../images/timer-icon.svg";
import { ReactComponent as InstructorsIcon } from "../../images/instructors-icon.svg";
import { ReactComponent as TraineesIcon } from "../../images/profile-2user.svg";
import { ReactComponent as ExamIcon } from "../../images/exam-icon.svg";
import { ReactComponent as ObjectivesIcon } from "../../images/cup-icon.svg";
import { ReactComponent as SNRIcon } from "../../images/notification-bing.svg";
import { ReactComponent as GridIcon } from "../../images/grid-eraser.svg";
import { ReactComponent as TextIcon } from "../../images/clipboard-text.svg";
import { ReactComponent as RankIcon } from "../../images/ranking-exam.svg";
import { ReactComponent as ReceiptIcon } from "../../images/receipt.svg";
import { ReactComponent as BookIcon } from "../../images/book-icon.svg";
import { ReactComponent as FolderIcon } from "../../images/folder-icon.svg";

import TrainingHeader from "../../pages/Coordinator/TrainingHeader/TrainingHeader";

const ProjectNav = () => {
  const location = useLocation();
  const checkActive = (path) => {
    const isDashboard = path === "/dashboard" ?? "/dashboard-coordinator";
    const isExactPath = location.pathname === path;
    const isParentPath =
      location.pathname.startsWith(path + "/") &&
      (path !== "/dashboard") & "/dashboard-coordinator";

    return isDashboard ? isExactPath : isExactPath || isParentPath;
  };

  const navItems = [
    { name: "Dashboard", icon: <PresentionIcon />, path: "/dashboard" },
    {
      name: "Logical framework",
      icon: <LogicalIcon />,
      path: "/dashboard/logical-framework",
    },
    {
      name: "Activities",
      icon: <ActivitiesIcon />,
      path: "/dashboard/activity/sub-activities-table",
    },
    { name: "Budget", icon: <BudgetIcon />, path: "/dashboard/budget" },
    { name: "Risks", icon: <InfoIcon />, path: "/dashboard/risk-register" },
    {
      name: "Purchase orders",
      icon: <PurchaseIcon />,
      path: "/dashboard/procurement-plan",
    },
    {
      name: "stakeholders",
      icon: <StakeholderIcon />,
      path: "/dashboard/stakeholders",
    },
  ];
  const navItemsCoordinator = [
    {
      name: "Dashboard",
      icon: <PresentionIcon />,
      path: "/dashboard-coordinator",
    },
    {
      name: "Training Sessions",
      icon: <TimerIcon />,
      path: "/dashboard-coordinator/training-sessions",
    },
    {
      name: "Instructors",
      icon: <InstructorsIcon />,
      path: "/dashboard-coordinator/instructors",
    },
    {
      name: "Trainees",
      icon: <TraineesIcon />,
      path: "/dashboard-coordinator/trainees",
    },
    { name: "Exams", icon: <ExamIcon />, path: "/dashboard-coordinator/exams" },
    {
      name: "Objectives",
      icon: <ObjectivesIcon />,
      path: "/dashboard-coordinator/objectives",
    },
    { name: "SRN", icon: <SNRIcon />, path: "/dashboard-coordinator/snr" },
  ];
  const navItemsCoach = [
    {
      name: "التفاصيل",
      icon: <PresentionIcon />,
      path: "/coach-dashboard/activities/details",
    },
    {
      name: "جدول الحضور",
      icon: <GridIcon />,
      path: "/coach-dashboard/activities/attendance",
    },
    {
      name: "التقرير",
      icon: <TextIcon />,
      path: "/coach-dashboard/activities/reports",
    },
    {
      name: " الاختبار",
      icon: <ExamIcon />,
      path: "/coach-dashboard/activities/coach-exams",
    },
    {
      name: "نتائج الاختبار",
      icon: <RankIcon />,
      path: "/coach-dashboard/activities/ranking-exams",
    },
    {
      name: "إيصال الدفع",
      icon: <ReceiptIcon />,
      path: "/coach-dashboard/activities/receipt",
    },
  ];
  const navItemsCoachPage = [
    {
      name: "جدول الحضور",
      icon: <TextIcon />,
      path: "/coach-page/attendance-schedule",
    },
    {
      name: "تعليمات التدريب",
      icon: <BookIcon />,
      path: "/coach-page/training-instructions",
    },

    {
      name: "نماذج الملفات",
      icon: <FolderIcon />,
      path: "/coach-page/file-template",
    },
  ];
  // const role = "coordinator";
  // const role = "admin";
  const role = localStorage.getItem("role");

  return (
    <div className="project-nav">
      <ul className="project-nav__list">
        {role === "coordinator" &&
          navItemsCoordinator.map((item) => (
            <li
              key={item.name}
              className={`project-nav__item ${
                checkActive(item.path) ? "active" : ""
              }`}
            >
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        {role === "admin" &&
          navItems.map((item) => (
            <li
              key={item.name}
              className={`project-nav__item ${
                checkActive(item.path) ? "active" : ""
              }`}
            >
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        {role === "coach" &&
          location.pathname.startsWith("/coach-dashboard") &&
          navItemsCoach.map((item) => (
            <li
              key={item.name}
              className={`project-nav__item ${
                checkActive(item.path) ? "active" : ""
              }`}
            >
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        {role === "coach" &&
          location.pathname.startsWith("/coach-page") &&
          navItemsCoachPage.map((item) => (
            <li
              key={item.name}
              className={`project-nav__item ${
                checkActive(item.path) ? "active" : ""
              }`}
            >
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
      </ul>
      {location.pathname.startsWith("/dashboard") ? (
        <>
          <div className="project-header">
            <span className="project-name-title">Project name:</span>
            <h1>
              <img src={TagRight} alt="" />
              Community Cohesion as a Driver for Sustainable Development
            </h1>
            {location.pathname === "/dashboard" ? (
              <>
                {" "}
                <div className="project-details">
                  <span className="project-document">
                    Project documents:
                    <span className="download-link">
                      <Link className="download-btn">download </Link>
                      <FaDownload />
                    </span>
                  </span>
                  <span className="donors">
                    Donors:<span className="value-p"> COSV</span>
                  </span>
                  <span className="project-code">
                    Project code:<span className="value-p"> M00165</span>
                  </span>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}

      {location.pathname.concat("dashboard-coordinator") ? (
        <>
          <TrainingHeader />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectNav;
