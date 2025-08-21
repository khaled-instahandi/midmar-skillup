import React, { useState, useMemo, useEffect } from "react";
import closeIcon from "../../../images/close-circle-red.svg";
import tickIcon from "../../../images/tick-circle.svg";

import Button from "../../../elements/Buttons/Button";

import addTableIcon from "../././../../images/add-square.svg";
import Pagination from "../../../elements/Pagination/Pagination";

const sampleData = [
  {
    id: 1,
    TrainerName: "محمد نور بدوي",
    TrainingName: "تصميم وبرمجة المواقع الإلكترونية",
    Date: "04/19/2024",
    TimeSession: "ساعتين",
    State: "acceptable",
  },
  {
    id: 2,
    TrainerName: "محمد نور بدوي",
    TrainingName: "تصميم وبرمجة المواقع الإلكترونية",
    Date: "04/19/2024",
    TimeSession: "ساعتين",
    State: "acceptable",
  },
  {
    id: 3,
    TrainerName: "محمد نور بدوي",
    TrainingName: "تصميم وبرمجة المواقع الإلكترونية",
    Date: "04/19/2024",
    TimeSession: "ساعتين",
    State: "rejected",
  },
];

const CoachTable = () => {
  const [sortedActivities, setSortedActivities] = useState(sampleData);
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
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
  const itemsPerPage = searchQuery ? sortedActivities.length : 4;
  const totalPages = Math.ceil(sortedActivities.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(
    sortedActivities.slice(0, itemsPerPage)
  );

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
    <div className="activity-page" style={{ marginTop: "-2rem" }}>
      <div className="activity-table-container">
        <h1 style={{ display: "flex", justifyContent: "space-between" }}>
          جدول حضوري
          <div
            className="manager-name"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#FDFDFD",
              borderRadius: "0.25rem",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              padding: "1rem",
            }}
          >
            <p className="text-coach-table">التوقيع على جدول الحضور:</p>
            <div className="btn-signatures">
              <Button
                width={"40%"}
                label="توقيع"
                className="sign-button"
                height={"2.5REM"}
                //   onClick={() => setShowAlertDelete(true)}
              />
              <Button
                width={"40%"}
                label="رفض"
                className="reject-button"
                height={"2.5REM"}
                //   onClick={() => setIsAddModalOpen(true)}
              />
            </div>
          </div>
        </h1>

        <div className="header-activity-table" dir="ltr">
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
            <div class="search-container" dir="rtl">
              <label for="search-input">البحث:</label>
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
                <th style={{ width: "6rem" }} onClick={() => toggleSort("id")}>
                  رقم الجلسة
                </th>
                <th onClick={() => toggleSort("TypeOfAbsence")}>اسم المدرب</th>
                <th onClick={() => toggleSort("FromDate")}>اسم التدريب</th>
                <th onClick={() => toggleSort("ToDate")}>التاريخ</th>

                <th onClick={() => toggleSort("AuthorizedPerson")}>
                  مدة الجلسة
                </th>
                <th onClick={() => toggleSort("State")}>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr className={`activity-table-row `}>
                    <td>{activity.id}</td>
                    <td>{activity.TrainerName}</td>
                    <td>{activity.TrainingName}</td>
                    <td className="activity-status">{activity.Date}</td>
                    <td>{activity.TimeSession}</td>
                    <td className="activity-status">
                      {activity.State === "rejected" ? (
                        <>
                          <span className="no-date">
                            غياب
                            <img src={closeIcon} alt="" />{" "}
                          </span>
                        </>
                      ) : (
                        <>
                          {activity.State === "acceptable" ? (
                            <>
                              <span className="yes-date">
                                حضور <img src={tickIcon} alt="" />
                              </span>
                            </>
                          ) : (
                            <>{activity.State}</>
                          )}
                        </>
                      )}
                    </td>
                    {/* <td >
                                            {activity.Signatures === 'Rejected' ? <>
                                                <span className="rejected">{activity.Signatures}<img src={closeIcon} alt="" /> </span>
                                            </> : <>
                                                {activity.Signatures === '5/5' ? <>
                                                    <span className="complite-p">{activity.Signatures} <img src={tickIcon} alt="" /></span>
                                                </> : <>
                                                    {activity.Signatures}

                                                </>}

                                            </>}
                                        </td> */}
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
      </div>
    </div>
  );
};

export default CoachTable;
