import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import DatePicker from "../../../elements/DatePicker/DatePicker";
import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
import TimePicker from "../../../elements/TimePicker/TimePicker";
import ExcelUploadInput from "../../../elements/ImageUploadInput/ExcelUploadInput";
import fileExcel from "../../../files/example.xlsx";
import filePdf from "../../../files/example.pdf";

const EditPanelApprentice = ({ isOpen, onClose, projectData, onSave }) => {
  const [formData, setFormData] = useState(projectData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"}>
      <h2 className="header-text-edit-project">تعديل الملف الشخصي</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-panel">
        <InputField
          type="text"
          customClass="two-col-element"
          label="الاسم (عربي)"
          Value={"خالد الاحمد"}
          required={true}
          disable
        />
        {/* <InputField
                    type='text'
                    customClass='two-col-element'

                    label="الاسم الأخير (عربي)"
                    Value={'الاحمد'}
                    required={true}
                    disable
                /> */}
        <InputField
          type="text"
          customClass="two-col-element"
          disable
          label="الاسم (إنكليزي)"
          Value={"khaled alahmad"}
          required={true}
        />

        <DatePicker
          lable="تاريخ الميلاد"
          customClass="two-col-element"
          role={"ar"}
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
        {/* <InputField
                    customClass='two-col-element'

                    type='text'
                    disable
                    label="Workplace"
                    Value={'Turkey'}
                    placeholder={'alahmad'}
                    required={true}
                /> */}

        <InputField
          type="text"
          customClass="two-col-element"
          disable
          label="مكان الودلاة"
          Value={"حلب"}
          placeholder={"alahmad"}
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
        {/* <div className="text-width-for-col"> */}
        <InputField
          customClass="two-col-element"
          type="text"
          // disable
          label="مكان الإقامة"
          Value={"سوريا"}
          placeholder={"alahmad"}
          required={true}
        />

        {/* </div> */}
        <InputField
          type="text"
          customClass="two-col-element"
          // customClass='three-col-element'

          // disable
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
          Value={"بكالوريس في علم الإدارة"}
          placeholder={"alahmad"}
          required={true}
        />
        <InputField
          // customClass='two-col-element'
          customClass="three-col-element"
          type="text"
          // disable
          label="المنصب الوظيفي"
          Value={"مدخل بيانات"}
          placeholder={"alahmad"}
          required={true}
        />
        <InputField
          customClass="three-col-element"
          type="text"
          // disable
          label="مكان العمل"
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
    </Modal>
  );
};

export default EditPanelApprentice;
