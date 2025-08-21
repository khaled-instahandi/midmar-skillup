import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";

const AddRiskRegister = ({ isOpen, onClose, projectData, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"90%"} width={"auto"}>
      <h2 className="header-text-edit-project">Add Risk</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Description"
          placeholder={"Enter the Description"}
          required={true}
          isTextarea
        />

        <Dropdown
          label="Category"
          placeHolder={"Select a Category"}
          options={["Category 1", "Category 2"]}
          required={true}
        />

        <Dropdown
          label="Evaluation"
          placeHolder={"Select a Evaluation"}
          options={["Evaluation 1", "Evaluation 2"]}
          required={true}
        />

        <Dropdown
          label="Likelihood of occurrence"
          placeHolder={"Select a Likelihood of occurrence"}
          options={["unit 1", "unit 2"]}
          required={true}
        />
        <Dropdown
          label="Degree of risk"
          placeHolder={"Select a Degree of risk"}
          options={["unit 1", "unit 2"]}
          required={true}
        />
        <Dropdown
          label="Response strategy"
          placeHolder={"Select a Response strategy"}
          options={["unit 1", "unit 2"]}
          required={true}
        />
        <Dropdown
          label="Frequency tracking"
          placeHolder={"Select a Frequency tracking"}
          options={["unit 1", "unit 2"]}
          required={true}
        />

        <InputField
          type="text"
          label="Follow-up official"
          placeholder={"Enter the Follow-up official"}
          required={true}
        />
        <InputField
          customClass="name-add-activity"
          isTextarea
          label="Strategy Description"
          placeholder={"Enter the Strategy Description"}
          required={true}
        />

        <Button
          type="submit"
          label="Add Risk"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default AddRiskRegister;
