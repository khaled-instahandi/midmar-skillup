import React, { useState, useMemo, useEffect } from "react";

import addIcon from "../././../../images/add-table-icon.svg";
import deleteIcon from "../././../../images/delete-table-icon.svg";
import Button from "../../../elements/Buttons/Button";
import arrowDown from "../././../../images/arrow-down-icon.svg";
import arrowUp from "../././../../images/arrow-up-icon.svg";
import arrowMiddle from "../././../../images/arrow-middle-icon.svg";
import detialeIcon from "../././../../images/detials-tavle-icon.svg";

import addTableIcon from "../././../../images/add-square.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import sortIcon from "../././../../images/sort-icon.svg";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import AddProcurementPlan from "../../ProcurementPlan/AddProcurementPlan/AddProcurementPlan";

import verify from "../../../images/verify2.svg";
import infoCircle from "../../../images/info-circle2.svg";
const sampleData = [
  {
    id: 1,
    PlannedDeliveryDate: "12/09/2023",
    ActualDeliveryDate: "12/15/2023",
    ExpectedDuration: "5 days",
    Logation: "312",
    State: "sent delivered handed",
    Notes: "nothing",
  },
  {
    id: 2,
    PlannedDeliveryDate: "12/09/2023",
    ActualDeliveryDate: "11/15/2023",
    ExpectedDuration: "4 days",
    Logation: "312",
    State: "sent delivered handed",
    Notes: "nothing",
  },
  {
    id: 3,
    PlannedDeliveryDate: "11/09/2023",
    ActualDeliveryDate: "12/15/2023",
    ExpectedDuration: "5 days",
    Logation: "312",
    State: "sent delivered handed",
    Notes: "nothing",
  },
  {
    id: 4,
    PlannedDeliveryDate: "12/09/2023",
    ActualDeliveryDate: "12/15/2023",
    ExpectedDuration: "5 days",
    Logation: "312",
    State: "sent delivered handed",
    Notes: "nothing",
  },
  {
    id: 5,
    PlannedDeliveryDate: "12/09/2023",
    ActualDeliveryDate: "12/15/2023",
    ExpectedDuration: "5 days",
    Logation: "312",
    State: "sent delivered handed",
    Notes: "nothing",
  },
  {
    id: 6,
    PlannedDeliveryDate: "12/09/2023",
    ActualDeliveryDate: "12/15/2023",
    ExpectedDuration: "5 days",
    Logation: "312",
    State: "sent delivered handed",
    Notes: "nothing",
  },
];
const defaultData = [...sampleData];

const ProcurementPlanTable = () => {
  const [activities, setActivities] = useState(sampleData);
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
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

  return (
    <div className="activity-page">
      <div className="activity-table-container">
        <h1>Procurement Plan</h1>

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
              label="Add a purchasing plan"
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
          <table className="activity-table" style={{ width: "100%" }}>
            <thead>
              <tr className="activity-table-header">
                <th onClick={() => toggleSort("PlannedDeliveryDate")}>
                  PlannedDeliveryDate{" "}
                </th>
                <th onClick={() => toggleSort("ActualDeliveryDate")}>
                  ActualDeliveryDate
                </th>
                <th onClick={() => toggleSort("ExpectedDuration")}>
                  ExpectedDuration
                </th>
                <th onClick={() => toggleSort("Logation")}>Logation</th>

                <th onClick={() => toggleSort("State")}>DState</th>
                <th onClick={() => toggleSort("Notes")}>Notes</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr className={`activity-table-row `}>
                    <td>{activity.PlannedDeliveryDate}</td>
                    <td>{activity.ActualDeliveryDate}</td>
                    <td className="activity-status">
                      {activity.ExpectedDuration}
                      {/* <span> {getIcon(activity.Evaluation)}</span> */}
                    </td>
                    <td className="activity-status">
                      {activity.Logation}
                      {/* <span> {getIcon(activity.LikelihoodOfOccurrence)}</span> */}
                    </td>
                    <td style={{ whiteSpace: "nowrap" }}>
                      {/* <CircleProgressBar value={activity.DegreeOfRisk} /> */}

                      {activity.State}
                    </td>
                    <td>{activity.Notes}</td>

                    <td className="actions-table-btn">
                      <Button
                        className={"action-table"}
                        onClick={() => setIsAddModalOpen(true)}
                        Icon={addIcon}
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

        <AddProcurementPlan
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
            logo={verify}
            buttonClassFirst={"button-delete-t"}
            buttomText={"Hey, This project has been deleted!!"}
            buttomTextMiddle={true}
            closeButton
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default ProcurementPlanTable;
