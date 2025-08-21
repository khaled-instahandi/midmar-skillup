import React, { useEffect, useRef } from "react";
import "./GanttCharts.css";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";

function GanttCharts() {
  const ganttContainer = useRef(null);

  // Function to handle zoom in
  const handleZoomIn = () => {
    let level = gantt.ext.zoom.getCurrentLevel();
    if (level < 4) {
      // Prevent excessive zoom
      gantt.ext.zoom.setLevel(level + 1);
    }
  };

  // Function to handle zoom out
  const handleZoomOut = () => {
    let level = gantt.ext.zoom.getCurrentLevel();
    if (level > 0) {
      // Prevent excessive zoom out
      gantt.ext.zoom.setLevel(level - 1);
    }
  };

  useEffect(() => {
    // Configure Gantt chart
    gantt.config.date_format = "%Y-%m-%d";

    // Set work time and styling
    gantt.config.work_time = true;
    gantt.config.correct_work_time = true;
    gantt.config.min_column_width = 40;
    gantt.config.scale_height = 60;
    gantt.config.row_height = 40;

    // Configure columns exactly like the image
    gantt.config.columns = [
      {
        name: "text",
        label: "Tasks",
        tree: true,
        width: 250,
        resize: true,
      },
      {
        name: "progress",
        label: "Progress",
        width: 80,
        align: "center",
        template: function (task) {
          return Math.round(task.progress * 100) + "%";
        },
      },
      {
        name: "duration",
        label: "Duration",
        width: 80,
        align: "center",
        template: function (task) {
          return task.duration + " Days";
        },
      },
    ];

    // Custom markers template
    gantt.templates.grid_row_class = function (start, end, task) {
      if (task.type === "milestone") return "milestone-row";
      return "";
    };

    // Custom task template
    gantt.templates.task_class = function (start, end, task) {
      if (task.type === "milestone") return "milestone-task";
      if (task.progress >= 1) return "task-complete";
      if (task.progress >= 0.5) return "task-half";
      return "task-pending";
    };

    // Resource and process icons template
    gantt.templates.task_text = function (start, end, task) {
      let text = task.text;
      if (task.resource) {
        text += ' <span class="resource-icon"></span>';
      }
      if (task.buyingProcess) {
        text += ' <span class="process-icon"></span>';
      }
      return text;
    };

    // Enable progress and duration display on task bars
    gantt.templates.task_text = function (start, end, task) {
      return `${Math.round(task.progress * 100)}% • ${task.duration} days`;
    };

    // Configure zoom levels
    gantt.ext.zoom.init({
      levels: [
        {
          name: "day",
          scale_height: 60,
          min_column_width: 40,
          scales: [
            { unit: "day", step: 1, format: "%D" },
            { unit: "day", step: 1, format: "%d" },
          ],
        },
        {
          name: "week",
          scale_height: 60,
          min_column_width: 50,
          scales: [
            { unit: "week", step: 1, format: "Week #%W" },
            { unit: "day", step: 1, format: "%d %M" },
          ],
        },
        {
          name: "month",
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "month", format: "%F" },
            { unit: "week", format: "Week #%W" },
          ],
        },
        {
          name: "quarter",
          scale_height: 60,
          min_column_width: 90,
          scales: [
            { unit: "month", step: 1, format: "%M" },
            { unit: "quarter", step: 1, format: "Q%q" },
          ],
        },
        {
          name: "year",
          scale_height: 60,
          min_column_width: 120,
          scales: [
            { unit: "year", step: 1, format: "%Y" },
            { unit: "month", step: 1, format: "%M" },
          ],
        },
      ],
    });

    // Configure columns
    gantt.config.columns = [
      {
        name: "text",
        label: "Tasks",
        width: 250,
        tree: true,
        resize: true,
      },
      {
        name: "progress",
        label: "Progress",
        width: 80,
        align: "center",
        template: (task) => {
          return Math.round(task.progress * 100) + "%";
        },
      },
      {
        name: "duration",
        label: "Duration",
        width: 80,
        align: "center",
        template: (task) => {
          return task.duration + " Days";
        },
      },
    ];

    // Custom task styling
    gantt.templates.task_class = (start, end, task) => {
      if (task.progress >= 1) return "task-complete";
      if (task.progress >= 0.5) return "task-half";
      return "task-pending";
    };

    // Initialize gantt
    gantt.init(ganttContainer.current);

    // Set the date range to match the image
    gantt.config.start_date = new Date(2023, 11, 31); // Dec 31, 2023
    gantt.config.end_date = new Date(2024, 0, 14); // Jan 14, 2024

    // Sample data matching the image exactly
    const data = {
      data: [
        {
          id: 1,
          text: "Project Design",
          progress: 0.8,
          duration: 9,
          open: true,
        },
        {
          id: 2,
          text: "Project Design & Preparation",
          progress: 1.0,
          duration: 5,
          parent: 1,
          start_date: "2023-12-31",
        },
        {
          id: 3,
          text: "Project Design & Preparation",
          progress: 0.5,
          duration: 1,
          parent: 1,
          start_date: "2024-01-05",
        },
        {
          id: 4,
          text: "Partners selection and...",
          progress: 0.8,
          duration: 10,
          start_date: "2024-01-06",
        },
        {
          id: 5,
          text: "Learning journey",
          progress: 0.8,
          duration: 10,
          start_date: "2024-01-06",
        },
        {
          id: 6,
          text: "Project Design",
          progress: 0.8,
          duration: 9,
          open: true,
          start_date: "2024-01-06",
        },
        // Add the rest of the tasks following the same pattern
      ],
      links: [
        { id: 1, source: 2, target: 3, type: "0" },
        { id: 2, source: 3, target: 4, type: "0" },
      ],
    };

    // Load the data
    gantt.parse(data);

    return () => {
      gantt.clearAll();
    };
  }, []);

  return (
    <div className="gantt-container">
      <div className="gantt-header">
        <h1>Gantt chart</h1>
        <div className="gantt-icons">
          <button className="zoom-out" onClick={handleZoomOut} title="Zoom Out">
            −
          </button>
          <button className="zoom-in" onClick={handleZoomIn} title="Zoom In">
            +
          </button>
        </div>
      </div>
      <div
        ref={ganttContainer}
        className="gantt-chart"
        style={{ width: "100%", height: "calc(100vh - 120px)" }}
      />
    </div>
  );
}

export default GanttCharts;
