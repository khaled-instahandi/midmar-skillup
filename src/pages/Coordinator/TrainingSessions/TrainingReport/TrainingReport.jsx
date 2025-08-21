import Modal from "../../../Modal";
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../../../images/logo-a.svg'
import closeIcon from '../../../../images/close-circle-red.svg'
import './TrainingReport.css'
const TrainingReport = ({ isOpen, onClose, projectData, onSave }) => {
    const [formData, setFormData] = useState(projectData);

    const [signatures, setSignatures] = useState([
        { id: 1, jobTitle: 'Direct Manager', userName: 'Admin user', privilege: 'Officer', signed: '8c986851a79fa66', signedAt: '12/14/2023' },
        { id: 2, jobTitle: 'Procurement Department', userName: 'Admin user', privilege: 'Officer', signed: 'Not appropriate', signedAt: '12/14/2023' },
        { id: 3, jobTitle: 'Accounting Department', userName: 'Admin user', privilege: 'Officer', signed: '5b68c986851a79fa66', signedAt: '12/14/2023' },
        { id: 4, jobTitle: 'Budget Holder', userName: 'Admin user', privilege: 'Officer', signed: '68c98685 1a79fa66', signedAt: '12/14/2023' },
    ]);
    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'100%'}  >
            <div className="print-page-container">
                <header className="print-header">
                    <div className="header-time">
                        <div className="time-heder-a">
                            8:48 PM 12/14/2023</div>
                        <div className="buttom-time">
                            Training Report
                        </div>
                    </div>
                    <div className="header-logo">
                        {/* <img src={logo} alt="" /> */}
                        <Logo />
                    </div>
                    <div className="header-section">Training Report</div>
                </header>

                <section style={{ width: '100%' }}>
                    <table className='request-details' style={{ width: '100%' }}>

                        <tbody>
                            <tr className='request-row'>
                                <th>Type</th>
                                <td>training</td>
                                <th>Method</th>
                                <td>Physical</td>
                            </tr>
                            <tr className='request-row'>
                                <th>Location</th>
                                <td>Aleppo</td>
                                <th>Trainees</th>
                                <td>33</td>
                            </tr>
                            <tr className='request-row'>
                                <th>Start Date</th>
                                <td>8 / Des / 2023</td>
                                <th>End Date</th>
                                <td>9 / Oct / 2023</td>
                            </tr>
                            <tr className='request-row'>
                                <th>Instructors</th>
                                <td>Manal Mazloum</td>
                                <th>Duration</th>
                                <td>6 days, 36 hours</td>
                            </tr>

                            <tr className='request-row'>
                                <th colSpan={1}>Description</th>
                                <td colSpan={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="objectives-outcomes">
                    <h2>Objectives & Outcomes:</h2>
                    <ul>
                        <li>Intellectual skills: With this type of learning outcome, the learner will understand concepts</li>
                        <li>Cognitive strategy: With this type of learning outcome, the learner will understand concepts</li>
                        <li>Verbal information: This type of learning outcome is when the learner is able to definitively state what they</li>
                        <li>Motor skills: This category is concerned with the physical ability to perform actions, achieving fluidity</li>
                        <li>Attitude: This is the internal state that reflects in the learner’s behavior. It is complex to quantify but can be shown</li>

                    </ul>
                </section>
                <section className="test-result">
                    <h2>Pre/Post Test Results</h2>
                    <table className='request-details' style={{ width: '100%' }}>
                        <thead>
                            <tr className='request-row'>
                                <th ></th>
                                <th >Pre</th>
                                <th>Post</th>
                                <th>Gain Percent</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>Count</td>
                                <td>13</td>
                                <td>11</td>
                                <td>14.00</td>

                            </tr>
                            <tr className='request-row'>
                                <td>Results Average</td>
                                <td>59</td>
                                <td>80</td>
                                <td>12.55%</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='request-details' style={{ width: '100%', marginTop: '1rem' }}>
                        <thead>
                            <tr className='request-row'>
                                <th ></th>
                                <th >Improved</th>
                                <th>Disimproved</th>
                                <th>Still</th>
                                <th>Total</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>Count</td>
                                <td>4</td>
                                <td>26</td>
                                <td>7</td>
                                <td>37</td>

                            </tr>

                        </tbody>
                    </table>
                </section>
                <section className="items-table" >
                    <h2>Evaluation Results</h2>
                    <div className="category-cources">
                        <h6>Course Management</h6>
                    </div>
                    <div className="progress-section" style={{ width: '40%', margin: '1rem 0' }}>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${70}%`, backgroundColor: '#158B7F' }}></div>
                        </div>
                        <span className="percentage" >  <p style={{ color: 'rgba(21, 139, 127, 1)' }}> {70}% </p> Average results</span>
                    </div>
                    <table className='request-details' style={{ width: '100%' }}>
                        <thead>
                            <tr className='request-row'>
                                <th >Question</th>
                                <th >Answers Count</th>
                                <th>Result Percent</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                        </tbody>
                    </table>

                    <div className="category-cources" style={{ marginTop: '2rem' }}>
                        <h6>Course Environment</h6>
                    </div>
                    <div className="progress-section" style={{ width: '40%', margin: '1rem 0' }}>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${50}%`, backgroundColor: '#158B7F' }}></div>
                        </div>
                        <span className="percentage" >  <p style={{ color: 'rgba(21, 139, 127, 1)' }}> {50}% </p> Average results</span>
                    </div>
                    <table className='request-details' style={{ width: '100%' }}>
                        <thead>
                            <tr className='request-row'>
                                <th >Question</th>
                                <th >Answers Count</th>
                                <th>Result Percent</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                        </tbody>
                    </table>
                </section>


                <section className="items-table" >
                    <h2>Instructors</h2>
                    <div className="category-cources">
                        <h6>Manal Mazloum</h6>
                    </div>
                    <div className="progress-section" style={{ width: '40%', margin: '1rem 0' }}>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${50}%`, backgroundColor: '#158B7F' }}></div>
                        </div>
                        <span className="percentage" >  <p style={{ color: 'rgba(21, 139, 127, 1)' }}> {50}% </p> Average results</span>
                    </div>
                    <table className='request-details' style={{ width: '100%' }}>
                        <thead>
                            <tr className='request-row'>
                                <th >Question</th>
                                <th >Answers Count</th>
                                <th>Result Percent</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                        </tbody>
                    </table>

                    <div className="category-cources" style={{ marginTop: '2rem' }}>
                        <h6>TrainingSatisfaction</h6>
                    </div>
                    <div className="progress-section" style={{ width: '40%', margin: '1rem 0' }}>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${98}%`, backgroundColor: '#158B7F' }}></div>
                        </div>
                        <span className="percentage" >  <p style={{ color: 'rgba(21, 139, 127, 1)' }}> {98}% </p> Average results</span>
                    </div>
                    <table className='request-details' style={{ width: '100%' }}>
                        <thead>
                            <tr className='request-row'>
                                <th >Question</th>
                                <th >Answers Count</th>
                                <th>Result Percent</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                            <tr className='request-row'>
                                <td>مدى كفاية المدة التي استغرقها التدريب</td>
                                <td>11</td>
                                <td>80.50%</td>

                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="items-table" >
                    <h2>Accountability</h2>

                    <table className='request-details' style={{ width: '100%' }}>
                        <thead>
                            <tr className='request-row'>
                                <th >Question</th>
                                <th >Yes </th>
                                <th> No</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className='request-row'>
                                <td>ما هي درجة التغيير التي تتوقع أن تحدثها في عملك بسبب خضوعك لهذا التدريب؟</td>
                                <td>5</td>
                                <td>8</td>

                            </tr>
                            <tr className='request-row'>
                                <td>ما هي درجة التغيير التي تتوقع أن تحدثها في عملك بسبب خضوعك لهذا التدريب؟</td>
                                <td>5</td>
                                <td>8</td>

                            </tr>
                        </tbody>
                    </table>

                </section>
                <section className="objectives-outcomes">
                    <h2>Recommendations</h2>
                    <ul dir="rtl" style={{ marginLeft: '0', marginRight: '2rem' }}>
                        <li>ما هي درجة التغيير التي تتوقع أن تحدثها في عملك بسبب خضوعك  لهذا التدريب؟</li>
                        <li>بشكل عام كيف تُقيّم تجربتك كمتدرب ضمن هذا التدريب؟</li>


                    </ul>
                </section>

            </div>
        </Modal>
    );

};
export default TrainingReport;