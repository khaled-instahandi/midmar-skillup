import React, { useState } from "react";

const CoachTestCard = ({
  question,
  options,
  type,
  selectedAnswers,
  setSelectedAnswers,
  currentAnswer,
  result,
  submitted,
  currentAnswerLabel,
  required,
}) => {
  const handleOptionSelect = (value) => {
    if (!submitted) {
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [question]: value,
      }));
    }
  };

  const isCorrect = selectedAnswers[question] === currentAnswer;
  const classAct = submitted
    ? isCorrect
      ? "is-current-answer"
      : "is-incurrent-answer"
    : "white"; // Background color logic
  const textQuestion = submitted
    ? isCorrect
      ? "text-qeustion-current"
      : "text-qeustion-incurrent"
    : "white"; // Background color logic

  return (
    <div className="test-card">
      <p className={`${type === "radio" && textQuestion}`}>
        {" "}
        {question}
        {required && <span className="required-mark">*</span>}
      </p>
      <div className="items-answer-test">
        <>
          {options.map((option, index) => (
            <div
              key={index}
              className={`item-answer ${
                option.id === selectedAnswers[question] && classAct
              }`}
            >
              {type === "radio" && (
                <>
                  <input
                    type="radio"
                    id={option.id}
                    name={option.name}
                    value={option.value}
                    checked={selectedAnswers[question] === option.value}
                    onChange={() => handleOptionSelect(option.value)}
                    disabled={submitted} // Disable the input if form is submitted
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                  <br />
                </>
              )}
              {type === "text" && (
                <>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                    }}
                    className="description-exam"
                    id={option.id}
                    name={option.name}
                    placeholder={option.placeholder}
                    value={selectedAnswers[question] || ""}
                    onChange={(e) => handleOptionSelect(e.target.value)}
                    readOnly={submitted} // Make the input read-only if form is submitted
                  />
                </>
              )}
              {type === "range" && (
                <>
                  <div className="range-no">
                    <div className="range-label">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                    <input
                      type="range"
                      style={{ width: "50%" }}
                      className="mt-8"
                      id={option.id}
                      name={option.name}
                      min={"1"}
                      max={"5"}
                      step={"1"}
                      value={selectedAnswers[question] || "1"}
                      onChange={(e) => handleOptionSelect(e.target.value)}
                      readOnly={submitted} // Make the input read-only if form is submitted
                    />
                  </div>
                </>
              )}
              {type === "radio-inline" && (
                <>
                  <div className="range-no">
                    <div className="range-countainer-test">
                      <div
                        className="range-label"
                        style={{
                          padding: " 0rem 0.5rem",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>

                      <div className="range-label">
                        <input
                          type="radio"
                          id={option.id}
                          name={option.name}
                          value={option.value}
                          checked={selectedAnswers[question] === option.value}
                          onChange={() => handleOptionSelect(option.value)}
                          disabled={submitted} // Disable the input if form is submitted
                        />
                        <input
                          type="radio"
                          id={option.id}
                          name={option.name}
                          value={option.value}
                          checked={selectedAnswers[question] === option.value}
                          onChange={() => handleOptionSelect(option.value)}
                          disabled={submitted} // Disable the input if form is submitted
                        />
                        <input
                          type="radio"
                          id={option.id}
                          name={option.name}
                          value={option.value}
                          checked={selectedAnswers[question] === option.value}
                          onChange={() => handleOptionSelect(option.value)}
                          disabled={submitted} // Disable the input if form is submitted
                        />
                        <input
                          type="radio"
                          id={option.id}
                          name={option.name}
                          value={option.value}
                          checked={selectedAnswers[question] === option.value}
                          onChange={() => handleOptionSelect(option.value)}
                          disabled={submitted} // Disable the input if form is submitted
                        />
                        <input
                          type="radio"
                          id={option.id}
                          name={option.name}
                          value={option.value}
                          checked={selectedAnswers[question] === option.value}
                          onChange={() => handleOptionSelect(option.value)}
                          disabled={submitted} // Disable the input if form is submitted
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
          {submitted && !isCorrect && type === "radio" && (
            <>
              <p>الإجابة الصحيحة:</p>
              <div className="item-answer cuurent-answer-show">
                <input
                  type="radio"
                  value={currentAnswer}
                  // disabled={submitted}
                  className="checled-answer-test"
                  checked
                />
                <label htmlFor="d">{currentAnswerLabel}</label>
                <br />
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default CoachTestCard;
