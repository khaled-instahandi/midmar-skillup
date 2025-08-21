import React, { useState, useMemo, useEffect } from "react";

import askIcon from "../././../../images/ask-icon.svg";
import Button from "../../../elements/Buttons/Button";

import addTableIcon from ".././../../images/add-square.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import infoIcon from "../../../images/info-circle-icon.svg";
import tickIcon from "../../../images/tick-circle.svg";
import verify from "../../../images/verify2.svg";
import ComplaintContent from "./ComplaintContent/ComplaintContent";
import FillComplaint from "./FillComplaint/FillComplaint";
const sampleData = [
  {
    id: 1,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Closed",
    Replay: "الرد معلق",
    Replydate: "15/12/2023",
  },
  {
    id: 2,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
  {
    id: 3,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
  {
    id: 4,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
  {
    id: 5,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
  {
    id: 6,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
  {
    id: 7,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
  {
    id: 8,
    UserIdentity: "غير معروف",
    Text: "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    SendingDate: "15/12/2023",
    Status: "Sent",
    Replay:
      "انه يحتاج الى ابتسامة كبيرة. موريس يتملق النخبة، ويحتاج إلى نبته بولفينار",
    Replydate: "15/12/2023",
  },
];
const defaultData = [...sampleData];

const CoachComplaintContent = () => {
  const [activities, setActivities] = useState(sampleData);
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [isDetailsModalOpen, SetIsDetailsModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [sortedActivities, setSortedActivities] = useState(sampleData);
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
    SetIsDetailsModalOpen(false);
  };

  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveDetailsedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
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
    <div className="activity-page">
      <div className="activity-table-container">
        <h1 style={{ display: "flex", justifyContent: "space-between" }}>
          الشكاوي
          <Button
            label="ملء الشكوى"
            className={"btn-add-table"}
            Icon={addTableIcon}
            iconPosition={"left"}
            width={"auto"}
            height={"3rem"}
            fontSize={"1.125rem"}
            onClick={() => setIsAddModalOpen(true)}
          />
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
          <div className="opration-buttons-activity-table" dir="ltr">
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
                <th onClick={() => toggleSort("Id")}>Id </th>
                <th onClick={() => toggleSort("UserIdentity")}>
                  هوية المستخدم
                </th>
                <th onClick={() => toggleSort("Text")}>النص</th>
                <th onClick={() => toggleSort("SendingDate")}>تاريخ الإرسال</th>

                <th onClick={() => toggleSort("Status")}>الحالة</th>

                <th onClick={() => toggleSort("Replay")}>الرد</th>
                <th onClick={() => toggleSort("Replydate")}>تاريخ الرد</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((activity) => (
                <React.Fragment key={activity.id}>
                  <tr className={`activity-table-row `}>
                    <td>{activity.id}</td>
                    <td>{activity.UserIdentity}</td>
                    <td className="truncate-text">
                      {/* {activity.Text} */}
                      {activity.Text.length > 30
                        ? `${activity.Text.substring(0, 30)}...`
                        : activity.Text}
                    </td>
                    <td>{activity.SendingDate}</td>
                    <td className="activity-status">
                      {/* {activity.Status} */}
                      {activity.Status === "Closed" ? (
                        <>
                          <span className="closed-status">
                            معلق
                            <img src={infoIcon} alt="" />{" "}
                          </span>
                        </>
                      ) : (
                        <>
                          {activity.Status.toLowerCase() ===
                          "Sent".toLowerCase() ? (
                            <>
                              <span className="complite-p">
                                تم الإرسال
                                <img src={tickIcon} alt="" />
                              </span>
                            </>
                          ) : (
                            <>تم الإرسال</>
                          )}
                        </>
                      )}
                      {/* <span> {getIcon(activity.Evaluation)}</span> */}
                    </td>

                    <td style={{ minWidth: "200px" }}>
                      {/* {activity.Replay} */}
                      {activity.Replay.length > 30
                        ? `${activity.Replay.substring(0, 30)}...`
                        : activity.Replay}
                    </td>
                    <td>{activity.Replydate}</td>
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
        <ComplaintContent
          width={"50%"}
          height={"auto"}
          isOpen={isDetailsModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveDetailsedProject}
        />

        <FillComplaint
          handleBtn={() => {
            setIsAddModalOpen(false);
            setShowAlertDelete(true);
          }}
          height={"auto"}
          isOpen={isAddModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveAddedProject}
        />
        {showAlertDelete && (
          <AlertMessage
            closeButton
            lableButtonOne={"Ok"}
            buttomTowActive={false}
            headerText={"تم الإرسال"}
            logo={verify}
            buttonClassFirst={"button-delete-t"}
            buttomText={"لقد تم تقديم شكواك بنجاح، شكرًا لك"}
            buttomTextMiddle={true}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default CoachComplaintContent;
