import React, { useState } from "react";
import "./LogicalFrameworkTable.css"; // Your CSS file path here
import Button from "../../../elements/Buttons/Button";
import trachIcon from "../../../images/trash-icon.svg";
import editIcon from "../../../images/edit-2.svg";
import addIcon from "../../../images/add-square.svg";
import AlertMessageSuccess from "../../../elements/AlertMessage/AlertMessage";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";
import verify from "../../../images/verify2.svg";
import infoCircle from "../../../images/info-circle2.svg";
import AddLogicalFramework from "../AddLogicalFramework/AddLogicalFramework";
import EditLogicalFramework from "../EditLogicalFramework/EditLogicalFramework";
import arrowRightIcon from "../././../../images/right-logical.svg";

const ArrowIcon = ({ isPositive }) => {
  return isPositive ? <span>&uarr;</span> : <span>&darr;</span>;
};
const ArrowIconType = ({ isPositive }) => {
  return isPositive ? (
    <div className={`arrow-name-table `} style={{ marginRight: "0.5rem" }}>
      <img src={arrowRightIcon} alt="" />
    </div>
  ) : (
    <div className={`arrow-name-table down`} style={{ marginRight: "0.5rem" }}>
      <img src={arrowRightIcon} alt="" />
    </div>
  );
};

const Row = ({ data }) => {
  const isNA = (value) => value === "N/A";

  const { type, statement, indicator, target, mov, assumption, children } =
    data;
  const [childrenVisible, setChildrenVisible] = useState(false);

  const toggleChildren = () => {
    setChildrenVisible(!childrenVisible);
  };

  const isPercentagePositive = (value) => {
    const numericValue = parseFloat(value.replace("%", ""));
    return numericValue > 0;
  };

  const isPercentageNegative = (value) => {
    const numericValue = parseFloat(value.replace("%", ""));
    return numericValue < 0;
  };

  return (
    <>
      <tr className={`row-${type}`}>
        <td
          onClick={toggleChildren}
          className={`logical-content first-cl ${
            isNA(type) ? "na-value" : ""
          } ${!childrenVisible ? "" : "border-right-logical"}`}
        >
          {type && <ArrowIconType isPositive={!childrenVisible} />}
          {/* {type ? '' : <ArrowIconType isPositive={!childrenVisible} />} */}
          {type}
        </td>
        <td className={`logical-content ${isNA(statement) ? "na-value" : ""}`}>
          {statement}
        </td>
        <td className={`logical-content ${isNA(indicator) ? "na-value" : ""}`}>
          {indicator}
        </td>
        <td
          className={`logical-content ${isNA(target) ? "na-value" : ""} ${
            isPercentagePositive(target)
              ? "positive"
              : isPercentageNegative(target)
              ? "negative"
              : ""
          }`}
        >
          {!isNA(target) ? (
            <>
              {target} <ArrowIcon isPositive={isPercentagePositive(target)} />
            </>
          ) : (
            target
          )}
        </td>
        <td className={`logical-content ${isNA(mov) ? "na-value" : ""}`}>
          {mov}
        </td>
        <td className={`logical-content ${isNA(assumption) ? "na-value" : ""}`}>
          {assumption}
        </td>
      </tr>
      {children && childrenVisible && (
        <>
          {children.map((child) => (
            <Row key={child.id} data={child} />
          ))}
        </>
      )}
    </>
  );
};

const LogicalFrameworkTable = ({ data }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [selectedProjectData, setSelectedProjectData] = useState(null);

  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);

  const handleModalClose = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setShowAlertDelete(false);
    setShowAlertConfirm(false);
  };

  const handleSaveAddedProject = (addedData) => {
    console.log("Added project data:", addedData);
    handleModalClose();
  };
  const handleSaveEditedProject = (addedData) => {
    console.log("Added project data:", addedData);
    handleModalClose();
  };

  return (
    <div className="logical-framework-table-container">
      <h1>Logical framework table</h1>
      <div className="header-logical-table">
        <div className="export-buttons">
          <span>Data Export</span>
          <button className="export-button" onClick={() => console.log("csv")}>
            CSV
          </button>
          <button
            className="export-button"
            onClick={() => console.log("excel")}
          >
            Excel
          </button>
          <button className="export-button" onClick={() => console.log("pdf")}>
            Pdf
          </button>
        </div>
        <div className="opration-buttons">
          <Button
            label="Delete"
            onClick={() => setShowAlertConfirm(true)}
            className="button-delete"
            Icon={trachIcon}
            iconPosition={"left"}
            width={"165px"}
            height={"52px"}
            fontSize={"1.125rem"}
          />

          <Button
            label="Edit"
            onClick={() => setIsEditModalOpen(true)}
            className="button-edit"
            Icon={editIcon}
            iconPosition={"left"}
            width={"165px"}
            height={"52px"}
            fontSize={"1.125rem"}
          />
          <Button
            label="Add"
            onClick={() => setIsAddModalOpen(true)}
            className="button-add"
            Icon={addIcon}
            iconPosition={"left"}
            width={"165px"}
            height={"52px"}
            fontSize={"1.125rem"}
          />
        </div>
      </div>
      <div className="table-container">
        <table className="logical-framework-table">
          <thead>
            <tr>
              <th className="heder-logical"></th>
              <th className="heder-logical">Statement</th>
              <th className="heder-logical">Indicator</th>
              <th className="heder-logical">Target</th>
              <th className="heder-logical">MoV</th>
              <th className="heder-logical">Assumption</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <Row key={item.id} data={item} />
            ))}
          </tbody>
        </table>
        <AddLogicalFramework
          isOpen={isAddModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveAddedProject}
        />
        <EditLogicalFramework
          isOpen={isEditModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveEditedProject}
        />
        {showAlertConfirm && (
          <AlertMessage
            OnClickBtnTow={() => {
              setShowAlertConfirm(false);
              setShowAlertDelete(true);
            }}
            closeButton={true}
            lableButtonOne={"Cancel"}
            lableButtonTow={"Yes, delete it !!"}
            buttomTowActive={true}
            headerText={"Are you sure to delete?"}
            logo={infoCircle}
            ButtonClassTow={"button-confirm-delete"}
            buttonClassFirst={"button-cancel"}
            buttomText={"You will not be able to recover this project !!"}
            buttomTextMiddle={true}
            onClose={handleModalClose}
          />
        )}
        {showAlertDelete && (
          <AlertMessage
            closeButton
            lableButtonOne={"Ok"}
            buttomTowActive={false}
            headerText={"Deleted !!"}
            logo={verify}
            buttonClassFirst={"button-delete-t"}
            buttomText={"Hey, This project has been deleted!!"}
            buttomTextMiddle={true}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default LogicalFrameworkTable;
