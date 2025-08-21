import React, { useState, useMemo, useEffect } from "react";

import editIcon from "../././../images/edit-table-icon.svg";
import deleteIcon from "../././../images/delete-table-icon.svg";
import Button from "../../elements/Buttons/Button";
import arrowDown from "../././../images/arrow-down-icon.svg";
import arrowUp from "../././../images/arrow-up-icon.svg";
import arrowMiddle from "../././../images/arrow-middle-icon.svg";
import detialeIcon from "../././../images/detials-tavle-icon.svg";

import addTableIcon from "../././../images/add-square.svg";
import Pagination from "../../elements/Pagination/Pagination";
import AddRiskRegister from "./AddRiskRegister/AddRiskRegister";
import sortIcon from "../././../images/sort-icon.svg";
import UpdateRiskRegister from "./UpdateRiskRegister/UpdateRiskRegister";
import AlertMessage from "../../elements/AlertMessage/AlertMessage";
import verify from "../../images/verify2.svg";
import infoCircle from "../../images/info-circle2.svg";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";
const sampleData = [
  {
    id: 1,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 2,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 3,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 4,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 5,
    Description:
      "b software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 6,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 7,
    Description:
      "c software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 8,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 9,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 10,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 11,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "low",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
  {
    id: 12,
    Description:
      "A software development project may face technical risks such as bugs, compatibility issues, or security vulnerabilities",
    Category: "Financial",
    Evaluation: "middle",
    LikelihoodOfOccurrence: "high",
    DegreeOfRisk: "75%",
    ResponseStrategy: "Transfer",
    FrequencyTracking: "1",
    FollowUp: "as",
    StrategyDesc: "fefef",
  },
];
const defaultData = [...sampleData];

const RiskRegisterTable = () => {
  const [activities, setActivities] = useState(sampleData);
  const [expandedRows, setExpandedRows] = useState({});
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdatedModalOpen] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Update to handle input change for search
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on search
  };

  // Function to determine if an activity matches the search query
  const doesActivityMatchSearchTerm = (activity) => {
    return Object.values(activity).some((value) =>
      value.toString().toLowerCase().includes(searchQuery)
    );
  };

  // Integrated sorting and filtering
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

    setSortedActivities(updatedActivities);
  }, [searchQuery, isSorted, filterColumn]);
  const handleModalClose = () => {
    setIsAddModalOpen(false);
    setIsUpdatedModalOpen(false);
    setShowAlertDelete(false);
    setShowAlertConfirm(false);
  };
  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveUpdatedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleRowClick = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };
  const [sortedActivities, setSortedActivities] = useState(sampleData);

  const itemsPerPage = searchQuery ? sortedActivities.length : 4;
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(
    defaultData.slice(0, itemsPerPage)
  );
  console.log(currentItems);

  useEffect(() => {
    setCurrentItems(
      sortedActivities.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  }, [sortedActivities, currentPage, itemsPerPage]);

  const toggleSort = (columnName) => {
    let sortedData = [];
    if (filterColumn === columnName) {
      // Toggle between ascending and descending order
      sortedData = sortedActivities.slice().reverse();
    } else {
      sortedData = sampleData.slice().sort((a, b) => {
        const valueA = a[columnName];
        const valueB = b[columnName];

        // Handle different data types
        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB);
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return valueA - valueB;
        } else {
          return 0; // No sorting for unsupported types
        }
      });
    }

    setFilterColumn(columnName);
    setSortedActivities(sortedData);
    setIsSorted(true);
    setCurrentPage(1); // Reset to the first page after sorting
  };

  const fetchDataForNewPage = (page) => {
    setCurrentPage(page);
  };
  const getIcon = (status) => {
    switch (status) {
      case "middle":
        return <img src={arrowMiddle} alt="" />;
      case "low":
        return <img src={arrowDown} alt="" />;
      case "high":
        return <img src={arrowUp} alt="" />;
    }
  };

  return (
    <div className="activity-page">
      <div className="activity-table-container">
        <h1>Risk Register</h1>

        <div className="header-activity-table">
          <div className="export-buttons">
            <span>Data Export</span>
            <button
              className="export-button"
              onClick={() => console.log("csv")}
            >
              CSV
            </button>
            <button
              className="export-button"
              onClick={() => console.log("excel")}
            >
              Excel
            </button>
            <button
              className="export-button"
              onClick={() => console.log("pdf")}
            >
              Pdf
            </button>
          </div>
          <div className="opration-buttons-activity-table">
            <Button
              label="Add Risk"
              className={"btn-add-table"}
              Icon={addTableIcon}
              iconPosition={"left"}
              width={"33%"}
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
          <table className="activity-table">
            <thead>
              <tr className="activity-table-header">
                <th
                  style={{ width: "32rem" }}
                  onClick={() => toggleSort("Description")}
                >
                  Description{" "}
                </th>
                <th onClick={() => toggleSort("Category")}>Category</th>
                <th onClick={() => toggleSort("Evaluation")}>Evaluation</th>
                <th onClick={() => toggleSort("LikelihoodOfOccurrence")}>
                  Likelihood Of Occurrence
                </th>

                <th onClick={() => toggleSort("DegreeOfRisk")}>
                  Degree Of Risk
                </th>
                <th onClick={() => toggleSort("ResponseStrategy")}>
                  Response Strategy
                </th>
                <th onClick={() => toggleSort("FollFrequencyTrackingowUp")}>
                  Frequency Tracking
                </th>
                <th onClick={() => toggleSort("FollowUp")}>Follow Up</th>
                <th onClick={() => toggleSort("StrategyDesc")}>
                  Strategy Desc
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr className={`activity-table-row `}>
                    <td
                      onClick={() => handleRowClick(activity.id)}
                      className="description-cell"
                    >
                      {activity.Description}
                    </td>
                    <td>{activity.Category}</td>
                    <td className="activity-status">
                      {activity.Evaluation}
                      <span> {getIcon(activity.Evaluation)}</span>
                    </td>
                    <td className="activity-status">
                      {activity.LikelihoodOfOccurrence}
                      <span> {getIcon(activity.LikelihoodOfOccurrence)}</span>
                    </td>
                    <td>
                      <CircleProgressBar value={activity.DegreeOfRisk} />

                      {activity.DegreeOfRisk}
                    </td>
                    <td>{activity.ResponseStrategy}</td>
                    <td>{activity.FrequencyTracking}</td>
                    <td>{activity.FollowUp}</td>
                    <td>{activity.StrategyDesc}</td>
                    <td className="actions-table-btn">
                      <Button
                        className={"action-table"}
                        onClick={() => setIsUpdatedModalOpen(true)}
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
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-table">
          {searchQuery ? (
            ""
          ) : (
            <>
              <Pagination
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={fetchDataForNewPage}
                totalItems={sampleData.length}
              />
            </>
          )}
        </div>
        <UpdateRiskRegister
          isOpen={isUpdateModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveUpdatedProject}
        />
        <AddRiskRegister
          isOpen={isAddModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveAddedProject}
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
            lableButtonOne={"Ok"}
            buttomTowActive={false}
            headerText={"Deleted !!"}
            closeButton
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

export default RiskRegisterTable;
