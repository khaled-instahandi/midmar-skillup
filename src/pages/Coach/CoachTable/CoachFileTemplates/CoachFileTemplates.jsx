import React from "react";
import "./CoachFileTemplates.css";
import powerPointIcon from "src/images/Microsoft_PowerPoint_Logo 1.png";
import wordIcon from "src/images/word2-icon.svg";

import powerPoint from "src/images/powerpoint-icon.svg";
import word from "src/images/word-small-icon.svg";

import powerPointImage from "src/images/power-point-image.png";
import wordImage from "src/images/word-image.png";

import Button from "src/elements/Buttons/Button";
import importIcon from "src/images/import-icon.svg";

function CardTemplate({ title, image, iconTitle }) {
  return (
    <div className="card-template">
      <div className="header-text-template">
        <img src={iconTitle} alt="" />
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
      <Button
        width={"100%"}
        label="تحميل القالب"
        className="btn-download  my-2"
        height={"2.5REM"}
        Icon={importIcon}
        iconPosition={"right"} //   onClick={() => setIsAddModalOpen(true)}
      />
    </div>
  );
}

function CoachFileTemplates() {
  const powerPointData = [
    {
      id: 1,
      Title: "نموذج التدريب",
      Image: powerPointImage,
    },
    {
      id: 2,
      Title: "نموذج التدريب",
      Image: powerPointImage,
    },
    {
      id: 3,
      Title: "نموذج التدريب",
      Image: powerPointImage,
    },
  ];
  const wordData = [
    {
      id: 1,
      Title: "نموذج تقرير التدريب",
      Image: wordImage,
    },
    {
      id: 2,
      Title: "نموذج تقرير التدريب",
      Image: wordImage,
    },
    {
      id: 3,
      Title: "نموذج تقرير التدريب",
      Image: wordImage,
    },
  ];
  return (
    <div className="activity-page" style={{ marginTop: "-2rem" }}>
      <div
        className="activity-table-container"
        style={{ padding: "4rem 4rem 1rem 1rem" }}
      >
        <h1 className="mb-3">نماذج الملفات</h1>
        <section className="powerpoint-section">
          <div className="powerpoint-header">
            <img src={powerPointIcon} alt="" />
            نماذج البوبوينت PPTX
          </div>
          <div className="list-cards-template">
            {powerPointData.map((item) => (
              <>
                <CardTemplate
                  key={item.id}
                  title={item.Title}
                  image={item.Image}
                  iconTitle={powerPoint}
                />
              </>
            ))}
          </div>
        </section>
        <section className="powerpoint-section mt-10">
          <div className="powerpoint-header">
            <img src={wordIcon} alt="" />
            نماذج الوورد docx
          </div>
          <div className="list-cards-template">
            {wordData.map((item) => (
              <>
                <CardTemplate
                  key={item.id}
                  title={item.Title}
                  image={item.Image}
                  iconTitle={word}
                />
              </>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CoachFileTemplates;
