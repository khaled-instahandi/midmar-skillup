import React, { useState } from "react";
import Modal from "../../Modal";
import InputField from "../../../elements/DynamicInput/InputField";
import Dropdown from "../../../elements/Dropdown/Dropdown";
import Button from "../../../elements/Buttons/Button";
import lineUnder from "../../../images/under-title-opration.svg";
import DatePicker from "../../../elements/DatePicker/DatePicker";
import BudgetTableDetails from "../../../elements/BudgetTableDetails/BudgetTableDetails";
import SignaturesTable from "../../../elements/SignaturesTable/SignaturesTable";
import SlelectState from "../../../elements/SlelectState/SlelectState";
import PrintPage from "../../../elements/PrintPage/PrintPage";

const DetailsPurchaseRequests = ({ isOpen, onClose, projectData, onSave }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"auto"}>
      <h2 className="header-text-edit-project">purchase Request</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Type"
          // placeholder={'Type of Request'}
          required={true}
          type="text"
          Value={"Type of Request"}
          disable
        />
        <InputField
          label="Project name"
          placeholder={"Project name"}
          required={true}
          Value={"Project name"}
          disable
          type="text"
        />
        <InputField
          label="Financial code"
          required={true}
          Value={"32"}
          disable
          type="text"
        />
        <Dropdown
          label="Location"
          placeHolder={"Select a Location"}
          // options={['Category 1', 'Category 2']}
          value={"Category1"}
          required={true}
          disable
        />
        <DatePicker
          lable={"Required Implement Date"}
          required={true}
          disabled
          value={"2022/12/01"}
        />
        <Dropdown
          label="Currency"
          placeHolder={"Select a Currency"}
          options={["Category 1", "Category 2"]}
          required={true}
          value={"TR"}
          disable
        />
        <InputField
          type="text"
          label="Exchange rate to the dollar"
          placeholder={"Enter the Exchange rate to the dollar"}
          required={true}
          disable
          Value={"29"}
        />
        <DatePicker
          lable={"Date starting"}
          required={true}
          value={"2022/11/03"}
          disabled
        />
        <InputField
          type="text"
          customClass="name-add-activity"
          isTextarea
          label="Description"
          placeholder={"Enter the Description"}
          required={true}
          disable
          Value={
            "Simple description Simple description Simple description Simple description Simple description Simple description Simple description "
          }
        />

        <BudgetTableDetails detils />
        <SignaturesTable />
        <SlelectState />
        {/* <PrintDetailsPurchaseRequests /> */}
        <PrintPage />
        {/* <Button type="submit" label="Submit PR" className={'button-edit-project'} height={'3rem'} /> */}
      </form>
    </Modal>
  );
};

export default DetailsPurchaseRequests;
