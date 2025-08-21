import React from "react";
import Button from "../../../elements/Buttons/Button";

import QuillEditor from "../../../components/QuillEditor/QuillEditor";
import ExcelUploadInput from "../../../elements/ImageUploadInput/ExcelUploadInput";
function CoachTrainingMaterial() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="activity-page">
      <div className="activity-table-container">
        <form onSubmit={handleSubmit} className="edit-project-form">
          <QuillEditor
            descriptionDirection="rtl"
            customClass={"objectives-input objectives-input-q"}
            label={"أهداف التدريب"}
            description={"أدخل أهداف التدريب"}
            required
          />
          <QuillEditor
            customClass={"objectives-input objectives-input-q"}
            label={"مخرجات التدريب"}
            description={"أدخل مخرجات التدريب"}
            required
          />
          <QuillEditor
            customClass={"objectives-input objectives-input-q"}
            label={"منهجية التدريب"}
            description={"أدخل منهجية التدريب"}
            required
          />
          <QuillEditor
            customClass={"objectives-input objectives-input-q"}
            label={"أجندة التدريب"}
            description={"أدخل أجندة التدريب"}
            required
          />
          <ExcelUploadInput
            label={"المواد التدريبية"}
            className="important-width"
            required
            height="auto"
            margin={"0.5rem"}
          />
          <ExcelUploadInput
            label={"المراجع"}
            className="important-width"
            required
            height="auto"
            margin={"0.5rem"}
          />
          <Button type="submit" label="حفظ" className={"button-edit-project"} />
        </form>
      </div>
    </div>
  );
}

export default CoachTrainingMaterial;
