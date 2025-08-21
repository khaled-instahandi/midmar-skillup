import React, { useState, useEffect } from "react";

import Button from "../../../elements/Buttons/Button";
import detialeIcon from "../././../../images/detials-tavle-icon.svg";
import Pagination from "../../../elements/Pagination/Pagination";
import noteIcon from "src/images/task-square.svg";
import timerIcon from "src/images/empjy-happy.svg";
import profileIcon from "src/images/emoji-sad-2.svg";
import CircleProgressBar from "../../../components/CircleProgressBar/CircleProgressBar";

import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import verify from "../../../images/verify2.svg";
import infoCircle from "../../../images/info-circle2.svg";
import CardStatistics from "../InteractivePanel/CardStatistics";
import { useNavigate } from "react-router-dom";

const sampleData = [
  {
    id: 1,
    TrainingName: "تصميم وبرمجة مواقع الويب",
    Title: "الاختبار الاول",
    NumberOfTrainees: "22",
    PreTestMark: "65",
    PostTestMark: "90",
    ProgressPercent: "25",
  },
  {
    id: 2,
    TrainingName: "تصميم UI UX",
    Title: "الاختبار الثاني",
    PreTestMark: "65",
    PostTestMark: "90",
    ProgressPercent: "25",
  },
  {
    id: 3,
    TrainingName: "التصميم الجرافيكي",
    Title: "الاختبار الثالث",
    PreTestMark: "65",
    PostTestMark: "90",
    ProgressPercent: "25",
  },
];
const defaultData = [...sampleData];

const CoachTest = () => {
  const Navigate = useNavigate();

  const [activities, setActivities] = useState(sampleData);
  const [isSorted, setIsSorted] = useState(false);
  const [filterColumn, setFilterColumn] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedActivities, setSortedActivities] = useState(sampleData);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);

  const handleModalClose = () => {
    setShowAlertConfirm(false);
    setShowAlertDelete(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSave(formData);
  };

  const fetchDataForNewPage = (page) => {
    setCurrentPage(page);
  };
  const dataCard = [
    {
      image: noteIcon,
      title: "إجمالي تسليم الاختبارات",
      value: "86",
      color: "#007AFF",
    },
    {
      image: timerIcon,
      title: "عدد الطلاب الناجحين",
      value: "65",
      color: "#7BBC67",
    },

    {
      image: profileIcon,
      title: "عدد الطلاب الراسبين",
      value: "11",
      color: "#EA5148",
    },
  ];
  return (
    <div className="activity-page">
      <div className="activity-table-container">
        <div className="interactive-panel interactive-panel-col-4">
          {dataCard.map((value, index) => (
            <CardStatistics
              key={index}
              title={value.title}
              image={value.image}
              value={value.value}
              color={value.color}
              width={"32%"}
            />
          ))}
        </div>
        <h1 className="mt-3">اختبارات جميع التدريبات</h1>
        <form onSubmit={handleSubmit} className="add-sub-activity">
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
            <table className="activity-table">
              <thead>
                <tr className="activity-table-header">
                  <th onClick={() => toggleSort("Id")}>Id</th>

                  <th onClick={() => toggleSort("TrainerName")}>اسم التدريب</th>
                  <th onClick={() => toggleSort("PreTestMark")}>
                    نتيجة الاختبار القبلي
                  </th>
                  <th onClick={() => toggleSort("PostTestMark")}>
                    نتيجة الاختبار البعدي
                  </th>
                  <th onClick={() => toggleSort("ProgressPercent")}>
                    متوسط نسبة التحسن
                  </th>

                  <th>التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => (
                  <React.Fragment key={item.id}>
                    <tr
                      className={`activity-table-row `}
                      onClick={() => Navigate("/coach/test/details")}
                    >
                      <td>{item.id}</td>

                      <td>
                        <p className="title-coach-test">{item.Title}</p>
                        {item.TrainingName}
                      </td>
                      <td>
                        {/* <CircleProgressBar value={item.PreTestMark} /> */}
                        {item.PreTestMark}%
                      </td>

                      <td>
                        {/* <CircleProgressBar value={item.PostTestMark} /> */}
                        {item.PostTestMark}%
                      </td>
                      <td>
                        {/* <CircleProgressBar value={item.ProgressPercent} /> */}
                        {item.ProgressPercent}%
                      </td>
                      <td className="actions-table-btn">
                        <Button
                          className={"action-table"}
                          onClick={() => setIsDetailModalOpen(true)}
                          Icon={detialeIcon}
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

          {showAlertDelete && (
            <AlertMessage
              lableButtonOne={"Ok"}
              buttomTowActive={false}
              headerText={"Deleted !!"}
              logo={verify}
              buttonClassFirst={"button-delete-t"}
              buttomText={"Hey, This trainee has been deleted!!"}
              buttomTextMiddle={true}
              onClose={handleModalClose}
            />
          )}
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
              buttomText={"You will not be able to recover this trainee !!"}
              buttomTextMiddle={true}
              onClose={handleModalClose}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default CoachTest;
