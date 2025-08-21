import React, { useState } from "react";
import Modal from "../../Modal";
import lineUnder from "../../../images/under-title-opration.svg";
import "./Posttest.css";
import Button from "../../../elements/Buttons/Button";
import TestCard from "./TestCard";

const Posttest = ({
  isOpen,
  onClose,
  projectData,
  onSave,
  height,
  handleBtn,
  width,
  handleBtnTow,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  console.log(selectedAnswers);
  const [result, setResult] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    {
      question:
        "ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟",
      options: [
        {
          id: "1",
          name: "q4",
          value: "1",
          label: "كل ما يتعلق بالمرئيات من عناصر ورسومات وأيقونات وألوان.",
        },
      ],
      type: "radio-inline",
      currentAnswer: "1",
    },
    {
      question:
        "ما هو الوسم الذي يُستخدم لتحديد أهم العناصر في صفحة الويب لمحركات البحث؟",
      options: [{ id: "1", name: "q3", placeholder: "أدخل إجابتك" }],
      type: "text",
      currentAnswer: "meta",
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

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <Modal
      onClose={onClose}
      height={"100%"}
      width={"100%"}
      maxWidth={"unset"}
      scale={"0.9"}
    >
      <h2 className="header-text-edit-project">
        اختبار بعدي لتدريب تصميم واجهة المستخدم وواجهة الاستخدام UI / UX
      </h2>
      <img src={lineUnder} alt="" />
      <form onSubmit={handleFinishTest} className="add-sub-activity">
        {testData.map((test, index) => (
          <TestCard
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
        {/* <Button
                    type="button"
                    label="إعادة تعيين الاختبار"
                    onClick={handleReset}
                    className="button-login mt-5 mb-5"
                    fontSize={'1.5rem'}
                    width={'100%'}
                    height={'auto'}
                /> */}
      </form>
    </Modal>
  );
};

export default Posttest;
