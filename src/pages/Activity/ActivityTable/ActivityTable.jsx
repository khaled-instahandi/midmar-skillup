import React, { useState, useMemo, useEffect } from "react";
import "./ActivityTable.css";
import exportIcon from "../././../../images/export-table.svg";
import warningIcon from "../././../../images/warning-table.svg";
import verifyIcon from "../././../../images/verify-table.svg";
import updateIcon from "../././../../images/update-table-icon.svg";
import editIcon from "../././../../images/edit-table-icon.svg";
import addIcon from "../././../../images/add-table-icon.svg";
import deleteIcon from "../././../../images/delete-table-icon.svg";
import Button from "../../../elements/Buttons/Button";
import detialeIcon from "../././../../images/detials-tavle-icon.svg";
import addTableIcon from "../././../../images/add-square.svg";
import arrowRightIcon from "../././../../images/arrow-right.svg";
import UpdateActivity from "./UpdateActivity/UpdateActivity";
import AddActivity from "./AddActivity/AddActivity";
import EditActivity from "./EditActivity/EditActivity";
import verify from "../../../images/verify2.svg";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import infoCircle from "../../../images/info-circle2.svg";

const sampleData = [
  {
    id: 1,
    name: "project Design & Preparation",
    state: "Completed",
    plannedValue: "41500 $",
    startDate: "2021-02-01",
    endDate: "2023-04-01",
    activityStatus: "On schedule",
    children: [
      {
        id: 1,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
      {
        id: 2,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
      {
        id: 3,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
    ],
  },
  {
    id: 2,
    name: "aroject Design & Preparation",
    state: "Not Started",
    plannedValue: "41500 $",
    startDate: "2021-02-12",
    endDate: "2023-04-01",
    activityStatus: "Behind schedule",
    children: [
      {
        id: 1,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
      {
        id: 2,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
      {
        id: 3,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
    ],
  },
  {
    id: 3,
    name: "aroject Design & Preparation",
    state: "Ongoing",
    plannedValue: "11500 $",
    startDate: "2021-02-02",
    endDate: "2023-04-01",
    activityStatus: "Above schedule",
    children: [
      {
        id: 1,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
      {
        id: 2,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
      {
        id: 3,
        name: "Study of building resistant to seismic forces according",
        type: "training",
        description: "Building Technical capacities",
        Attendance: "online",
        startDate: "2021-02-01",
        endDate: "2023-04-01",
      },
    ],
  },
];
const defaultData = [...sampleData];

const ActivityTable = () => {
  const [activities, setActivities] = useState(sampleData);
  const [expandedRows, setExpandedRows] = useState({});
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);

  const [selectedProjectData, setSelectedProjectData] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const doesActivityMatchSearchTerm = (activity) => {
    return Object.values(activity).some((value) =>
      value.toString().toLowerCase().includes(searchQuery)
    );
  };

  useEffect(() => {
    let updatedActivities = [...sampleData];

    if (searchQuery) {
      updatedActivities = updatedActivities.filter(doesActivityMatchSearchTerm);
    }

    if (isSorted && filterColumn) {
      updatedActivities.sort((a, b) => {
        const valueA = a[filterColumn];
        const valueB = b[filterColumn];
        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB);
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return valueA - valueB;
        }
        return 0;
      });
    }

    setActivities(updatedActivities);
  }, [searchQuery, isSorted, filterColumn]);
  const handleModalClose = () => {
    setIsUpdateModalOpen(false);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setShowAlertDelete(false);
    setShowAlertConfirm(false);
  };
  const handleModalCloseAndOpenDelete = () => {
    setShowAlertConfirm(false);
    setShowAlertDelete(true);
  };
  const handleSaveUpdatedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveEditedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleRowClick = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };

  const getStatusColor = (status) => {
    // eslint-disable-next-line default-case
    switch (status) {
      case "Completed":
        return "rgba(21, 139, 127, 1)";
      case "Not Started":
        return "rgba(234, 81, 72, 1)";
      case "Ongoing":
        return "rgba(0, 122, 255, 1)";
      case "Holding":
        return "rgba(255, 200, 0, 1)";
    }
  };
  const getactivityStatusIcon = (status) => {
    // eslint-disable-next-line default-case
    switch (status) {
      case "On schedule":
        return <img src={verifyIcon} alt="" />;
      case "Behind schedule":
        return <img src={warningIcon} alt="" />;
      case "Above schedule":
        return <img src={exportIcon} alt="" />;
    }
  };

  const renderRowDetails = (children) => {
    return children.map((child) => (
      <>
        <tr key={child.id} className="activity-table-child-row">
          <td className="name-activity-table">{child.name}</td>
          <td>{child.type}</td>
          <td>{child.description}</td>
          <td>{child.Attendance}</td>
          <td>{child.startDate}</td>
          <td>{child.endDate}</td>
          <td className="actions-table">
            <Button
              className={"action-table"}
              onClick={() => console.log("detils sup activity :", child.id)}
              Icon={detialeIcon}
              iconPosition={"left"}
            />
            <Button
              className={"action-table"}
              onClick={() => console.log("Clicked button")}
              Icon={editIcon}
              iconPosition={"left"}
            />
            <Button
              className={"action-table"}
              onClick={() => console.log("Clicked button")}
              Icon={deleteIcon}
              iconPosition={"left"}
            />
          </td>
        </tr>
      </>
    ));
  };
  const toggleSort = (columnName) => {
    if (filterColumn === columnName) {
      setFilterColumn(null);
      setActivities(defaultData);
    } else {
      const sortedActivities = [...activities].sort((a, b) =>
        a[columnName].localeCompare(b[columnName])
      );
      setActivities(sortedActivities);
      setIsSorted(true);
      setFilterColumn(columnName);
    }
  };

  return (
    <div className="activity-table-container">
      <h1>All Activities</h1>

      <div className="header-activity-table">
        <div className="export-buttons">
          <span>Data Export</span>
          <button className="export-button" onClick={() => console.log("csv")}>
            CSV
          </button>
          <button
            className="export-button"
            onClick={() => console.log("excel")}
          >
            Excel
          </button>
          <button className="export-button" onClick={() => console.log("pdf")}>
            Pdf
          </button>
        </div>
        <div className="opration-buttons-activity-table">
          <Button
            label="Add Activity"
            className={"btn-add-table"}
            Icon={addTableIcon}
            iconPosition={"left"}
            width={"30%"}
            height={"3rem"}
            fontSize={"1.125rem"}
            onClick={() => setIsAddModalOpen(true)}
          />
          <div class="search-container">
            <label for="search-input">Search:</label>
            <input
              type="text"
              id="search-input"
              placeholder="______________________"
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
      <div className="scrolled-table">
        <table className="activity-table" style={{ width: "100%" }}>
          <thead>
            <tr className="activity-table-header">
              <th onClick={() => toggleSort("name")}>Name</th>
              <th onClick={() => toggleSort("state")}>State</th>
              <th onClick={() => toggleSort("plannedValue")}>Planned Value</th>
              <th onClick={() => toggleSort("startDate")}>Start Date</th>
              <th onClick={() => toggleSort("endDate")}>End Date</th>
              <th onClick={() => toggleSort("activityStatus")}>
                Activity Status
              </th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <React.Fragment key={activity.id}>
                <tr
                  className={`activity-table-row ${
                    expandedRows[activity.id]
                      ? "activity-table-parent-row-expanded"
                      : ""
                  }`}
                >
                  <td
                    className="name-activity-table"
                    onClick={() => handleRowClick(activity.id)}
                  >
                    <div
                      className={`arrow-name-table ${
                        expandedRows[activity.id] ? "down" : ""
                      }`}
                    >
                      <img src={arrowRightIcon} alt="" />
                    </div>

                    {activity.name}
                  </td>
                  <td
                    style={{
                      color: getStatusColor(activity.state),
                      whiteSpace: "nowrap",
                    }}
                  >
                    {activity.state}
                    <span
                      className="status-dot"
                      style={{
                        backgroundColor: getStatusColor(activity.state),
                      }}
                    ></span>
                  </td>
                  <td>{activity.plannedValue}</td>
                  <td>{activity.startDate}</td>
                  <td>{activity.endDate}</td>
                  <td className="activity-status">
                    {activity.activityStatus}
                    <span>
                      {" "}
                      {getactivityStatusIcon(activity.activityStatus)}
                    </span>
                  </td>
                  <td className="actions-table-btn">
                    <Button
                      className={"action-table"}
                      onClick={() => setIsUpdateModalOpen(true)}
                      Icon={updateIcon}
                      iconPosition={"left"}
                    />
                    <Button
                      className={"action-table"}
                      onClick={() => setIsAddModalOpen(true)}
                      Icon={addIcon}
                      iconPosition={"left"}
                    />
                    <Button
                      className={"action-table"}
                      onClick={() => setIsEditModalOpen(true)}
                      Icon={editIcon}
                      iconPosition={"left"}
                    />
                    <Button
                      className={"action-table"}
                      onClick={() => setShowAlertConfirm(true)}
                      Icon={deleteIcon}
                      iconPosition={"left"}
                    />
                  </td>
                </tr>
                {expandedRows[activity.id] && activity.children && (
                  <>
                    <tr className="row-sub-activity">
                      <th>Name</th>
                      <th>type</th>
                      <th>description</th>
                      <th>Attendance</th>
                      <th>star tDate</th>
                      <th>end Date</th>

                      <th>Actions</th>
                    </tr>
                    {renderRowDetails(activity.children)}
                  </>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <UpdateActivity
          isOpen={isUpdateModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveUpdatedProject}
        />
        <AddActivity
          isOpen={isAddModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveAddedProject}
        />
        <EditActivity
          isOpen={isEditModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveEditedProject}
        />
        {showAlertConfirm && (
          <AlertMessage
            OnClickBtnTow={() => {
              setShowAlertConfirm(false);
              setShowAlertDelete(true);
            }}
            closeButton={true}
            lableButtonOne={"Cancel"}
            lableButtonTow={"Yes, delete it !!"}
            buttomTowActive={true}
            headerText={"Are you sure to delete?"}
            logo={infoCircle}
            ButtonClassTow={"button-confirm-delete"}
            buttonClassFirst={"button-cancel"}
            buttomText={"You will not be able to recover this project !!"}
            buttomTextMiddle={true}
            onClose={handleModalClose}
          />
        )}
        {showAlertDelete && (
          <AlertMessage
            closeButton
            lableButtonOne={"Ok"}
            buttomTowActive={false}
            headerText={"Deleted !!"}
            logo={verify}
            buttonClassFirst={"button-delete-t"}
            buttomText={"Hey, This project has been deleted!!"}
            buttomTextMiddle={true}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default ActivityTable;
