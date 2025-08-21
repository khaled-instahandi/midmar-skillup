import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";

import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
const FillComplaint = ({
  isOpen,
  onClose,
  projectData,
  onSave,
  height,
  handleBtn,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"max-content"} width={"auto"}>
      <h2 className="header-text-edit-project">Fill Complaint</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <Dropdown
          label="User Identity"
          placeHolder={"Select a User Identity"}
          options={["Category 1", "Category 2"]}
          customClass="name-edit-project"
          textError={"You cannot receive reply for anonymous complaint"}
          required={true}
        />
        <InputField
          customClass="name-edit-project"
          label="The Complaint text"
          placeholder={"EnterThe Complaint text"}
          required={true}
          isTextarea
          numberRows={3}
        />

        <Button
          onClick={() => {
            handleBtn();
          }}
          type="submit"
          label="Send"
          className={"button-edit-project"}
          height={"3rem"}
        />
      </form>
    </Modal>
  );
};

export default FillComplaint;
