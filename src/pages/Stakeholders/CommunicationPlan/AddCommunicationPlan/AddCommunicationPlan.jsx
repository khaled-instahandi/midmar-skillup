import React, { useState } from "react";
import Modal from "../../../Modal";
import InputField from "../../../../elements/DynamicInput/InputField";
import Dropdown from "../../../../elements/Dropdown/Dropdown";
import Button from "../../../../elements/Buttons/Button";
import lineUnder from "../../../../images/under-title-opration.svg";
import DatePicker from "../../../../elements/DatePicker/DatePicker";

const AddCommunicationPlan = ({
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
    <Modal onClose={onClose} height={"80%"} width={"auto"}>
      <h2 className="header-text-edit-project">Add a Communication plan</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Informa tion"
          placeholder={"Enter the Informa tion"}
          required={true}
          type="text"
        />

        <Dropdown
          label="Channel "
          placeHolder={"Select a Channel "}
          options={["Category 1", "Category 2"]}
          required={true}
        />

        <Dropdown
          label="Channel 2"
          placeHolder={"Select a Channel 2"}
          options={["Category 1", "Category 2"]}
          required={true}
        />

        <InputField
          type="text"
          label="Gaol"
          placeholder={"Enter the Gaol"}
          required={true}
        />
        <InputField
          type="text"
          label="Owner "
          placeholder={"Enter the Owner"}
          required={true}
        />
        <InputField
          type="text"
          label="Audience"
          placeholder={"Enter the Audience"}
          required={true}
        />

        <Button
          type="submit"
          label="Add a Communication plan"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default AddCommunicationPlan;
