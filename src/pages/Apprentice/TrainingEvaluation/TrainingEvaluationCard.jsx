import React, { useState } from 'react';

const TrainingEvaluationCard = ({ question, options, type, selectedAnswers, setSelectedAnswers, currentAnswer, result, submitted, currentAnswerLabel, required }) => {
    const handleOptionSelect = (value) => {
        if (!submitted) {
            setSelectedAnswers((prevAnswers) => ({
                ...prevAnswers,
                [question]: value
            }));
        }
    };

    const isCorrect = selectedAnswers[question] === currentAnswer;
    const classAct = submitted ? (isCorrect ? 'is-current-answer' : 'is-incurrent-answer') : 'white'; // Background color logic
    const textQuestion = submitted ? (isCorrect ? 'text-qeustion-current' : 'text-qeustion-incurrent') : 'white'; // Background color logic

    return (
        <>
            {type === "radio-answer" ? "" : <>
                <p className={`question-training-evaluation-t `}>
                    {question}
                    {required && <span className="required-mark">*</span>}
                    {type === "radio-answer" ? "" : <>

                        <span className="circle-divider"></span>
                    </>}


                </p>
            </>}
            <div className={`items-answer-test ${type === "radio-answer" && 'd-flex'}`}>
                <>
                    {type === "radio-answer" ? <>
                        <p className={`question-training-evaluation-t `} style={{ width: "65%" }}>
                            {question}
                            {required && <span className="required-mark">*</span>}
                            {type === "radio-answer" ? "" : <>

                                <span className="circle-divider"></span>

                            </>}


                        </p>
                    </> : ""}
                    {options.map((option, index) => (
                        <div key={index} className={`item-answer`}>
                            {type === 'radio-answer' && (
                                <>
                                    {option.name === 'q1' && index === 0 && (
                                        <>
                                            <label className='befor-yse' htmlFor={option.id}></label>
                                            <input
                                                type="radio"
                                                id={option.id}
                                                name={option.name}
                                                value={option.value}
                                            // checked={selectedAnswers[question] === option.value}
                                            // onChange={() => handleOptionSelect(option.value)}
                                            // disabled={submitted} // Disable the input if form is submitted
                                            />
                                        </>
                                    )}
                                    {option.name === 'q1' && index === options.length - 1 && (
                                        <>
                                            <input
                                                type="radio"
                                                id={option.id}
                                                name={option.name}
                                                value={option.value}
                                            // checked={selectedAnswers[question] === option.value}
                                            // onChange={() => handleOptionSelect(option.value)}
                                            // disabled={submitted} // Disable the input if form is submitted
                                            />
                                            <label className='after-no' htmlFor={option.id}></label>
                                        </>
                                    )}
                                    {option.name !== 'q1' && (
                                        <>
                                            <input
                                                type="radio"
                                                id={option.id}
                                                name={option.name}
                                                value={option.value}
                                            // checked={selectedAnswers[question] === option.value}
                                            // onChange={() => handleOptionSelect(option.value)}
                                            // disabled={submitted} // Disable the input if form is submitted
                                            />
                                            <label htmlFor={option.id}>{option.label}</label>
                                        </>
                                    )}
                                </>
                            )}
                            {type === "text" && (
                                <>
                                    <input
                                        type="text"
                                        style={{
                                            width: '100%'

                                        }}
                                        className='description-exam'
                                        id={option.id}
                                        name={option.name}
                                        placeholder={option.placeholder}
                                        // value={selectedAnswers[question] || ''}
                                        // onChange={(e) => handleOptionSelect(e.target.value)}
                                        // readOnly={submitted} // Make the input read-only if form is submitted
                                    />
                                </>
                            )}
                            {type === 'range' && (
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
                                            style={{ width: '50%' }}
                                            className='mt-8'
                                            id={option.id}
                                            name={option.name}
                                            min={'1'}
                                            max={'5'}
                                            step={'1'}
                                            // value={selectedAnswers[question] || '1'}
                                            // onChange={(e) => handleOptionSelect(e.target.value)}
                                            // readOnly={submitted} // Make the input read-only if form is submitted
                                        />
                                    </div>
                                </>
                            )}
                            {type === 'radio-inline' && (
                                <>
                                    <div className="range-no">

                                        <div className="range-countainer-test-a">
                                            <div className="range-label" style={{ padding: ' 0rem 0.5rem', marginBottom: '1.5rem' }}>
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
                                                // checked={selectedAnswers[question] === option.value}
                                                // onChange={() => handleOptionSelect(option.value)}
                                                // disabled={submitted} // Disable the input if form is submitted
                                                />
                                                <input
                                                    type="radio"
                                                    id={option.id}
                                                    name={option.name}
                                                    value={option.value}
                                                // checked={selectedAnswers[question] === option.value}
                                                // onChange={() => handleOptionSelect(option.value)}
                                                // disabled={submitted} // Disable the input if form is submitted
                                                />
                                                <input
                                                    type="radio"
                                                    id={option.id}
                                                    name={option.name}
                                                    value={option.value}
                                                // checked={selectedAnswers[question] === option.value}
                                                // onChange={() => handleOptionSelect(option.value)}
                                                // disabled={submitted} // Disable the input if form is submitted
                                                />
                                                <input
                                                    type="radio"
                                                    id={option.id}
                                                    name={option.name}
                                                    value={option.value}
                                                // checked={selectedAnswers[question] === option.value}
                                                // onChange={() => handleOptionSelect(option.value)}
                                                // disabled={submitted} // Disable the input if form is submitted
                                                />
                                                <input
                                                    type="radio"
                                                    id={option.id}
                                                    name={option.name}
                                                    value={option.value}
                                                // checked={selectedAnswers[question] === option.value}
                                                // onChange={() => handleOptionSelect(option.value)}
                                                // disabled={submitted} // Disable the input if form is submitted
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </>

                            )}

                        </div>

                    ))}

                </>
            </div>
        </>
    );
};

export default TrainingEvaluationCard;
