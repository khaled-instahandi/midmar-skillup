import React from "react";
import CardStatistics from "../../InteractivePanel/CardStatistics";
import noteIcon from "src/images/note-2.svg";
import timerIcon from "src/images/timer-start.svg";
import profileIcon from "src/images/profile-user2.svg";
import rankingIcon from "src/images/ranking-icon.svg";
import AverageTestResultsCoach from "../../CoachComponents/AverageTestResultsCoach";
import EducationalLevelChartCoach from "../../CoachComponents/EducationalLevelChartCoach";

function HeaderCoachDetails() {
  const dataCard = [
    {
      image: noteIcon,
      title: "عدد التدريبات المقدمة",
      value: "8",
      color: "#158B7F",
    },
    {
      image: timerIcon,
      title: "عدد الساعات المعطاة",
      value: "260",
      color: "#007AFF",
    },

    {
      image: profileIcon,
      title: "عدد المتدربين دون تكرار",
      value: "94",
      color: "#F8BB86",
    },
    {
      image: rankingIcon,
      title: "متوسط تقييم المتدربين",
      value: "90%",
      color: "#FFC800",
    },
  ];
  return (
    <>
      
      <div className="interactive-panel interactive-panel-col-4">
        {dataCard.map((value, index) => (
          <CardStatistics
            key={index}
            title={value.title}
            image={value.image}
            value={value.value}
            color={value.color}
          />
        ))}
      </div>
      <div className="row">
        <AverageTestResultsCoach />
        <EducationalLevelChartCoach />
      </div>

    </>
  );
}

export default HeaderCoachDetails;
