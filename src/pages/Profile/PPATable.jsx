import React, { useState, useEffect } from "react";
import Button from "../../elements/Buttons/Button";

import wordIcon from "../../images/word-icon.svg";
import "./PPATable.css";
const sampleData = [
  {
    id: 1,
    AccountingCode: "",
    Description: "A.1 RUNNING COSTS",
    Unit: "",
    UnitCost: "",
    Quantity: "",
    FrequencyDuration: "",
    Percentage: "",
    TotalCost: "",
  },
  {
    id: 2,
    AccountingCode: "A.1.1",
    Description: "A.1.1 Running Cost, Utilities for offices",
    Unit: "Office",
    UnitCost: "500 $",
    Quantity: "1",
    FrequencyDuration: "12",
    Percentage: "30%",
    TotalCost: "1800 $",
  },
  {
    id: 3,
    AccountingCode: "A.1.2",
    Description: "A.1.1 Running Cost, Utilities for offices",
    Unit: "Office",
    UnitCost: "500 $",
    Quantity: "1",
    FrequencyDuration: "12",
    Percentage: "30%",
    TotalCost: "1800 $",
  },
  {
    id: 4,
    AccountingCode: "A.1.3",
    Description: "A.1.1 Running Cost, Utilities for offices",
    Unit: "Office",
    UnitCost: "500 $",
    Quantity: "1",
    FrequencyDuration: "12",
    Percentage: "30%",
    TotalCost: "1800 $",
  },
  {
    id: 5,
    AccountingCode: "A.1.4",
    Description: "A.1.1 Running Cost, Utilities for offices",
    Unit: "Office",
    UnitCost: "500 $",
    Quantity: "1",
    FrequencyDuration: "12",
    Percentage: "30%",
    TotalCost: "1800 $",
  },
  {
    id: 6,
    AccountingCode: "",
    Description: "A.1 TOTAL BUDGET FOR RUNNING COSTS",
    Unit: "",
    UnitCost: "",
    Quantity: "",
    FrequencyDuration: "",
    Percentage: "",
    TotalCost: "5400 $",
  },
  {
    id: 7,
    AccountingCode: "",
    Description: "A.2 TOTAL BUDGET FOR SUPPORT STAFF COSTS",
    Unit: "",
    UnitCost: "",
    Quantity: "",
    FrequencyDuration: "",
    Percentage: "",
    TotalCost: "",
  },
  {
    id: 8,
    AccountingCode: "A.1.1",
    Description: "A.1.1 Running Cost, Utilities for offices",
    Unit: "Office",
    UnitCost: "500 $",
    Quantity: "1",
    FrequencyDuration: "12",
    Percentage: "30%",
    TotalCost: "1800 $",
  },
];
const defaultData = [...sampleData];

const PPATable = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

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

    setSortedActivities(updatedActivities);
  }, [searchQuery, isSorted, filterColumn]);

  const [sortedActivities, setSortedActivities] = useState(sampleData);

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
  };

  return (
    <div className="activity-page">
      <div className="activity-table-container">
        <h1>PPA</h1>

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
              label="Import Budget"
              className="button-import"
              Icon={wordIcon}
              iconPosition={"left"}
              width={"33%"}
              height={"3rem"}
              fontSize={"1.125rem"}
              //   onClick={() => setIsAddModalOpen(true)}
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
                <th onClick={() => toggleSort("DescriptionQ")}>
                  Accounting Code
                </th>
                <th
                  //   style={{ width: "32rem" }}
                  onClick={() => toggleSort("Description")}
                >
                  Description
                </th>
                <th onClick={() => toggleSort("Unit")}>Unit</th>
                <th onClick={() => toggleSort("UnitCost")}>Unit cost</th>
                <th onClick={() => toggleSort("Quantity")}>Quantity</th>

                <th onClick={() => toggleSort("FrequencyDuration")}>
                  Frequency/Duration
                </th>
                <th onClick={() => toggleSort("Percentage")}>Percentage</th>
                <th onClick={() => toggleSort("TotalCost")}>Total cost</th>
                <th style={{ display: "none" }}></th>
              </tr>
            </thead>
            <tbody>
              {defaultData.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr
                    className={`activity-table-row ${
                      activity.id === 1 || activity.id === 7
                        ? "row-header-td"
                        : activity.id === 6
                        ? "row-result-td"
                        : ""
                    }`}
                  >
                    <td>{activity.AccountingCode}</td>
                    <td
                    //   onClick={() => handleRowClick(activity.id)}
                    //   className="description-cell"
                    >
                      {activity.Description}
                    </td>
                    <td>{activity.Unit}</td>
                    <td
                    // className="activity-status"
                    >
                      {activity.UnitCost}
                    </td>
                    <td
                    // className="activity-status"
                    >
                      {activity.Quantity}
                    </td>
                    <td>{activity.FrequencyDuration}</td>
                    <td>{activity.Percentage}</td>
                    <td>{activity.TotalCost}</td>
                    <td style={{ display: "none" }}> </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PPATable;
