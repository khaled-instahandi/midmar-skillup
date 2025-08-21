import React, { useState } from "react";
import Modal from "../Modal";
import InputField from "../../elements/DynamicInput/InputField";
import Dropdown from "../../elements/Dropdown/Dropdown";
import DatePicker from "../../elements/DatePicker/DatePicker";
import Button from "../../elements/Buttons/Button";
import "./EditProjectModal.css";
import lineUnder from "../../images/under-title-opration.svg";
const AddProjectModal = ({ isOpen, onClose, projectData, onSave }) => {
  const [formData, setFormData] = useState(projectData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"auto"}>
      <h2 className="header-text-edit-project">Add project</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          customClass="name-edit-project"
          type="text"
          label="Name"
          placeholder={"Enter the item name "}
          required={true}
        />

        <Dropdown
          label="Donor"
          placeHolder={"Select a doner "}
          options={["Donor 1", "Donor 2"]}
          required={true}
        />
        <InputField
          label="Contract Code"
          placeholder={"Enter the Contract Code"}
          type="number"
          required={true}
        />
        <Dropdown
          label="Type"
          placeHolder={"Select a type "}
          options={["Donor 1", "Donor 2"]}
          required={true}
        />
        <InputField
          label="Financial code "
          placeholder={"Enter the Financial code "}
          type="text"
          required={true}
        />
        <DatePicker lable="Start Date" required={true} />
        <DatePicker lable={"End Date"} required={true} />
        <Dropdown
          label="Currency"
          placeHolder={"Select a currency  "}
          options={["Donor 1", "Donor 2"]}
          required={true}
        />

        <InputField
          type="text"
          // customClass="link-edit-project"
          label="Drive Link"
          placeholder={"Enter the drive link"}
          required={true}
        />
        <Button
          type="submit"
          label="Add project"
          className={"button-edit-project"}
        />
      </form>
    </Modal>
  );
};

export default AddProjectModal;
