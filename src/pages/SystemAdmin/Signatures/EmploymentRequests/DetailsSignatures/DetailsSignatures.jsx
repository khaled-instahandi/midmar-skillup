import React from "react";
import Modal from "../../../../Modal";
import InputField from "../../../../../elements/DynamicInput/InputField";
import Dropdown from "../../../../../elements/Dropdown/Dropdown";
import lineUnder from "../../../../../images/under-title-opration.svg";
import DatePicker from "../../../../../elements/DatePicker/DatePicker";

import BudgetTableDetails from "../../../../../elements/BudgetTableDetails/BudgetTableDetails";
import SlelectState from "../../../../../elements/SlelectState/SlelectState";
import SignaturesTable from "../../../../../elements/SignaturesTable/SignaturesTable";
import BudgetTableDetailsEmployee from "src/elements/BudgetTableDetailsEmployee/BudgetTableDetailsEmplyee";
import PrintPage from "./PrintPage/PrintPage";

const DetailsSignatures = ({
  isOpen,
  onClose,
  projectData,
  onSave,
  hederText,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"} width={"1400px"}>
      <h2 className="header-text-edit-project">{hederText}</h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleSubmit} className="edit-project-form">
        <InputField
          label="Employment requests type"
          // placeholder={'Type of Request'}
          required={true}
          type="text"
          Value={"Type of employment requests type"}
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
        <InputField
          label="ID"
          required={true}
          Value={"1"}
          disable
          type="text"
        />

        <Dropdown
          label="Currency"
          placeHolder={"Select a Currency"}
          options={["Category 1", "Category 2"]}
          required={true}
          value={"TR"}
          // disable
        />

        <Dropdown
          label="Employment requests location"
          placeHolder={"Select a employment requests location"}
          // options={['Category 1', 'Category 2']}
          value={"314"}
          required={true}
          disable
        />

        <BudgetTableDetailsEmployee />
        <SignaturesTable />
        <SlelectState />
        {/* <PrintDetailsPurchaseRequests /> */}
        <PrintPage />
        {/* <Button type="submit" label="Submit PR" className={'button-edit-project'} height={'3rem'} /> */}
      </form>
    </Modal>
  );
};

export default DetailsSignatures;
