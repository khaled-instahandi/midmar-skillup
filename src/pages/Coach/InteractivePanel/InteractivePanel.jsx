import React from "react";
import CardStatistics from "./CardStatistics";
import noteIcon from "src/images/note-2.svg";
import timerIcon from "src/images/timer-start.svg";
import profileIcon from "src/images/profile-user2.svg";
import rankingIcon from "src/images/ranking-icon.svg";
import starIcon from "src/images/medal-star-icon.svg";
import moneyIcon from "src/images/moneys-icon.svg";

function InteractivePanel() {
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
    {
      image: starIcon,
      title: "تقييم إدارة مضمار",
      value: "85%",
      color: "#EA5148",
    },
    {
      image: moneyIcon,
      title: "إجمالي أجر التدريبات",
      value: "1200$",
      color: "#5856D6",
    },
  ];

  return (
    <div className="activity-page">
      <div className="interactive-panel-container">
        <h2>إحصائيات عامة</h2>
        <div className="interactive-panel">
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
      </div>
    </div>
  );
}

export default InteractivePanel;
