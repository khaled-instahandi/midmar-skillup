import React, { useState } from "react";
// import "./Activities.css";
import Card from "../../../elements/Card/Card";
import imageCardtow from "../../../images/card2.png";
import { ReactComponent as LineIcon } from "../../../images/line-filter.svg";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
function CoachActivities() {
  const Navigate = useNavigate();

  // Sample data for activities
  const [activities, setActivities] = useState([
    {
      id: 1,
      title: "تصميم وبرمجة مواقع الويب",
      participants: "03/01/2024",
      duration: "30",
      lecturer: "م. عقيل بكور",
      status: "قيد التنفيذ",
      type: "online", // online or physical
    },
    {
      id: 2,
      title: "تصميم وبرمجة مواقع الويب",
      participants: "03/01/2024",
      duration: "30",
      lecturer: "م. عقيل بكور",
      status: "قيد التنفيذ",
      type: "physical", // online or physical
    },
    {
      id: 3,
      title: "تصميم وبرمجة مواقع الويب",
      participants: "03/01/2024",
      duration: "30",
      lecturer: "م. عقيل بكور",
      status: "قيد التنفيذ",
      type: "online", // online or physical
    },
    {
      id: 4,
      title: "تصميم وبرمجة مواقع الويب",
      participants: "03/01/2024",
      duration: "30",
      lecturer: "م. عقيل بكور",
      status: "مكتمل",
      image: imageCardtow,
      type: "physical", // online or physical
    },
    {
      id: 5,
      title: "تصميم وبرمجة مواقع الويب",
      participants: "03/01/2024",
      duration: "30",
      lecturer: "م. عقيل بكور",
      status: "مكتمل",
      image: imageCardtow,
      type: "physical", // online or physical
    },
    {
      id: 6,
      title: "تصميم وبرمجة مواقع الويب",
      participants: "03/01/2024",
      duration: "30",
      lecturer: "م. عقيل بكور",
      status: "مكتمل",
      image: imageCardtow,
      type: "physical", // online or physical
    },

    // Add more activities as needed
  ]);

  // State variable for filter category
  const [filterCategory, setFilterCategory] = useState("all");

  // Filtered activities based on category
  const filteredActivities =
    filterCategory === "all"
      ? activities
      : activities.filter((activity) => activity.type === filterCategory);

  return (
    <div className="activity-page">
      <div className="activity-container-apprentice">
        <div className="header-activity-filter">
          <div className="right-filter">
            <button
              className={`filter-button ${
                filterCategory === "all" ? "active" : ""
              }`}
              onClick={() => setFilterCategory("all")}
            >
              All
            </button>
            <LineIcon />
            <button
              className={`filter-button ${
                filterCategory === "online" ? "active" : ""
              }`}
              onClick={() => setFilterCategory("online")}
            >
              Online
            </button>
            <LineIcon />
            <button
              className={`filter-button ${
                filterCategory === "physical" ? "active" : ""
              }`}
              onClick={() => setFilterCategory("physical")}
            >
              Physical
            </button>
          </div>
          <Dropdown
            // label="Operation type"
            customClass={"mr-2 custom-dropdown dropdown-border-none"}
            placeHolder={"نوع النشاط"}
            options={["تدريب", "نوجيه", "ارشاد"]}
            // required={true}
          />
          <Dropdown
            // label="Operation type"
            customClass={"mr-2 custom-dropdown dropdown-border-none"}
            placeHolder={"حالة النشاط"}
            options={["تدريب", "نوجيه", "ارشاد"]}
            // required={true}
          />
        </div>
        <div className="card-activity">
          {/* Mapping through filtered activities */}
          {filteredActivities.map((activity) => (
            <Card
              onClick={() => Navigate("/coach-dashboard/activities/details")}
              key={activity.id}
              title={activity.title}
              participants={activity.participants}
              duration={activity.duration}
              lecturer={activity.lecturer}
              status={activity.status}
              image={activity.image}
              onFavorite={(isFav) => console.log("Favorite status:", isFav)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoachActivities;
