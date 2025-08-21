import React, { useState, useMemo, useEffect, useRef } from "react";
import "./BudgetTable.css";
import exportIcon from "../././../../images/export-table.svg";
import warningIcon from "../././../../images/warning-table.svg";
import verifyIcon from "../././../../images/verify-table.svg";
import updateIcon from "../././../../images/update-table-icon.svg";
import editIcon from "../././../../images/edit-table-icon.svg";
import addIcon from "../././../../images/add-table-icon.svg";
import addBIcon from "../././../../images/add-budget.svg";

import deleteIcon from "../././../../images/delete-table-icon.svg";
import Button from "../../../elements/Buttons/Button";
import detialeIcon from "../././../../images/detials-tavle-icon.svg";
import addTableIcon from "../././../../images/add-square.svg";
import arrowRightIcon from "../././../../images/arrow-right.svg";
import wordIcon from "../../../images/word-icon.svg";

import verify from "../../../images/verify2.svg";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import infoCircle from "../../../images/info-circle2.svg";
import Chart from "chart.js/auto";
import CircleProgressBar from "../../../components/CircleProgressBar/CircleProgressBar";
import AddItems from "../AddItems/AddItems";
import EditItems from "../EditItems/EditItems";
import ImportBudget from "../ImportBudget/ImportBudget";
import AddCategoryBudget from "../AddCategoryBudget/AddCategoryBudget";
import ImportExpenses from "../ImportExpenses/ImportExpenses";
import Pagination from "../../../elements/Pagination/Pagination";

const sampleData = [
  {
    id: 1,
    Category: "Human resources ",
    TotalAllocatedBudget: "50,000 $",
    Expenses: "10,000 $",
    ExpensesRate: "50%",
    Surplus: "41,500 $",
    children: [
      {
        id: 1,
        name: "Data Collection Team Leader",
        type: "Staff",
        Unit: "material",
        Amount: "1",
        Freq: "2",
        d: "80%",
        Cost: "3,500$",
        TotalCost: "5,600$",
        ExpRate: "80%",
      },
      {
        id: 2,
        name: "Operations Assistant",
        type: "Activity",
        Unit: "pcs",
        Amount: "1",
        Freq: "5",
        d: "100%",
        Cost: "10,000$",
        TotalCost: "50,000$",
        ExpRate: "100%",
      },
      {
        id: 3,
        name: "Operations Assistant",
        type: "Admin",
        Unit: "pcs",
        Amount: "1",
        Freq: "9",
        d: "20%",
        Cost: "350$",
        TotalCost: "630$",
        ExpRate: "20%",
      },
    ],
  },
  {
    id: 2,
    Category: "Core activities",
    TotalAllocatedBudget: "50,000 $",
    Expenses: "10,000 $",
    ExpensesRate: "20%",
    Surplus: "41,500 $",
    children: [
      {
        id: 1,
        name: "Data Collection Team Leader",
        type: "Staff",
        Unit: "material",
        Amount: "1",
        Freq: "2",
        d: "80%",
        Cost: "3,500$",
        TotalCost: "5,600$",
        ExpRate: "80%",
      },
      {
        id: 2,
        name: "Operations Assistant",
        type: "Activity",
        Unit: "pcs",
        Amount: "1",
        Freq: "5",
        d: "100%",
        Cost: "10,000$",
        TotalCost: "50,000$",
        ExpRate: "100%",
      },
      {
        id: 3,
        name: "Operations Assistant",
        type: "Admin",
        Unit: "pcs",
        Amount: "1",
        Freq: "9",
        d: "20%",
        Cost: "350$",
        TotalCost: "630$",
        ExpRate: "20%",
      },
    ],
  },
  {
    id: 3,
    Category: "Core activities",
    TotalAllocatedBudget: "50,000 $",
    Expenses: "10,000 $",
    ExpensesRate: "20%",
    Surplus: "41,500 $",
    children: [
      {
        id: 1,
        name: "Data Collection Team Leader",
        type: "Staff",
        Unit: "material",
        Amount: "1",
        Freq: "2",
        d: "80%",
        Cost: "3,500$",
        TotalCost: "5,600$",
        ExpRate: "80%",
      },
      {
        id: 2,
        name: "Operations Assistant",
        type: "Activity",
        Unit: "pcs",
        Amount: "1",
        Freq: "5",
        d: "100%",
        Cost: "10,000$",
        TotalCost: "50,000$",
        ExpRate: "100%",
      },
      {
        id: 3,
        name: "Operations Assistant",
        type: "Admin",
        Unit: "pcs",
        Amount: "1",
        Freq: "9",
        d: "20%",
        Cost: "350$",
        TotalCost: "630$",
        ExpRate: "20%",
      },
    ],
  },
  {
    id: 4,
    Category: "Core activities",
    TotalAllocatedBudget: "50,000 $",
    Expenses: "10,000 $",
    ExpensesRate: "20%",
    Surplus: "41,500 $",
    children: [
      {
        id: 1,
        name: "Data Collection Team Leader",
        type: "Staff",
        Unit: "material",
        Amount: "1",
        Freq: "2",
        d: "80%",
        Cost: "3,500$",
        TotalCost: "5,600$",
        ExpRate: "80%",
      },
      {
        id: 2,
        name: "Operations Assistant",
        type: "Activity",
        Unit: "pcs",
        Amount: "1",
        Freq: "5",
        d: "100%",
        Cost: "10,000$",
        TotalCost: "50,000$",
        ExpRate: "100%",
      },
      {
        id: 3,
        name: "Operations Assistant",
        type: "Admin",
        Unit: "pcs",
        Amount: "1",
        Freq: "9",
        d: "20%",
        Cost: "350$",
        TotalCost: "630$",
        ExpRate: "20%",
      },
    ],
  },
];
const defaultData = [...sampleData];

