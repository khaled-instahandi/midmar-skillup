import React, { useState } from "react";
import Modal from "../../Modal";
import lineUnder from "../../../images/under-title-opration.svg";
import Button from "../../../elements/Buttons/Button";
import CoachTestCard from "./CoachTestCard";

const CoachExamResult = ({
  isOpen,
  onClose,
  projectData,
  onSave,
  height,
  handleBtn,
  width,
  handleBtnTow,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState({
    "ما هي لغة البرمجة التي تستخدم لتحديد هيكل الصفحات في الويب؟": "1",
    "ما هو   الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟":
      "2",
    "ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟":
      "1",
  });
  console.log(selectedAnswers);
  const [result, setResult] = useState({});
  console.log(result);
  const [submitted, setSubmitted] = useState(true);
  console.log(submitted);

  if (!isOpen) return null;

  const testData = [
    {
      question: "ما هي لغة البرمجة التي تستخدم لتحديد هيكل الصفحات في الويب؟",
      options: [
        { id: "1", name: "q1", value: "1", label: "HTML" },
        { id: "2", name: "q1", value: "2", label: "CSS" },
        { id: "3", name: "q1", value: "3", label: "JavaScript" },
      ],
      type: "radio",
      currentAnswer: "1",
    },
    {
      question:
        "ما هو   الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟",
      options: [
        {
          id: "1",
          name: "q2",
          value: "1",
          label: "كل ما يتعلق بالمرئيات من عناصر ورسومات وأيقونات وألوان.",
        },
        {
          id: "2",
          name: "q2",
          value: "2",
          label: "الشعور النهائي الذي يحصل عليه المستخدم من تجربة منتج ما.",
        },
        {
          id: "3",
          name: "q2",
          value: "3",
          label: "إيجاد حلول للمشاكل التي تتمحور حول المستخدم.",
        },
      ],
      type: "radio",
      currentAnswer: "1",
    },
  ];

  const handleFinishTest = (e) => {
    e.preventDefault();
    const newResult = {};
    testData.forEach((test) => {
      const selectedAnswer = selectedAnswers[test.question];
      const isCorrect = selectedAnswer === test.currentAnswer;
      newResult[test.question] = isCorrect;
    });
    setResult(newResult);
    setSubmitted(true);
    handleBtnTow(true);
  };

  return (
    <Modal
      onClose={onClose}
      height={"100%"}
      width={"100%"}
      maxWidth={"unset"}
      scale={"0.9"}
    >
      <h2 className="header-text-edit-project">ورقة إجابة الاختبار البعدي</h2>
      <img src={lineUnder} alt="" />

      <div className="header-exam-result-values">
        <p>
          الإجابات الصحيحة: <span>7/10</span>
        </p>
        <p>
          العلامة المحصلة: <span>65/100</span>
        </p>
      </div>
      <form onSubmit={handleFinishTest} className="add-sub-activity">
        {testData.map((test, index) => (
          <CoachTestCard
            key={index}
            currentAnswerLabel={
              test.options.find((option) => option.id === test.currentAnswer)
                ?.label || ""
            }
            question={test.question}
            options={test.options}
            type={test.type}
            selectedAnswers={selectedAnswers}
            setSelectedAnswers={setSelectedAnswers}
            currentAnswer={test.currentAnswer}
            result={result[test.question]}
            submitted={submitted}
            required={true}
          />
        ))}
        <Button
          typeBtn={"submit"}
          label="إنهاء الاختبار"
          className="button-login mt-5 mb-5"
          fontSize={"1.5rem"}
          width={"100%"}
          height={"auto"}
        />
      </form>
    </Modal>
  );
};

export default CoachExamResult;
