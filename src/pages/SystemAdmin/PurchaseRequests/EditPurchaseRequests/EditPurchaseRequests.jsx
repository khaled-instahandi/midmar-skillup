import React, { useState } from "react";
import Modal from "../../../Modal";
import InputField from "../../../../elements/DynamicInput/InputField";
import Dropdown from "../../../../elements/Dropdown/Dropdown";
import Button from "../../../../elements/Buttons/Button";
import lineUnder from "../../../../images/under-title-opration.svg";
import DatePicker from "../../../../elements/DatePicker/DatePicker";
import "./AddPurchaseRequests.css";
import BudgetTable from "../BudgetTable/BudgetTable";
import ExcelUploadInput from "../../../../elements/ImageUploadInput/ExcelUploadInput";
const EditPurchaseRequests = ({ isOpen, onClose, projectData, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"auto"}>
      <h2 className="header-text-edit-project">Edit Core PR</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Type"
          // placeholder={'Type of Request'}
          required={true}
          type="text"
          Value={"Type of Request"}
          disable
        />
        <InputField
          label="Project name"
          placeholder={"Project name"}
          required={true}
          Value={"Project name"}
          disable
          type="text"
        />
        <InputField
          label="Financial code"
          required={true}
          Value={"32"}
          disable
          type="text"
        />
        <Dropdown
          label="Location"
          placeHolder={"Select a Location"}
          options={["Category 1", "Category 2"]}
          required={true}
        />
        {/* <DatePicker lable={"Required Implement Date"} required={true} /> */}
        <Dropdown
          label="Currency"
          placeHolder={"Select a Currency"}
          options={["Category 1", "Category 2"]}
          required={true}
        />

        <DatePicker lable={"Date starting"} required={true} />
        <InputField
          type="text"
          customClass="name-add-activity"
          isTextarea
          label="Description"
          placeholder={"Enter the Description"}
          required={true}
        />

        <BudgetTable />
        {/* <ExcelUploadInput
          label={"Attach a document"}
          className="important-width"
          height="auto"
          // icon={exportIcon}
          text="Attaching a file is necessary when the total cost is more than $100"
          // required
        /> */}
        <Button
          type="submit"
          label="Submit PR"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default EditPurchaseRequests;
