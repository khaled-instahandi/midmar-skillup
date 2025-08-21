import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
import DatePicker from "src/elements/DatePicker/DatePicker";

const AddUpdatesTable = ({ isOpen, onClose, projectData, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <h2 className="header-text-edit-project">Update Activity</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        {/* <InputField
                    label="Description"
                    placeholder={'Enter the Description'}
                    required={true}
                    isTextarea
                /> */}

        <Dropdown
          label="State"
          placeHolder={"Select a Category"}
          options={["Category 1", "Category 2"]}
          required={true}
        />
        <DatePicker lable="Actual Start Date" required={true} />

        <InputField
          type="number"
          label="Actual BNFs"
          placeholder={"Enter the Actual BNFs"}
          required={true}
        />
        <InputField
          type="number"
          label="Completion Percentage"
          placeholder={"Enter the Completion Percentage"}
          required={true}
        />
        <DatePicker lable="Update date" required={true} />
        <DatePicker lable="Actual End Date" required={true} />
        <InputField
          isTextarea
          label="Delay Justification"
          placeholder={"Enter the Delay Justification"}
          required={true}
        />
        <InputField
          type="number"
          label="Actual cost"
          placeholder={"Enter the Actual cost"}
          required={true}
        />
        <InputField
          customClass="name-add-activity"
          isTextarea
          label="Notes"
          placeholder={"Enter the Notes"}
          required={true}
        />

        <Button
          type="submit"
          label="Add Update Activity"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
      
    </Modal>
  );
};

export default AddUpdatesTable;
