import React, { useState, useMemo, useEffect } from "react";
import "./UpdatesTable.css";
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
import Pagination from "../../../elements/Pagination/Pagination";
import PaginationTwo from "../../../elements/Pagination/PaginationTwo";
import ChartIcon from "../../../images/chart-icon.svg";
import AddUpdatesTable from "./AddUpdatesTable";
const sampleData = [
  {
    id: 1,
    state: "Ongoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 2,
    state: "Ongoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 3,
    state: "Ongoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 4,
    state: "Ongoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 5,
    state: "Ongoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 6,
    state: "Vngoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 7,
    state: "Ongoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "nothing",
    ActualPlannedBnfs: "8500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
  {
    id: 8,
    state: "Cngoing",
    ActualStartDate: "2021-02-01",
    DelayJustification: "Aothing",
    ActualPlannedBnfs: "2500 $",
    CompletionPercentage: "80%",
    UpdateDate: "2021-02-01",
    CompletionDate: "2021-02-01",
    ActualCost: "8500 $",
    Note: "nothing",
  },
];
const defaultData = [...sampleData];

const UpdatesTable = () => {
  const [activities, setActivities] = useState(sampleData);
  const [expandedRows, setExpandedRows] = useState({});
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedActivities, setSortedActivities] = useState(sampleData);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  const handleModalClose = () => {
    setIsAddModalOpen(false);
  };
  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
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
  const handleRowClick = (id) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [id]: !prevExpandedRows[id],
    }));
  };

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
    <div className="activity-table-container">
      <h1>Updates</h1>

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
            label="Add Updates"
            className={"btn-add-table"}
            Icon={addTableIcon}
            iconPosition={"left"}
            width={"38%"}
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
              <th onClick={() => toggleSort("state")}>State</th>
              <th onClick={() => toggleSort("ActualStartDate")}>
                Actual Start Date
              </th>
              <th onClick={() => toggleSort("DelayJustification")}>
                Delay Justification
              </th>
              <th onClick={() => toggleSort("ActualPlannedBnfs")}>
                Actual Planned Bnfs
              </th>

              <th onClick={() => toggleSort("CompletionPercentage")}>
                Completion Percentage
              </th>
              <th onClick={() => toggleSort("UpdateDate")}>Update date</th>
              <th onClick={() => toggleSort("CompletionDate")}>
                Completion Date
              </th>
              <th onClick={() => toggleSort("ActualCost")}>Actual cost</th>
              <th onClick={() => toggleSort("Note")}>Note</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((activity) => (
              <React.Fragment key={activity.id}>
                <tr className={`activity-table-row `}>
                  <td>{activity.state}</td>
                  <td>{activity.ActualStartDate}</td>
                  <td>{activity.DelayJustification}</td>
                  <td>{activity.ActualPlannedBnfs}</td>
                  <td>
                    <img
                      src={ChartIcon}
                      alt="Completion Icon"
                      className="completion-icon-table"
                    />
                    {activity.CompletionPercentage}
                  </td>

                  <td>{activity.UpdateDate}</td>
                  <td>{activity.CompletionDate}</td>
                  <td>{activity.ActualCost}</td>
                  <td>{activity.Note}</td>
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
      <AddUpdatesTable
        isOpen={isAddModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveAddedProject}
      />
    </div>
  );
};

export default UpdatesTable;
