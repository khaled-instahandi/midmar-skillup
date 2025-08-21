import React, { useState, useMemo, useEffect } from "react";
import closeIcon from "../../../images/close-circle-red.svg";
import tickIcon from "../../../images/tick-circle.svg";

import cancelIcon from "src/images/close-icon-tabel.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import infoIcon from "src/images/info-close.svg";

const sampleData = [
  {
    id: 1,
    TitleVacancy: "مصمم تطبيقات ومواقع ويب",
    Date: "04/19/2024",
    State: "acceptable",
  },
  {
    id: 2,
    TitleVacancy: "مصمم تطبيقات ومواقع ويب",
    Date: "04/19/2024",
    State: "rejected",
  },
  {
    id: 3,
    TitleVacancy: "مصمم تطبيقات ومواقع ويب",
    Date: "04/19/2024",
    State: "closed",
  },
  {
    id: 4,
    TitleVacancy: "مصمم تطبيقات ومواقع ويب",
    Date: "04/19/2024",
    State: "canceled",
  },
];

const CoachRequests = () => {
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
    <div className="activity-page">
      <div className="activity-table-container">
        <h1 className="my-8">الشواغر التي تم التقديم عليها</h1>

        <div className="scrolled-table">
          <table className="activity-table" style={{ width: "100%" }}>
            <thead>
              <tr className="activity-table-header">
                <th style={{ width: "6rem" }} onClick={() => toggleSort("id")}>
                  Id
                </th>
                <th onClick={() => toggleSort("TypeOfAbsence")}>
                  عنوان الشاغر
                </th>
                <th onClick={() => toggleSort("FromDate")}>تاريخ التقديم</th>

                <th onClick={() => toggleSort("State")}>حالة الطلب</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr className={`activity-table-row `}>
                    <td>{activity.id}</td>
                    <td>{activity.TitleVacancy}</td>
                    <td>{activity.Date}</td>

                    <td className="activity-status">
                      {activity.State === "rejected" ? (
                        <>
                          <span className="no-date">
                            مرفوض
                            <img src={closeIcon} alt="" />{" "}
                          </span>
                        </>
                      ) : (
                        <>
                          {activity.State === "acceptable" ? (
                            <>
                              <span className="yes-date">
                                مقبول <img src={tickIcon} alt="" />
                              </span>
                            </>
                          ) : (
                            <>
                              {" "}
                              {activity.State === "canceled" ? (
                                <>
                                  <span className="cancel-date">
                                    تم إلغاء التدريب{" "}
                                    <img src={cancelIcon} alt="" />
                                  </span>
                                </>
                              ) : (
                                <>
                                  {activity.State === "closed" ? (
                                    <>
                                      <span className="close-date">
                                        مغلق
                                        <img src={infoIcon} alt="" />
                                      </span>
                                    </>
                                  ) : (
                                    <>{activity.State}</>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
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
      </div>
    </div>
  );
};

export default CoachRequests;
