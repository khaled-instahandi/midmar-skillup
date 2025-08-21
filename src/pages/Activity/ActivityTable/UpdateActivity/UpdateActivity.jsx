import React, { useState } from "react";
import Modal from "../../../Modal";
import InputField from "../../../../elements/DynamicInput/InputField";
import Dropdown from "../../../../elements/Dropdown/Dropdown";
import DatePicker from "../../../../elements/DatePicker/DatePicker";
import Button from "../../../../elements/Buttons/Button";
import "./UpdateActivity.css";
import lineUnder from "../../../../images/under-title-opration.svg";
const UpdateActivity = ({ isOpen, onClose, projectData, onSave }) => {
  const [formData, setFormData] = useState(projectData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"auto"}>
      <h2 className="header-text-edit-project">Update Activity</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <Dropdown
          label="State"
          placeHolder={"Select"}
          options={["State 1", "State 2"]}
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
          label="Completion Percentage"
          placeholder={"Enter the Completion Percentage"}
          type="number"
          required={true}
        />
        <DatePicker lable="Update date" required={true} />
        <DatePicker lable="Actual End Date" required={true} />
        <InputField
          label="Delay Justification"
          placeholder={"Enter the Delay Justification"}
          type="text"
          required={true}
          isTextarea={true}
        />

        <InputField
          label="Actual cost"
          placeholder={"Enter the Actual cost"}
          type="number"
          required={true}
        />
        <InputField
          customClass="name-add-activity"
          label="Notes"
          placeholder={"Enter The notes"}
          type="text"
          required={true}
          isTextarea={true}
        />
        <Button
          type="submit"
          label="Edit Active"
          className={"button-edit-project"}
        />
      </form>
    </Modal>
  );
};

export default UpdateActivity;
