import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";

import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
const AddCategoryBudget = ({
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
    <Modal onClose={onClose} height={"auto"} width={"40%"}>
      <h2 className="header-text-edit-project">Add Category</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          // customClass='name-edit-project'
          customClass="name-add-activity"
          type="text"
          label="Category name"
          placeholder={"Enter the Category name"}
          required={true}
        />

        <Button
          type="submit"
          label="Add Category"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default AddCategoryBudget;
