import React from 'react';
import Modal from '../../Modal';
import lineUnder from '../../../images/under-title-opration.svg';
import TestCard from '../Posttest/TestCard';
import './Test.css';
import Button from '../../../elements/Buttons/Button';
import TestCardA from './TestCardA';

const Test = ({ isOpen, onClose, projectData, onSave, height, handleBtn, width, hundelBtn }) => {
    if (!isOpen) return null;
    const testData = [
        {
            question: "ما هي لغة البرمجة التي تستخدم لتحديد هيكل الصفحات في الويب؟",
            options: [
                { id: '1', name: 'q1', value: '1', label: 'HTML' },
                { id: '2', name: 'q1', value: '2', label: 'CSS' },
                { id: '3', name: 'q1', value: '3', label: 'JavaScript' }
            ],
            type: 'radio',
            currentAnswer: '1'
        },
        {
            question: "ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟",
            options: [
                { id: '1', name: 'q2', value: '1', label: 'كل ما يتعلق بالمرئيات من عناصر ورسومات وأيقونات وألوان.' },
                { id: '2', name: 'q2', value: '2', label: 'الشعور النهائي الذي يحصل عليه المستخدم من تجربة منتج ما.' },
                { id: '3', name: 'q2', value: '3', label: 'إيجاد حلول للمشاكل التي تتمحور حول المستخدم.' }
            ],
            type: 'radio',
            currentAnswer: '1'
        },
        // Add other questions similarly
    ];
    return (
        <Modal onClose={onClose} height={'100%'} width={'100%'} maxWidth={'unset'} scale={'0.9'} >
            <h2 className='header-text-edit-project'>
                اختبار قبلي لتدريب تصميم واجهة المستخدم وواجهة الاستخدام UI / UX
            </h2>
            <img src={lineUnder} alt='' />
            <div className="add-sub-activity">
                <TestCardA
                    question="ما هي لغة البرمجة التي تستخدم لتحديد هيكل الصفحات في الويب؟"
                    options={[
                        { id: 'q1', value: 'HTML', label: 'HTML' },
                        { id: 'q1', value: 'CSS', label: 'CSS' },
                        { id: 'q1', value: 'JavaScript', label: 'JavaScript' }
                    ]}
                    type={'radio'}

                />
                <TestCardA
                    question="ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟"
                    options={[
                        { id: 'q2', value: 'HTML', label: 'كل ما يتعلق بالمرئيات من عناصر ورسومات وأيقونات وألوان.' },
                        { id: 'q2', value: 'CSS', label: 'الشعور النهائي الذي يحصل عليه المستخدم من تجربة منتج ما.' },
                        { id: 'q2', value: 'JavaScript', label: 'إيجاد حلول للمشاكل التي تتمحور حول المستخدم.' }
                    ]}
                    type={'radio'}
                />
                <TestCardA
                    question="ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟"
                    options={[
                        { id: 'q3', placeholder: 'أدخل إجابتك..' }
                    ]}
                    type={'text'}
                />
                <TestCardA
                    question="ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟"
                    options={[
                        { id: 'q4', name: 'q4' }
                    ]}
                    type={'range'}
                />
                <TestCardA
                    question="ما هو الاختصار الذي يُستخدم لوصف التصميم المتجاوب Responsive Design في تطوير الويب؟"
                    options={[
                        { id: 'q5', value: 'HTML', label: 'كل ما يتعلق بالمرئيات من عناصر ورسومات وأيقونات وألوان.' },
                        { id: 'q5', value: 'CSS', label: 'الشعور النهائي الذي يحصل عليه المستخدم من تجربة منتج ما.' },
                        { id: 'q5', value: 'JavaScript', label: 'إيجاد حلول للمشاكل التي تتمحور حول المستخدم.' }
                    ]}
                    type={'radio'}
                />
                <Button
                    label="إنهاء الاختبار"
                    onClick={() => hundelBtn()}
                    className="button-login mt-5 mb-5"
                    fontSize={'1.5rem'}
                    width={'100%'}
                    height={'auto'}
                />
            </div>
        </Modal>
    );
};

export default Test;
