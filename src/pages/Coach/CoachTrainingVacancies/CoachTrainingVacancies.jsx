import React from "react";
import CourseImage from "src/images/Rectangle 593.png";
import calenderIcon from "src/images/calender-card-icon.svg";

import "./CoachTrainingVacancies.css";
import { useNavigate } from "react-router-dom";
function CardTemplate({ title, image, date, onClick }) {
  return (
    <div className="card-template" onClick={onClick}>
      <img src={image} alt="" />
      <div className="header-text-template">
        <p>{title}</p>
      </div>
      <div className="bottom-text-template">
        <img src={calenderIcon} alt="" />
        <p>
          تاريخ انتهاء التقديم:<span>{date}</span>
        </p>
      </div>
    </div>
  );
}

function CoachTrainingVacancies() {
  const Navigate = useNavigate();

  const Data = [
    {
      id: 1,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
    {
      id: 2,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
    {
      id: 3,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
    {
      id: 4,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
    {
      id: 5,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
    {
      id: 6,
      Title: "مدرب برمجة تطبيقات أندرويد",
      Image: CourseImage,
      date: "0/19/2024",
    },
  ];
  return (
    <div className="activity-page">
      <div
        className="activity-table-container"
        style={{ padding: "4rem 4rem 1rem 1rem" }}
      >
        <h1 className="mb-10">الشواغر التدريبية</h1>
        <div className="list-cards-template">
          {Data.map((item) => (
            <>
              <CardTemplate
                onClick={() => Navigate("/coach-training-vacancies/details")}
                key={item.id}
                title={item.Title}
                image={item.Image}
                date={item.date}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoachTrainingVacancies;
