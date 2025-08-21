import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import TagRight from "../../../images/tag-right.svg";
import TagLeft from "../../../images/tag-left.svg";

import "./TrainingHeader.css";
import WordIcon from "../../../images/word-icon.svg";
import awardIcon from "../../../images/award.svg";

import Button from "../../../elements/Buttons/Button";
import TraineesMarks from "../Exams/TraineesMarks/TraineesMarks";
import TrainingReport from "../TrainingSessions/TrainingReport/TrainingReport";
import SRNReport from "../TrainingSessions/SRNReport/SRNReport";
import CoachReceipt from "src/pages/Coach/CoachReceipt/CoachReceipt";
import CoachReceiptReport from "src/pages/Coach/CoachReceipt/CoachReceiptReport";
function TrainingHeader() {
  const location = useLocation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [isTrainingReportModalOpen, setIsTrainingReportModalOpen] =
    useState(false);
  const [isSRNReportModalOpen, setIsSRNReportModalOpen] = useState(false);
  const [isSReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const handleModalClose = () => {
    setIsAddModalOpen(false);
    setIsTrainingReportModalOpen(false);
    setIsSRNReportModalOpen(false);
    setIsReceiptModalOpen(false);
  };
  const handleSaveSRNReportProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const handleSaveReceiptProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
  const handleSaveTrainingReportProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const role = localStorage.getItem("role");
  return (
    <div className="project-header-home">
      <div className="project-header">
        {role === "coach" &&
        location.pathname.startsWith("/coach-dashboard") ? (
          <>
            <h4 className="training-name">اسم التدريب:</h4>
            <h1>
              <img src={TagLeft} alt="" />
              تصميم وبرمجة مواقع الويب
            </h1>
          </>
        ) : (
          <></>
        )}
        {location.pathname.endsWith("dashboard-coordinator") ? (
          <>
            {" "}
            <div className="project-details">
              <span className="project-document">
                Methodology:
                <span className="download-link">
                  <Link className="download-btn">Lectures </Link>
                </span>
              </span>
              <span className="donors">
                Location of training:<span className="value-p"> online</span>
              </span>
              <span className="project-code">
                status:<span className="value-p"> continual</span>
              </span>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {location.pathname.endsWith("dashboard-coordinator") ? (
        <>
          <div className="project-header-right">
            <Button
              label="SRN Download"
              // onClick={() => setIsAddModalOpen(true)}
              className="button-snr"
              // Icon={WordIcon}
              // iconPosition={'left'}
              onClick={() => setIsSRNReportModalOpen(true)}
              width={"8.8125rem"}
              height={"3rem"}
              fontSize={"1.125rem"}
            />
            <Button
              label="Download Training Report"
              // onClick={() => setIsAddModalOpen(true)}
              onClick={() => setIsTrainingReportModalOpen(true)}
              className="button-add"
              Icon={WordIcon}
              iconPosition={"left"}
              width={"18.6875rem"}
              height={"3rem"}
              fontSize={"1.125rem"}
            />
          </div>
        </>
      ) : (
        ""
      )}
      {location.pathname.endsWith("dashboard-coordinator/exams") ? (
        <>
          <div className="project-header-right-t">
            <Button
              label="Trainees' marks"
              // onClick={() => setIsAddModalOpen(true)}
              className="button-add"
              Icon={awardIcon}
              iconPosition={"left"}
              onClick={() => setIsAddModalOpen(true)}
              width={"18.6875rem"}
              height={"3rem"}
              fontSize={"1.125rem"}
            />
          </div>
        </>
      ) : (
        ""
      )}
      {location.pathname.endsWith("/coach-dashboard/activities/receipt") ? (
        <>
          <div
            className="project-header-right"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              label="انقر هنا للطباعة"
              // onClick={() => setIsAddModalOpen(true)}
              className="button-snr"
              Icon={WordIcon}
              iconPosition={"right"}
              onClick={() => setIsReceiptModalOpen(true)}
              width={"auto"}
              height={"3rem"}
              fontSize={"1.125rem"}
            />
          </div>
        </>
      ) : (
        ""
      )}
      <TraineesMarks
        isOpen={isAddModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveAddedProject}
      />
      <TrainingReport
        isOpen={isTrainingReportModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveTrainingReportProject}
      />
      <SRNReport
        isOpen={isSRNReportModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveSRNReportProject}
      />
      <CoachReceiptReport
        isOpen={isSReceiptModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveReceiptProject}
      />
    </div>
  );
}

export default TrainingHeader;