const BudgetTable = () => {
  const [activities, setActivities] = useState(sampleData);
  const [expandedRows, setExpandedRows] = useState({});
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditItemModalOpen, setEditItemModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [isImportModalOpen, setImportModalOpen] = useState(false);
  const [isImportEModalOpen, setImportEModalOpen] = useState(false);

  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [sortedActivities, setSortedActivities] = useState(sampleData);
  const itemsPerPage = searchQuery ? sortedActivities.length : 4;
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(
    defaultData.slice(0, itemsPerPage)
  );
  const fetchDataForNewPage = (page) => {
    setCurrentPage(page);
  };
  // Update to handle input change for search
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
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

    setActivities(updatedActivities);
  }, [searchQuery, isSorted, filterColumn]);

  const handleModalCloseAndOpenDelete = () => {
    setShowAlertConfirm(false);
    setShowAlertDelete(true);
  };
  const handleModalClose = () => {
    setEditItemModalOpen(false);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setImportModalOpen(false);
    setShowAlertDelete(false);
    setShowAlertConfirm(false);
    setImportEModalOpen(false);
  };
  const handleSaveImportedEProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveImportedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveEditedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveAddedItemProject = (editedData) => {
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

  const renderRowDetails = (children) => {
    return children.map((child) => (
      <tr key={child.id} className="activity-table-child-row">
        <td className="name-activity-table">{child.name}</td>
        <td>{child.type}</td>
        <td>{child.Unit}</td>
        <td>{child.Amount}</td>
        <td>{child.Freq}</td>
        <td>{child.d}</td>
        <td>{child.Cost}</td>
        <td>{child.TotalCost}</td>
        <td>
          <CircleProgressBar value={child.ExpRate} />

          {child.ExpRate}
        </td>
        <td className="actions-table-btn">
          <Button
            className={"action-table"}
            onClick={() => setIsAddModalOpen(true)}
            Icon={addBIcon}
            iconPosition={"left"}
          />
          <Button
            className={"action-table"}
            onClick={() => setEditItemModalOpen(true)}
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
    <div className="activity-page">
      <div className="activity-table-container">
        <h1>Budget</h1>

        <div className="header-activity-table">
          <div className="export-buttons">
            <span>Data Export</span>
            <button
              className="export-button"
              onClick={() => console.log("CSV")}
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
            <div className="header-btn-budget">
              <Button
                label="Import Expenses"
                onClick={() => setImportEModalOpen(true)}
                className="button-import"
                Icon={wordIcon}
                iconPosition={"left"}
                width={"33%"}
                height={"3rem"}
                fontSize={"1rem"}
              />
              <Button
                label="Import Budget"
                onClick={() => setImportModalOpen(true)}
                className="button-import"
                Icon={wordIcon}
                iconPosition={"left"}
                width={"33%"}
                height={"3rem"}
                fontSize={"1rem"}
              />

              <Button
                label="Add Category"
                className={"btn-add-table"}
                Icon={addTableIcon}
                iconPosition={"left"}
                width={"30%"}
                height={"3rem"}
                fontSize={"1rem"}
                onClick={() => setIsEditModalOpen(true)}
              />
            </div>

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
                <th onClick={() => toggleSort("Category")}>Category</th>
                <th onClick={() => toggleSort("TotalAllocatedBudget")}>
                  TotalAllocatedBudget
                </th>
                <th onClick={() => toggleSort("Expenses")}>Expenses</th>
                <th onClick={() => toggleSort("ExpensesRate")}>ExpensesRate</th>
                <th onClick={() => toggleSort("Surplus")}>Surplus</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((activity) => (
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

                      {activity.Category}
                    </td>
                    <td>{activity.TotalAllocatedBudget}</td>
                    <td>{activity.Expenses}</td>
                    <td>
                      <CircleProgressBar
                        value={activity.ExpensesRate}
                        backgroundColor={`${
                          expandedRows[activity.id] ? "#D0E8E5" : ""
                        }`}
                      />
                      {activity.ExpensesRate}
                    </td>

                    <td>{activity.Surplus}</td>

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
                  {expandedRows[activity.id] && activity.children && (
                    <tr key={`child-row-${activity.id}`}>
                      <td colSpan={6} style={{ padding: 0 }}>
                        <table className="child-table">
                          <thead>
                            <tr className="row-sub-activity">
                              <th>Name</th>
                              <th>Type</th>
                              <th>Unit</th>
                              <th>Amount</th>
                              <th>Freq</th>
                              <th>%</th>
                              <th>Cost</th>
                              <th>TotalCost</th>
                              <th>ExpRate</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>{renderRowDetails(activity.children)}</tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          <AddCategoryBudget
            isOpen={isEditModalOpen}
            onClose={handleModalClose}
            projectData={selectedProjectData}
            onSave={handleSaveEditedProject}
          />
          <ImportBudget
            height={`auto`}
            
            isOpen={isImportModalOpen}
            onClose={handleModalClose}
            projectData={selectedProjectData}
            onSave={handleSaveImportedProject}
          />
          <ImportExpenses
            height={`auto`}
            isOpen={isImportEModalOpen}
            onClose={handleModalClose}
            projectData={selectedProjectData}
            onSave={handleSaveImportedEProject}
          />

          <AddItems
            isOpen={isAddModalOpen}
            onClose={handleModalClose}
            projectData={selectedProjectData}
            onSave={handleSaveAddedProject}
          />
          <EditItems
            isOpen={isEditItemModalOpen}
            onClose={handleModalClose}
            projectData={selectedProjectData}
            onSave={handleSaveAddedItemProject}
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
              closeButton
              buttonClassFirst={"button-delete-t"}
              buttomText={"Hey, This project has been deleted!!"}
              buttomTextMiddle={true}
              onClose={handleModalClose}
            />
          )}
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
      </div>
    </div>
  );
};

export default BudgetTable;
