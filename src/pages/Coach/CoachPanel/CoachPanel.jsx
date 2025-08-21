import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import DateTimePicker from "src/elements/DateTimePicker/DateTimePicker";
import Dropdown from "src/elements/Dropdown/Dropdown";
import InputField from "src/elements/DynamicInput/InputField";
import ExcelUploadInput from "src/elements/ImageUploadInput/ExcelUploadInput";
import lineUnder from "../../../images/under-title-opration.svg";
import DatePicker from "src/elements/DatePicker/DatePicker";

function CoachPanel() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSave(formData);
  };
  const [studyLevel, setStudyLevel] = useState("بكالوريس في علم الإدارة");
  return (
    <div className="activity-page">
      <div className="activity-table-container">
        {/* <h1>تعديل الملف الشخصي</h1> */}
        {/* <img src={lineUnder} alt="" /> */}
        <form onSubmit={handleSubmit} className="edit-panel">
          <InputField
            type="text"
            customClass="two-col-element"
            label="الاسم (عربي)"
            Value={"خالد الاحمد"}
            required={true}
            disable
          />

          <InputField
            type="text"
            customClass="two-col-element"
            disable
            label="الاسم (إنكليزي)"
            Value={"khaled alahmad"}
            required={true}
          />

          <DatePicker
            role={"ar"}
            lable="تاريخ الميلاد"
            customClass="two-col-element"
            required={true}
            value={"01/01/1993"}
            disabled
          />
          <InputField
            type="text"
            customClass="two-col-element"
            disable
            label="صورة الهوية"
            Value={"ID photo - Nour.png"}
            placeholder={"alahmad"}
            required={true}
          />
          <Dropdown
            label="الجنس"
            customClass="two-col-element"
            placeHolder={"Who would you like to add?"}
            options={["ذكر", "انثى"]}
            disable
            required={true}
            value={"ذكر"}
          />

          <InputField
            type="text"
            customClass="two-col-element"
            disable
            label="مكان الودلاة"
            Value={"حلب"}
            placeholder={"alahmad"}
            required={true}
          />

          {/* <div className="text-width-for-col"> */}
          <InputField
            customClass="two-col-element"
            type="text"
            disable
            label="مكان الإقامة"
            Value={setStudyLevel}
            placeholder={"alahmad"}
            required={true}
          />

          {/* </div> */}
          <InputField
            type="text"
            customClass="two-col-element"
            // customClass='three-col-element'

            disable
            label="المدينة"
            Value={"حلب - اعزاز - جانب مول اعزاز"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            customClass="two-col-element"
            type="text"
            // disable
            label="المستوى التعليمي"
            Value={studyLevel}
            placeholder={"alahmad"}
            onChange={(e) => setStudyLevel(e.target.value)} // Added onChange handler
            required={true}
          />
          <InputField
            type="text"
            customClass="two-col-element"
            // disable
            label="رقم الهاتف"
            Value={"+90 531 808 45 96"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            type="email"
            // disable
            customClass="two-col-element"
            label="البريد الإلكتروني"
            Value={"m.nour.eng@gmail.com"}
            placeholder={"alahmad"}
            required={true}
          />

          <InputField
            customClass="two-col-element"
            type="password"
            // disable
            label="كلمة المرور"
            Value={"123456789"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            customClass="two-col-element"
            // customClass="three-col-element"
            type="text"
            // disable
            label="المنصب الوظيفي"
            Value={"مدخل بيانات"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            customClass="two-col-element"
            type="text"
            // disable
            label="مكان العمل"
            Value={"حلب - اعزاز - جانب مول اعزاز"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            customClass="two-col-element"
            type="text"
            // disable
            label="عدد ساعات التدريب"
            Value={"60 ساعة"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            // customClass="two-col-element"
            customClass="three-col-element"
            type="text"
            // disable
            label="معدل الأجر اليومي"
            Value={"10 $"}
            placeholder={"alahmad"}
            required={true}
          />
          <InputField
            // customClass="two-col-element"
            customClass="three-col-element"
            type="text"
            // disable
            label="مجالات التدريب"
            Value={"حلب - اعزاز - جانب مول اعزاز"}
            placeholder={"alahmad"}
            required={true}
          />
          <ExcelUploadInput
            label={"السيرة الذاتية"}
            className="important-width"
            required
            value={{ name: "example.xlsx" }}
            // height="auto"
            margin={"0.5rem"}
            forEdit
          />
          <ExcelUploadInput
            label={"الشهادة"}
            className="important-width"
            required
            value={{ name: "example.pdf" }}
            margin={"0.5rem"}
            forEdit
          />

          <Button
            type="submit"
            label="حفظ التعديلات"
            className={"button-edit-project btn-one-row"}
          />
        </form>
      </div>
    </div>
  );
}

export default CoachPanel;
