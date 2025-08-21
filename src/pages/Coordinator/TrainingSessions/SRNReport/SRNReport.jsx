import Modal from "../../../Modal";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../../images/logo-a.svg";
import closeIcon from "../../../../images/close-circle-red.svg";
import "./SRNReport.css";
import verify from "../../../../images/verify2.svg";
import AlertMessage from "../../../../elements/AlertMessage/AlertMessage";

import Button from "../../../../elements/Buttons/Button";
import ReasonofReject from "./ReasonofReject";
const SRNReport = ({ isOpen, onClose, projectData, onSave }) => {
  const [formData, setFormData] = useState(projectData);

  const [signatures, setSignatures] = useState([
    {
      id: 1,
      jobTitle: "Direct Manager",
      userName: "Admin user",
      privilege: "Officer",
      signed: "8c986851a79fa66",
      signedAt: "12/14/2023",
    },
    {
      id: 2,
      jobTitle: "Procurement Department",
      userName: "Admin user",
      privilege: "Officer",
      signed: "Not appropriate",
      signedAt: "12/14/2023",
    },
    {
      id: 3,
      jobTitle: "Accounting Department",
      userName: "Admin user",
      privilege: "Officer",
      signed: "5b68c986851a79fa66",
      signedAt: "12/14/2023",
    },
    {
      id: 4,
      jobTitle: "Budget Holder",
      userName: "Admin user",
      privilege: "Officer",
      signed: "68c98685 1a79fa66",
      signedAt: "12/14/2023",
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [showAlertDelete, setShowAlertDelete] = useState(false);

  const handleModalClose = () => {
    setShowAlertDelete(false);
    onClose(true);
    setIsAddModalOpen(false);
  };
  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} height={"100%"}>
      <div className="print-page-container">
        <header className="print-header">
          <div className="header-time">
            <div className="time-heder-a">DOC NO: WI-13-03-F53</div>
            <div className="time-heder-a">Release No: 4</div>{" "}
            <div className="time-heder-a">Release date: 01.01.2024</div>
          </div>
          <div className="header-logo">
            {/* <img src={logo} alt="" /> */}
            <Logo />
          </div>
          <div className="sds">
            <div className="header-section">Training Report</div>

            <div className="time-heder-a" style={{ marginTop: "0.5rem" }}>
              Issued Date: 29 / Des / 23
            </div>
          </div>
        </header>

        <section style={{ width: "100%" }}>
          <table className="request-details" style={{ width: "100%" }}>
            <tbody>
              <tr className="request-row">
                <th>Project Code</th>
                <td>123456</td>
                <th>Project Name</th>
                <td>Lorem ipsum dolor sit amet</td>
              </tr>
              <tr className="request-row">
                <th>Budget Code</th>
                <td>123456</td>
                <th>Reciver Name</th>
                <td>Lorem ipsum dolor sit amet</td>
              </tr>
              <tr className="request-row">
                <th>Reciver Position</th>
                <td>Lorem ipsum dolor sit amet</td>
                <th>Service short Description</th>
                <td>Lorem ipsum dolor sit amet</td>
              </tr>
              <tr className="request-row">
                <th>Service Provider Name</th>
                <td>Lorem ipsum dolor sit amet</td>
                <th>Service Period</th>
                <td>29 / Des / 24 To 29 / Des / 24</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="objectives-outcomes">
          <h2 style={{ borderBottom: "2px #838383 solid" }}>
            Service Received Statement
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
          </p>
        </section>
        <section className="objectives-outcomes">
          <h2 style={{ borderBottom: "2px #838383 solid" }}>Clarification</h2>
          <p>
            I confirm that the services which were mentioned in the contract/TOR
            have been received as targeted.
          </p>
        </section>
        <section className="test-result">
          <div className="sgin-rejects">
            <div className="reciver-name">
              <h6> Reciver Name, Date and signature</h6>
              <div className="btn-signatures">
                <Button
                  width={"40%"}
                  label="Sign"
                  className="sign-button"
                  height={"2.5REM"}
                  onClick={() => setShowAlertDelete(true)}
                />
                <Button
                  width={"40%"}
                  label="Reject"
                  className="reject-button"
                  height={"2.5REM"}
                  onClick={() => setIsAddModalOpen(true)}
                />
              </div>
            </div>
            <div className="manager-name">
              <h6>Direct Manager Name, Date and signature</h6>
              <div className="btn-signatures">
                <Button
                  width={"40%"}
                  label="Sign"
                  className="sign-button"
                  height={"2.5REM"}
                  onClick={() => setShowAlertDelete(true)}
                />
                <Button
                  width={"40%"}
                  label="Reject"
                  className="reject-button"
                  height={"2.5REM"}
                  onClick={() => setIsAddModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ReasonofReject
        width="50%"
        isOpen={isAddModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveAddedProject}
      />
      {showAlertDelete && (
        <AlertMessage
          lableButtonOne={"Ok"}
          buttomTowActive={false}
          headerText={"Done!!"}
          logo={verify}
          closeButton
          buttonClassFirst={"button-delete-t"}
          buttomText={
            "Your leave request has been submitted successfully, thank you"
          }
          buttomTextMiddle={true}
          onClose={handleModalClose}
        />
      )}
    </Modal>
  );
};
export default SRNReport;
