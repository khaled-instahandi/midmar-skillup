import React, { useState } from "react";
import infoCircle from "../../images/info-circle2.svg";

import { FaAlignJustify } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import NotificationsDropdown from "../NotificationsDropdown/NotificationsDropdown";
import UserProfile from "../UserProfile/UserProfile";
import Button from "../../elements/Buttons/Button";
import starIcon from "../../images/VectorstartIcon.png";
import bookIcon from "../../images/archive-book.svg";
import Pretestinstructions from "../../pages/Apprentice/Activities/Pretestinstructions";
import AlertMessage from "../../elements/AlertMessage/AlertMessage";
import Posttest from "../../pages/Apprentice/Posttest/Posttest";
import checkedInfo from "../../images/checked 1.svg";
import TrainingEvaluation from "../../pages/Apprentice/TrainingEvaluation/TrainingEvaluation";

const Navbar = ({ toggleSidebar, role }) => {
  const [isDetailsModalOpen, SetIsDetailsModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [showCongratulationsAlert, setShowCongratulationsAlert] =
    useState(false);
  const [showhundelTrainingEvaluation, setShowhundelTrainingEvaluation] =
    useState(false);

  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [isTestModalOpen, SetIsTestModalOpen] = useState(false);
  const handleSaveTestProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const handleModalClose = () => {
    SetIsDetailsModalOpen(false);
    setShowAlertConfirm(false);
    SetIsTestModalOpen(false);
    setShowCongratulationsAlert(false);
    setShowhundelTrainingEvaluation(false);
  };
  const handleTest = () => {
    setShowAlertConfirm(false); // Show the AlertMessage
    SetIsTestModalOpen(true); // Close the Pretestinstructions modal
  };
  const handleAlertConfirmation = () => {
    SetIsDetailsModalOpen(false); // Close the Pretestinstructions modal
    setShowAlertConfirm(true); // Show the AlertMessage
  };
  const handleShowResult = () => {
    setShowCongratulationsAlert(false); // Close the Pretestinstructions modal
    SetIsTestModalOpen(true); // Show the AlertMessage
  };
  const hundelTrainingEvaluation = () => {
    setShowCongratulationsAlert(false); // Close the Pretestinstructions modal
    setShowhundelTrainingEvaluation(true); // Show the AlertMessage
  };
  const handleSaveDetailsedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  const handleSaveTrainingEvaluation = (editedData) => {
    console.log("Edited project data:", editedData);
    // handleModalClose();
  };
  // const role = "apprentice";
  const status = "b";
  // const status = 'a'

  return (
    <header className="navbar">
      <div className="navbar__section navbar__section--left">
        <div className="top-sidebar">
          <div className="navbar__logo">
            <img src={logo} alt="Logo" />
          </div>
          <FaAlignJustify className="navbar__icon" onClick={toggleSidebar} />
        </div>
        <div className="test-header-nav">
          {role === "apprentice" && status === "a" && (
            <>
              <Button
                label="تقييم تدريب الأوفيس"
                onClick={() => setShowhundelTrainingEvaluation(true)}
                className="button-login"
                fontSize={"1.25rem"}
                width={"auto"}
                height={"3rem"}
                iconPosition={"right"}
                Icon={starIcon}
              />
            </>
          )}
          {role === "apprentice" && status === "b" && (
            <>
              <Button
                label="الاختبار البعدي لتدريب الأوفيس"
                onClick={() => SetIsDetailsModalOpen(true)}
                className="button-login"
                fontSize={"1.25rem"}
                width={"auto"}
                height={"3rem"}
                iconPosition={"right"}
                Icon={bookIcon}
              />
            </>
          )}
        </div>
      </div>

      <div className="navbar__section navbar__section--right">
        <NotificationsDropdown />
        <UserProfile />
      </div>
      <Posttest
        width={"auto"}
        handleBtn={handleAlertConfirmation}
        height={"100%"}
        isOpen={isTestModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveTestProject}
        handleBtnTow={() => setShowCongratulationsAlert(true)}

        // hundelBtn={hundelshowCongratulationsAlert}
      />
      <TrainingEvaluation
        width={"auto"}
        // handleBtn={handleAlertConfirmation}
        height={"100%"}
        isOpen={showhundelTrainingEvaluation}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveTrainingEvaluation}
        // handleBtnTow={() => setShowCongratulationsAlert(true)}

        // hundelBtn={hundelshowCongratulationsAlert}
      />
      <Pretestinstructions
        instructions={[
          "قبل بدء الاختبار، تأكد من أنك في مكان هادئ وخالٍ من الانشغالات لضمان تركيزك الكامل.",
          "استخدم متصفح الويب الذي تفضله وتأكد من تحديثه لأحدث الإصدارات لتفادي أي مشاكل تقنية.",
          "اطلع على جميع التعليمات بعناية قبل بدء الاختبار، بما في ذلك عدد الأسئلة، والزمن المتاح للإجابة، وأي تفاصيل أخرى هامة.",
          "استعد للإجابة على الأسئلة بشكل واضح ودقيق، وتأكد من فهم كل سؤال قبل الإجابة.",
          "يرجى ملاحظة أنه لا يمكن الرجوع للأسئلة السابقة بعد الانتقال للأمام، لذا قم بالرد بحسب فهمك وتقديرك.",
        ]}
        headerText={"تعليمات الاختبار البعدي"}
        width={"auto"}
        handleBtn={handleAlertConfirmation}
        height={"100%"}
        isOpen={isDetailsModalOpen}
        onClose={handleModalClose}
        projectData={selectedProjectData}
        onSave={handleSaveDetailsedProject}
      />
      {showAlertConfirm && (
        <AlertMessage
          OnClickBtnTow={handleTest}
          closeButton={true}
          lableButtonOne={"Cancel"}
          lableButtonTow={"الاختبار البعدي"}
          btnOneActive={false}
          buttomTowActive={true}
          headerText={"تنبيه !!"}
          logo={infoCircle}
          ButtonClassTow={"button-exam"}
          buttonClassFirst={"button-cancel"}
          buttomText={
            "يرجى ملاحظة أنه يجب عليك إجراء الاختبار البعدي في غضون 24 ساعة، يرجى النقر على الزر أدناه لبدء الاختبار البعدي."
          }
          buttomTextMiddle={true}
          onClose={handleModalClose}
        />
      )}
      {showCongratulationsAlert && (
        <AlertMessage
          OnClickBtnTow={handleShowResult}
          datatable={true}
          // headerTextClass="test-alert-header"
          isMark
          btnThreeActive
          hundelBtnThree={hundelTrainingEvaluation}
          mark={"95 / 100"}
          widthBtnTow={"50%"}
          closeButton={true}
          lableButtonOne={"Cancel"}
          lableButtonTow={"رؤية الإجابات الصحيحة والخاطئة"}
          btnOneActive={false}
          buttomTowActive={true}
          headerText={"تم استلام اختبارك بنجاح!"}
          logo={checkedInfo}
          ButtonClassTow={"button-exam"}
          buttonClassFirst={"button-cancel"}
          buttomText={
            "شكرًا لإكمالك للاختبار القبلي. سنقوم بمراجعة إجاباتك وتقديم التقييم في أقرب وقت ممكن. يرجى مراجعة البريد الإلكتروني الذي قدمته أثناء التسجيل للحصول على نتائج الاختبار ومزيد من التعليمات."
          }
          buttomTextMiddle={true}
          onClose={handleModalClose}
        />
      )}
    </header>
  );
};

export default Navbar;
