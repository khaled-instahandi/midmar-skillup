import React from "react";
import ActivityTable from "./ActivityTable/ActivityTable";
import "./Activity.css";
import GanttChart from "./GanttCharts/GanttCharts";
import GanttCharts from "./GanttCharts/GanttCharts";
import Breadcrumbs from "./Breadcrumbs";
import SubActivitiesTable from "./SubActivitiesTable/SubActivitiesTable";
import { Outlet, Route, Routes } from "react-router-dom";
import UpdatesTable from "./UpdatesTable/UpdatesTable";
import DetailsActivity from "./DetailsActivity/DetailsActivity";

function Activity() {
  const tasks = [
    {
      key: "task-1",
      title: "Some task without data",
      children: [
        {
          key: "task-1-1",
          title: "Some non repeating task",
          data: {
            startDate: "2023-03-09T08:00:00.000Z",
            endDate: "2023-03-09T08:00:00.000Z",
          },
          children: [
            {
              key: "task-1-1-1",
              title: "Some weekly repeating task",
              data: {
                repeatType: "WEEK",
                fromTime: 28800,
                endDate: 64800,
                weekdays: [1, 3, 6],
              },
            },
          ],
        },
        {
          key: "task-1-2",
          title: "Some daily repeating task",
          data: {
            repeatType: "DAY",
            fromTime: 28800,
            endDate: 64800,
          },
        },
      ],
    },
    {
      key: "task-2",
      title: "Some monthly repeating task",
      data: {
        repeatType: "MONTH",
        fromTime: 28800,
        endDate: 64800,
        monthdays: [1, 3, 5, 9, 11, 14, 21, 31],
      },
    },
  ];
  return (
    <div className="activity-page">
      <ActivityTable />
      <Breadcrumbs />
      <Routes>
        <Route path="/sub-activities-table" element={<SubActivitiesTable />} />
        <Route path="updates-table" element={<UpdatesTable />} />
        <Route path="/details-activity" element={<DetailsActivity />} />
      </Routes>

      {/* <Outlet /> */}
      <GanttCharts />
    </div>
  );
}

export default Activity;
