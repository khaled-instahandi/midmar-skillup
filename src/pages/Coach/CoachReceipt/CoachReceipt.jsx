import React, { useState } from "react";
import { ReactComponent as Logo } from "../../../images/logo-a.svg";
// import './SRNReport.css'
import verify from "../../../images/verify2.svg";
import AlertMessage from "../../../elements/AlertMessage/AlertMessage";

import Button from "../../../elements/Buttons/Button";
import ReasonofReject from "src/pages/Coordinator/TrainingSessions/SRNReport/ReasonofReject";
import Modal from "src/pages/Modal";
// import ReasonofReject from "./ReasonofReject";
function CoachReceipt() {
  //   const [formData, setFormData] = useState(projectData);

  

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [showAlertDelete, setShowAlertDelete] = useState(false);

  const handleModalClose = () => {
    setIsAddModalOpen(false);
    // onClose(true);
  };
  const handleSaveAddedProject = (editedData) => {
    console.log("Edited project data:", editedData);
    handleModalClose();
  };
//   if (!isOpen) return null;

  return (
      <div className="activity-page">
        <section style={{ width: "100%" }}>
          <table className="request-details" style={{ width: "100%" }}>
            <tbody>
              <tr className="request-row">
                <th>اسم المشروع</th>
                <td>تصميم وبرمجة مواقع الويب</td>
                <th>رمز المشروع</th>
                <td>SRN-12345</td>
              </tr>
              <tr className="request-row">
                <th>اسم المتلقي</th>
                <td>خالد الاحمد</td>
                <th>رمز الميزانية</th>
                <td>SRN-12345</td>
              </tr>
              <tr className="request-row">
                <th>وصف مختصر للخدمة</th>
                <td>وصف مختصر للخدمة</td>
                <th>منصب المتلقي</th>
                <td>مدرب</td>
              </tr>
              <tr className="request-row">
                <th>مدة الخدمة</th>
                <td>6 أشهر</td>
                <th>اسم مقدم الخدمة</th>
                <td>خالد الاحمد</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="objectives-outcomes">
          <h2 style={{ borderBottom: "2px #838383 solid" }}>
            بيان استلام الخدمة
          </h2>
          <p>
            مرحباً بكم جميعاً ، اسمي نور الدين الأحمد ، مطوّر ومصمم مواقع
            ويب أعمل في شركة الحياة الذكية ، لديّ خبرة عمل تتجاوز العشر سنوات ،
            أحب عملي كثيراً ، وأسعى دائماً لتطوير مهاراتي أنا قادر على التعامل
            مع مهام متعددة بشكل يومي. أستخدم المنهج الابتكاري لحل المشاكل. أنا
            شخص يعتمد عليه في إدارة الوقت. أنا نشيط دائما و متحمس لتعلم مهارات
            جديدة. أمتلكُ الخبرة في العمل سواء الفردي أو العمل عضوًا في فريق.
            أنا مرن في وقتي كوني قادر على العمل في المساء و في إجازة الأسبوع.
            أعمل بجد و عادة أكون آخر من يخرج من المكتب مساء.
          </p>
        </section>
        <section className="objectives-outcomes">
          <h2 style={{ borderBottom: "2px #838383 solid" }}>توضيحات</h2>
          <p>
            أؤكد أن الخدمات المذكورة في العقد/الاختصاصات قد تم تلقيها على النحو
            المستهدف.
          </p>
        </section>
        <section className="test-result">
          <div className="sgin-rejects">
            <div className="reciver-name">
              <h6> اسم المستلم والتاريخ والتوقيع</h6>
              <div className="btn-signatures">
                <Button
                  width={"40%"}
                  label="توقيع"
                  className="sign-button"
                  height={"2.5REM"}
                  onClick={() => setShowAlertDelete(true)}
                />
                <Button
                  width={"40%"}
                  label="رفض"
                  className="reject-button"
                  height={"2.5REM"}
                  onClick={() => setIsAddModalOpen(true)}
                />
              </div>
            </div>
            <div className="manager-name">
              <h6>اسم المدير المباشر والتاريخ والتوقيع</h6>
              <div className="btn-signatures">
                <Button
                  width={"40%"}
                  label="توقيع"
                  className="sign-button"
                  height={"2.5REM"}
                  onClick={() => setShowAlertDelete(true)}
                />
                <Button
                  width={"40%"}
                  label="رفض"
                  className="reject-button"
                  height={"2.5REM"}
                  onClick={() => setIsAddModalOpen(true)}
                />
              </div>
            </div>
          </div>
        </section>
        <ReasonofReject
          isOpen={isAddModalOpen}
          onClose={handleModalClose}
          projectData={selectedProjectData}
          onSave={handleSaveAddedProject}
        />
        {showAlertDelete && (
          <AlertMessage
            closeButton
            lableButtonOne={"Ok"}
            buttomTowActive={false}
            headerText={"انتهى!!"}
            logo={verify}
            buttonClassFirst={"button-delete-t"}
            buttomText={"لقد تم تقديم طلب الإجازة الخاص بك بنجاح، شكرًا لك"}
            buttomTextMiddle={true}
            onClose={handleModalClose}
          />
        )}
      </div>
  
  );
}

export default CoachReceipt;
