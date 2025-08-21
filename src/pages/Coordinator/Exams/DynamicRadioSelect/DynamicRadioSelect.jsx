import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './DynamicRadioSelect.css';
import { ReactComponent as RageIcon } from '../../../../images/drag-option.svg'
import { ReactComponent as RageUpIcon } from '../../../../images/drag-up.svg'
import { ReactComponent as DeleteAnswer } from '../../../../images/delete-answer.svg'
import copyIcon from '../../../../images/copy-c.svg'
import deleteIcon from '../../../../images/delete.svg'

import Button from '../../../../elements/Buttons/Button';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import Checkbox from '../../../../elements/Checkbox/Checkbox';
const DynamicRadioSelect = () => {
    const [questions, setQuestions] = useState([
        {
            id: 'q1',
            type: 'Radio Select',
            text: 'What is your job/profession?',
            options: [
                { id: 'a', text: 'I am a student.', isSelected: false },
                { id: 'b', text: 'I work in a bank.', isSelected: false },
            ],
            correctAnswer: 'a'
        },
        {
            id: 'q2',
            type: 'Text input', // Updated to Text input type
            text: 'What is your favorite color?',
            options: [],
            correctAnswer: ''
        }
    ]);

    const [randomize, setRandomize] = useState(true); // State for randomization checkbox

    const handleCheckboxChange = () => {
        setRandomize(!randomize); // Toggle randomize state
    };

    const [newOptionText, setNewOptionText] = useState('');
    const [newQuestionText, setNewQuestionText] = useState('');
    const [newQuestionType, setNewQuestionType] = useState('Radio Select'); // Default value updated
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

    const handleOptionChange = (questionId, selectedId) => {
        setQuestions(questions.map((question) => ({
            ...question,
            options: question.id === questionId ? question.options.map((option) => ({
                ...option,
                isSelected: option.id === selectedId,
            })) : question.options,
        })));
    };
    const handleDeleteOption = (questionId, optionId) => {
        setQuestions(questions.map((question) => ({
            ...question,
            options: question.id === questionId ? question.options.filter(option => option.id !== optionId) : question.options,
        })));
    };

    const handleCheckAnswer = (questionId) => {
        setCurrentQuestionIndex(questions.findIndex(question => question.id === questionId));
    };

    const handleSetCorrectAnswer = (questionId, optionId) => {
        const index = questions.findIndex(question => question.id === questionId);
        if (index !== -1) {
            setQuestions(questions.map((question, i) => ({
                ...question,
                correctAnswer: i === index ? optionId : question.correctAnswer
            })));
        }
        console.log(questions);
    };


    const handleAddOption = (questionId, newOptionText) => {
        const newOptionId = questionId + String.fromCharCode(97 + questions.find(q => q.id === questionId).options.length);
        setQuestions(questions.map((question) => ({
            ...question,
            options: question.id === questionId ? [...question.options, {
                id: newOptionId,
                text: newOptionText,
                isSelected: false,
            }] : question.options,
        })));
        setNewOptionText("");
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, {
            id: `q${questions.length + 1}`,
            type: newQuestionType,
            text: newQuestionText,
            options: [],
        }]);
        setNewQuestionText("");

    };

    const handleQuestionDragEnd = (result) => {
        const { source, destination, draggableId } = result;
        if (!destination) return;

        if (destination.droppableId === 'questions') {
            const sourceIndex = parseInt(source.index);
            const destinationIndex = parseInt(destination.index);
            const updatedQuestions = [...questions];
            const [removed] = updatedQuestions.splice(sourceIndex, 1);
            updatedQuestions.splice(destinationIndex, 0, removed);
            setQuestions(updatedQuestions);
        } else {
            const sourceQuestionId = source.droppableId;
            const optionId = draggableId;
            const sourceQuestion = questions.find(question => question.id === sourceQuestionId);
            const optionIndex = sourceQuestion.options.findIndex(option => option.id === optionId);
            const updatedOptions = [...sourceQuestion.options];
            const [movedOption] = updatedOptions.splice(optionIndex, 1);
            updatedOptions.splice(destination.index, 0, movedOption);
            const updatedQuestions = questions.map(question => {
                if (question.id === sourceQuestionId) {
                    return { ...question, options: updatedOptions };
                }
                return question;
            });
            setQuestions(updatedQuestions);
        }
    };

    return (
        <div className="dynamic-radio-select">
            <DragDropContext onDragEnd={handleQuestionDragEnd}>
                <Droppable droppableId="questions" direction="vertical" type="question">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {questions.map((question, index) => (
                                <Draggable key={question.id} draggableId={question.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className="question">
                                                <div className="drag-up">
                                                    <RageUpIcon />
                                                </div>
                                                <label className='question-label'>{question.text}</label>
                                                <Droppable droppableId={question.id} type="option">
                                                    {(provided) => (
                                                        <div ref={provided.innerRef} {...provided.droppableProps}>
                                                            {question.options.map((option, index) => (
                                                                <Draggable key={option.id} draggableId={option.id} index={index}>
                                                                    {(provided) => (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            <div className="option">
                                                                                <div className="prefix-lable-option">
                                                                                    <RageIcon />
                                                                                    {String.fromCharCode(65 + index)}
                                                                                </div>
                                                                                <input
                                                                                    hidden
                                                                                    type={question.type}
                                                                                    id={option.id}
                                                                                    name={question.id}
                                                                                    value={option.text}
                                                                                    checked={option.isSelected}
                                                                                    onChange={() => handleOptionChange(question.id, option.id)}
                                                                                />
                                                                                <label className='option-label' htmlFor={option.id}>
                                                                                    {option.text}
                                                                                    <div className="btn-opreation-answer">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            onChange={() => handleSetCorrectAnswer(question.id, option.id)}
                                                                                            checked={question.correctAnswer === option.id}
                                                                                        />
                                                                                        <DeleteAnswer onClick={() => handleDeleteOption(question.id, option.id)} />
                                                                                    </div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </Draggable>
                                                            ))}
                                                            {provided.placeholder}
                                                        </div>
                                                    )}
                                                </Droppable>
                                                {question.type === "Text input" &&
                                                    <div className="add-option-container-text">
                                                        <input type="text" style={{ width: "100%", fontSize: '1.25rem' }} className="title-exam" placeholder="Answer" onChange={(e) => setNewQuestionText(e.target.value)} />


                                                        {/* Hidden button for adding option */}
                                                        <button style={{ display: 'none' }} className='add-option-btn' onClick={() => handleAddOption(question.id, newOptionText)}>Add Option</button>
                                                    </div>
                                                }
                                                {question.type !== "Text input" &&
                                                    <div className="add-option-container">
                                                        <input type="text" placeholder="Enter new option text" onChange={(e) => setNewOptionText(e.target.value)} value={newOptionText} />
                                                        <button className='add-option-btn' onClick={() => handleAddOption(question.id, newOptionText)}>Add Option</button>
                                                    </div>
                                                }
                                                <div className="opration-option-select">
                                                    <label className="switch">
                                                        <input type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                    <span className='required-checkobk-label'>required</span>
                                                    <div className="line-optation"></div>
                                                    <Button
                                                        iconPosition={'left'}
                                                        Icon={copyIcon}
                                                    />
                                                    <Button
                                                        iconPosition={'left'}
                                                        Icon={deleteIcon}
                                                    />
                                                    <div className="type-question-dropdown">
                                                        <Dropdown
                                                            width={'20%'}
                                                            placeHolder={'select'}
                                                            value={question.type}
                                                            disabled
                                                            onChange={() => console.log("ef")}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className="add-question-conatiner">
                <div className="select-dropdown-question">
                    <input type="text" style={{ width: "60%", fontSize: '1.25rem' }} className="title-exam" placeholder="Enter new question text" onChange={(e) => setNewQuestionText(e.target.value)} value={newQuestionText} />
                    <Dropdown
                        width={'30%'}
                        placeHolder={'select'}
                        options={['Radio Select', 'Text input', 'Slider Select']}
                        onChange={(e) => setNewQuestionType(e.target.value)}
                        value={newQuestionType}
                    />
                </div>
                <Button
                    label="Add Question"
                    className="button-login mt-4"
                    width={'20%'}
                    height={'3rem'}
                    onClick={handleAddQuestion}
                />
            </div>
            <div className="buttom-exam-content">


                <Checkbox label="Randomize questions for trainees" onChange={() => handleCheckboxChange()} checked={randomize} />
                <Button
                    label="Save"
                    className="button-login mt-5"
                    width={'100%'}
                    height={'3rem'}
                    onClick={() => { console.log("subment") }}
                />
            </div>

        </div>
    );
};

export default DynamicRadioSelect;
