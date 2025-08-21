import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";

const AddItems = ({ isOpen, onClose, projectData, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"auto"}>
      <h2 className="header-text-edit-project">Add Items</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          type="text"
          label="Name"
          placeholder={"Enter the item name "}
          required={true}
        />

        <Dropdown
          label="Category"
          placeHolder={"Select a Category"}
          options={["Category 1", "Category 2"]}
          required={true}
        />

        <Dropdown
          label="Type"
          placeHolder={"Select a type"}
          options={["type 1", "type 2"]}
          required={true}
        />

        <Dropdown
          label="Unit"
          placeHolder={"Select a unit"}
          options={["unit 1", "unit 2"]}
          required={true}
        />

        <InputField
          type="number"
          label="Amount"
          placeholder={"Enter the Amount"}
          required={true}
        />
        <InputField
          type="number"
          label="Frequency"
          placeholder={"Enter the Frequency"}
          required={true}
        />
        <InputField
          type="number"
          label="Loading percentage"
          placeholder={"Enter the Loading percentage"}
          required={true}
        />
        <InputField
          type="number"
          label="Unit cost"
          placeholder={"Enter the Unit cost"}
          required={true}
        />

        <InputField
          type="text"
          label="Code"
          placeholder={"Enter the Accounting Code"}
          required={true}
        />

        <InputField
          label="Amount Justification"
          placeholder={"Enter The Amount Justification"}
          isTextarea
          required={true}
        />

        <Button
          type="submit"
          label="Add items"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default AddItems;
