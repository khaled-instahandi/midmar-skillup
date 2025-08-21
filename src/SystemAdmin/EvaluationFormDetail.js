import React, { useState } from 'react';
import styles from './EvaluationFormDetail.module.css';
import { useParams } from 'react-router-dom';
import Dropdown from '../elements/Dropdown/Dropdown';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BiCopy, BiTrash } from 'react-icons/bi';
import { MdDragIndicator } from 'react-icons/md';

const initialQuestions = [
    {
        id: 1,
        title: 'Training Materials Management Evaluation (Trainees)',
        type: 'star',
        required: true,
        arabic: '',
        english: '',
    },
    {
        id: 2,
        title: 'Instructor Evaluation (Trainees)',
        type: 'star',
        required: true,
        arabic: '',
        english: '',
    },
    {
        id: 3,
        title: 'Accountability Evaluation',
        type: 'yesno',
        required: true,
        arabic: '',
        english: '',
    },
    {
        id: 4,
        title: 'Text Questions',
        type: 'text',
        required: true,
        arabic: '',
        english: '',
    },
];

export default function EvaluationFormDetail() {
    const { type, subtype } = useParams();
    const [questions, setQuestions] = useState(initialQuestions);
    const [selectedType, setSelectedType] = useState('');

    // Handle drag and drop reordering
    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(questions);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setQuestions(items);
    };

    // Handle question duplication
    const handleDuplicate = (questionId) => {
        const questionToDuplicate = questions.find(q => q.id === questionId);
        if (!questionToDuplicate) return;

        const newQuestion = {
            ...questionToDuplicate,
            id: Math.max(...questions.map(q => q.id)) + 1,
            arabic: questionToDuplicate.arabic,
            english: questionToDuplicate.english,
        };

        setQuestions([...questions, newQuestion]);
    };

    const handleInputChange = (id, field, value) => {
        setQuestions((prev) =>
            prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
        );
    };

    const handleAddQuestion = () => {
        if (!selectedType) return;

        // Determine the question type based on the selected value
        let questionType = 'text'; // default type
        if (['Training Materials Management Evaluation (Trainees)', 'Instructor Evaluation (Trainees)'].includes(selectedType)) {
            questionType = 'star';
        } else if (selectedType === 'Accountability Evaluation') {
            questionType = 'yesno';
        }

        const newQuestion = {
            id: questions.length + 1,
            title: selectedType,
            type: questionType,
            required: true,
            arabic: '',
            english: '',
        };

        setQuestions([...questions, newQuestion]);
        setSelectedType('');
    };

    return (
        <div className={styles.detailContainer}>
            <div className={styles.headerTitle}>
                <h2 className={styles.title}>
                    {`${type?.replace(/-/g, ' ')} Evaluation (${subtype?.replace(/-/g, ' ')})`}
                </h2>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="questions">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {questions.map((q, index) => (
                                <Draggable key={q.id} draggableId={q.id.toString()} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            className={styles.questionCard}
                                        >
                                            <div className={styles.questionHeader}>
                                                <div className={styles.dragHandle} {...provided.dragHandleProps}>
                                                    <MdDragIndicator />
                                                </div>
                                                <div className={styles.questionTitle}>{q.title}</div>
                                                <div className={styles.cardActions}>
                                                    <button
                                                        className={styles.actionBtn}
                                                        onClick={() => handleDuplicate(q.id)}
                                                        title="Duplicate"
                                                    >
                                                        <BiCopy />
                                                    </button>
                                                    <button
                                                        className={styles.actionBtn}
                                                        onClick={() => setQuestions(questions.filter(que => que.id !== q.id))}
                                                        title="Delete"
                                                    >
                                                        <BiTrash />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className={styles.inputGroup}>
                                                <label>Arabic (required)</label>
                                                <textarea
                                                    className={styles.textarea}
                                                    value={q.arabic}
                                                    onChange={(e) => handleInputChange(q.id, 'arabic', e.target.value)}
                                                    required
                                                    placeholder="أدخل النص بالعربية"
                                                />
                                            </div>

                                            <div className={styles.inputGroup}>
                                                <label>English (optional)</label>
                                                <textarea
                                                    className={styles.textarea}
                                                    value={q.english}
                                                    onChange={(e) => handleInputChange(q.id, 'english', e.target.value)}
                                                    placeholder="Enter text in English"
                                                />
                                            </div>

                                            <div className={styles.questionShape}>
                                                {q.type === 'star' && (
                                                    <div className={styles.starRating}>
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <span key={star} className={styles.star}>★</span>
                                                        ))}
                                                    </div>
                                                )}
                                                {q.type === 'yesno' && (
                                                    <div className={styles.yesNoGroup}>
                                                        <label><input type="radio" name={`yesno-${q.id}`} /> Yes</label>
                                                        <label><input type="radio" name={`yesno-${q.id}`} /> No</label>
                                                    </div>
                                                )}
                                                {q.type === 'text' && <div className={styles.textIndicator}>Text Input</div>}
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

            <div className={styles.addQuestionSection}>
                <div className={styles.selectWrapper}>
                    <Dropdown
                        customClass="my-2"
                        name="questionType"
                        options={[
                            "Training Materials Management Evaluation (Trainees)",
                            "Instructor Evaluation (Trainees)",
                            "Training Environment Evaluation (Trainees)",
                            "Training Satisfaction Evaluation (Trainees)",
                            "Accountability Evaluation",
                            "Text Questions"
                        ]}
                        placeHolder="Select"
                        onChange={(e) => setSelectedType(e.target.value)}
                        value={selectedType}
                    />
                </div>
                <button className={styles.addBtn} onClick={handleAddQuestion}>
                    Add Question +
                </button>
            </div>

            <div className={styles.saveRow}>
                <button className={styles.saveBtn}>Save</button>
            </div>
        </div>
    );
}