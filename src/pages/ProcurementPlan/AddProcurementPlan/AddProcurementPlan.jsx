import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
import DatePicker from "../../../elements/DatePicker/DatePicker";

const AddProcurementPlan = ({ isOpen, onClose, projectData, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"auto"}>
      <h2 className="header-text-edit-project">Add a purchasing plan</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Service/Product"
          placeholder={"Enter the Service/Product"}
          required={true}
          type="text"
        />
        <InputField
          label="Administrator"
          placeholder={"Enter the Administrator"}
          required={true}
          type="text"
        />
        <DatePicker lable={"Planned date"} required={true} />

        <Dropdown
          label="Operation type"
          placeHolder={"Select a Operation type"}
          options={["Category 1", "Category 2"]}
          required={true}
        />
        <DatePicker lable={"Planned delivery date"} required={true} />
        <DatePicker lable={"Actual delivery date"} required={true} />

        <InputField
          type="text"
          label="Expected duration"
          placeholder={"Enter the Expected duration"}
          required={true}
        />

        <InputField
          type="text"
          label="Logation"
          placeholder={"Enter the Logation"}
          required={true}
        />
        <InputField
          type="text"
          label="State"
          placeholder={"Enter the State"}
          required={true}
        />
        <InputField
          isTextarea
          label="Notes"
          placeholder={"Enter the Notes"}
          required={true}
        />

        <Button
          type="submit"
          label="Add a purchasing plan"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default AddProcurementPlan;
