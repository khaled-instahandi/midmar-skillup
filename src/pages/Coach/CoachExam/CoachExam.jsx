import React, { useState } from "react";
import Button from "../../../elements/Buttons/Button";
import copyIcon from "../../../images/copy.svg";
import CoachDynamicRadioSelect from "./CoachDynamicRadioSelect";
function CoachExam() {
  const [title, setTitle] = useState("عنوان الاختبار");
  const [description, setDescription] = useState("وصف الاختبار");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div className="activity-page">
      <div className="exam-container">
        <Button
          label="نسخ رابط الاختبار"
          className="button-login"
          iconPosition={"right"}
          Icon={copyIcon}
          width={"auto"}
          height={"3rem"}

          // fontSize={'1.125rem'}
        />
        <div className="header-exam-title">
          <input
            type="text"
            className="title-exam"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            className="description-exam"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <CoachDynamicRadioSelect />
      </div>
    </div>
  );
}

export default CoachExam;
