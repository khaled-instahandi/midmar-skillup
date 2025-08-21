import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";

import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import DatePicker from "../../../elements/DatePicker/DatePicker";

const UpdateRiskRegister = ({
  isOpen,
  onClose,
  projectData,
  onSave,
  height,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"40%"}>
      <h2 className="header-text-edit-project">Risk update</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="add-sub-activity">
        <DatePicker disabled lable="Update date" required={true} />
        <Dropdown
          label="Risk state"
          placeHolder={"Select Risk state"}
          options={["unit 1", "unit 2"]}
          required={true}
        />
        <DatePicker lable="Date the risk occurred" required={true} />
        <InputField
          type="text"
          label="Dealing strategy"
          placeholder={"Enter the Dealing strategy"}
          required={true}
        />
        <Dropdown
          label="Response effectiveness"
          placeHolder={"Select Response effectiveness"}
          options={["unit 1", "unit 2"]}
          required={true}
        />
        <InputField
          isTextarea
          label="Lesson learned"
          placeholder={"Enter the Lesson learned"}
          required={true}
        />

        <Button
          type="submit"
          label="Risk update"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default UpdateRiskRegister;
