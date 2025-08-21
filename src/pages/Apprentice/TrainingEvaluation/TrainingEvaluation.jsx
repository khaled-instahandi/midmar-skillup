import React, { useState } from 'react';
import Modal from '../../Modal';
import lineUnder from '../../../images/under-title-opration.svg';
import Button from '../../../elements/Buttons/Button';
import TrainingEvaluationCard from './TrainingEvaluationCard';
import './TrainingEvaluation.css'
const TrainingEvaluation = ({ isOpen, onClose, projectData, onSave, height, handleBtn, width, handleBtnTow }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});

    if (!isOpen) return null;

    const testData = [{
        hederText: " تقييم إدارة التدريب",
        idHeaderText: 1
    },
    {
        question: "مدى موائمة التدريب مع احتياجاتك:",
        options: [
            { id: '1', name: 'q1', value: '1' }

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى كفاية الأنشطة العملية داخل التدريب:",
        options: [
            { id: '1', name: 'q2', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى كفاية المدة التي استغرقها التدريب:",
        options: [
            { id: '1', name: 'q3', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى سهولة فهم المادة التدريبية من حيث تسلسل الأفكار والمصطلحات:",
        options: [
            { id: '1', name: 'q4', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى العمق والتفاصيل التي قدمتها المادة التدريبية لفهم محاور التدريب كاملة:",
        options: [
            { id: '1', name: 'q5', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    ];


    const testDataTow = [{
        hederText: "تقييم بيئة التدريب",
        idHeaderText: 2
    },
    {
        question: "مدى موائمة التدريب مع احتياجاتك:",
        options: [
            { id: '1', name: 'q1', value: '1' }

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى كفاية الأنشطة العملية داخل التدريب:",
        options: [
            { id: '1', name: 'q2', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى كفاية المدة التي استغرقها التدريب:",
        options: [
            { id: '1', name: 'q3', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى سهولة فهم المادة التدريبية من حيث تسلسل الأفكار والمصطلحات:",
        options: [
            { id: '1', name: 'q4', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "مدى العمق والتفاصيل التي قدمتها المادة التدريبية لفهم محاور التدريب كاملة:",
        options: [
            { id: '1', name: 'q5', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    ];
    const testDataThree = [{
        hederText: "تقييم الرضا عن التدريب",
        idHeaderText: 3
    },
    {
        question: "ما هي درجة التغيير التي تتوقع أن تحدثها في عملك بسبب خضوعك لهذا التدريب:",
        options: [
            { id: '1', name: 'q1', value: '1' }

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "بشكل عام كيف تُقيّم تجربتك كمتدرب ضمن هذا التدريب:",
        options: [
            { id: '1', name: 'q2', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },

    ];
    const testDataFour = [{
        hederText: "تقييم المدربين",
        idHeaderText: 4,
        cuche: "عقيل البكور"
    },
    {
        question: "قدرة المدرب على إيصال المعلومات بطريقة واضحة ومفهومة: ",
        options: [
            { id: '1', name: 'q1', value: '1' }

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },
    {
        question: "قدرة المدرب على إدارة التدريب (إدارة الوقت، إدارة النقاشات والأسئلة...):",
        options: [
            { id: '1', name: 'q2', value: '1' },

        ],
        type: 'radio-inline',
        currentAnswer: '1'
    },

    ];
    const testDataFive = [{
        hederText: "أسئلة عامة",
        idHeaderText: 5
    },
    {
        question: "هل سبب حضورك للتدريب أي تضارب مع عملك؟",
        options: [
            { id: '1', name: 'q1', value: '1' },
            { id: '2', name: 'q1', value: '2' }


        ],
        type: 'radio-answer',
        currentAnswer: '1'
    },
    {
        question: "هل لديك معرفة بآليات الشكاوى في المشروع؟",
        options: [
            { id: '1', name: 'q2', value: '1' },
            { id: '2', name: 'q2', value: '2' },

        ],
        type: 'radio-answer',
        currentAnswer: '1'
    },
    {
        question: "هل تعرضت لأي أذى جسدي أو نفسي خلال التدريب",
        options: [
            { id: '1', name: 'q3', value: '1' },
            { id: '2', name: 'q3', value: '2' },

        ],
        type: 'radio-answer',
        currentAnswer: '1'
    },
    ];
    const testDataSix = [{
        hederText: "أسئلة سردية",
        idHeaderText: 6
    },
    {
        question: "ما هو الوسم الذي يُستخدم لتحديد أهم العناصر في صفحة الويب لمحركات البحث؟",
        options: [
            { id: '1', name: 'q1', placeholder: 'أدخل إجابتك' },

        ],
        type: 'text',
        currentAnswer: 'meta'
    },
    {
        question: "ما هي نقاط القوة التي وجدتها في التدريب؟",
        options: [
            { id: '1', name: 'q2', placeholder: 'أدخل إجابتك' },

        ],
        type: 'text',
        currentAnswer: 'meta'
    },
    {
        question: "في حال لديك ملاحظات تود إيصالها الى إدارة المشروع حول هذا التدريب يرجى كتابتها هنا وتتعهد إدارة المشروع أنها ستتعامل بمنتهى الجدية و السرية والحيادية مع هذه الملاحظات",
        options: [
            { id: '1', name: 'q3', placeholder: 'أدخل إجابتك' },

        ],
        type: 'text',
        currentAnswer: 'meta'
    },
    ];
    return (
        <Modal onClose={onClose} height={'100%'} width={'100%'} maxWidth={'unset'} scale={'0.9'} >
            <h2 className='header-text-edit-project'>
                تقييم تدريب تصميم واجهات المستخدم
            </h2>
            <img src={lineUnder} alt='' />
            <form className="add-sub-activity">
                <div className="test-card">
                    <h3 className='header-text-training-evaluation'>{testData[0].idHeaderText} - {testData[0].hederText}</h3>
                    {testData.slice(1).map((test, index) => (
                        <>

                            <TrainingEvaluationCard
                                key={index + 1}
                                question={test.question}
                                options={test.options}
                                type={test.type}
                                selectedAnswers={selectedAnswers}
                            // required={true}
                            />
                            {index !== testData.length - 2 && <div className='divider'></div>}
                        </>
                    ))}
                </div>
                <div className="test-card">
                    <h3 className='header-text-training-evaluation'>{testDataTow[0].idHeaderText} - {testDataTow[0].hederText}</h3>
                    {testDataTow.slice(1).map((test, index) => (
                        <>
                            <TrainingEvaluationCard
                                key={index + 1}
                                question={test.question}
                                options={test.options}
                                type={test.type}
                                selectedAnswers={selectedAnswers}
                            // required={true}
                            />
                            {index !== testDataTow.length - 2 && <div className='divider'></div>}
                        </>
                    ))}
                </div>
                <div className="test-card">
                    <h3 className='header-text-training-evaluation'>{testDataThree[0].idHeaderText} - {testDataThree[0].hederText}</h3>
                    {testDataThree.slice(1).map((test, index) => (
                        <>
                            <TrainingEvaluationCard
                                key={index + 1}
                                question={test.question}
                                options={test.options}
                                type={test.type}
                                selectedAnswers={selectedAnswers}
                            // required={true}
                            />
                            {index !== testDataThree.length - 2 && <div className='divider'></div>}
                        </>
                    ))}
                </div>
                <div className="test-card">
                    <h3 className='header-text-training-evaluation'>{testDataFour[0].idHeaderText} - {testDataFour[0].hederText}


                        {testDataFour[0].cuche && <div className="cuche-box-header">
                            المدرب : {testDataFour[0].cuche}
                        </div>}

                    </h3>

                    {testDataFour.slice(1).map((test, index) => (
                        <>
                            <TrainingEvaluationCard
                                key={index + 1}
                                question={test.question}
                                options={test.options}
                                type={test.type}
                                selectedAnswers={selectedAnswers}
                            // required={true}
                            />
                            {index !== testDataFour.length - 2 && <div className='divider'></div>}
                        </>
                    ))}
                </div>
                <div className="test-card">
                    <h3 className='header-text-training-evaluation'>{testDataFive[0].idHeaderText} - {testDataFive[0].hederText}</h3>

                    {testDataFive.slice(1).map((test, index) => (

                        <>
                            <TrainingEvaluationCard
                                key={index + 1}
                                question={test.question}
                                options={test.options}
                                type={test.type}
                                selectedAnswers={selectedAnswers}
                            // required={true}
                            />
                            {index !== testDataFive.length - 2 && <div className='divider'></div>}
                        </>
                    ))}
                </div>
                <div className="test-card">
                    <h3 className='header-text-training-evaluation'>{testDataSix[0].idHeaderText} - {testDataSix[0].hederText}</h3>

                    {testDataSix.slice(1).map((test, index) => (

                        <>
                            <TrainingEvaluationCard
                                key={index + 1}
                                question={test.question}
                                options={test.options}
                                type={test.type}
                                selectedAnswers={selectedAnswers}
                            // required={true}
                            />
                            {index !== testDataSix.length - 2 && <div className='divider'></div>}
                        </>
                    ))}
                </div>
                <Button
                    typeBtn={'submit'}
                    label="إنهاء الاختبار"
                    className="button-login mt-5 mb-5"
                    fontSize={'1.5rem'}
                    width={'100%'}
                    height={'auto'}
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

export default TrainingEvaluation;
