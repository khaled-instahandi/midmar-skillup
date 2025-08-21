import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import DatePicker from '../../../../elements/DatePicker/DatePicker';
import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
import TimePicker from '../../../../elements/TimePicker/TimePicker';
import './AttendingTrainees.css'
import { ReactComponent as CloseIcon } from '../../../../images/close-tag.svg'
import Checkbox from '../../../../elements/Checkbox/Checkbox';
const AttendingTrainees = ({ isOpen, onClose, projectData, onSave, required, label }) => {
    const initialTrainees = [
        { id: 1, fullNameEnglish: 'Mohammed Nour Badawi', fullNameArabic: 'محمد نور بدوي', type: 'User', attended: true },
        { id: 2, fullNameEnglish: 'Walid Alahmad', fullNameArabic: 'وليد الأحمد', type: 'User', attended: false },
        { id: 3, fullNameEnglish: 'Walid Alahmad', fullNameArabic: 'وليد الأحمد', type: 'User', attended: false },
        { id: 4, fullNameEnglish: 'Walid Alahmad', fullNameArabic: 'وليد الأحمد', type: 'User', attended: false },
        { id: 5, fullNameEnglish: 'Mohammed Nour Badawi', fullNameArabic: 'محمد نور بدوي', type: 'User', attended: true },
        { id: 6, fullNameEnglish: 'Walid Alahmad', fullNameArabic: 'وليد الأحمد', type: 'User', attended: false },
        { id: 7, fullNameEnglish: 'Walid Alahmad', fullNameArabic: 'وليد الأحمد', type: 'User', attended: false },
        { id: 8, fullNameEnglish: 'Walid Alahmad', fullNameArabic: 'وليد الأحمد', type: 'User', attended: false },

        // ... more trainees
    ];
    const [searchQuery, setSearchQuery] = useState('');

    const [trainees, setTrainees] = useState(initialTrainees);
    const [tags, setTags] = useState(initialTrainees.filter(t => t.attended).map(t => t.fullNameEnglish));
    const [formData, setFormData] = useState(projectData);
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredTrainees = trainees.filter((trainee) =>
        trainee.fullNameEnglish.toLowerCase().includes(searchQuery)
    );

    const handleCheckboxChange = (traineeId) => {
        const updatedTrainees = trainees.map((trainee) =>
            trainee.id === traineeId ? { ...trainee, attended: !trainee.attended } : trainee
        );

        const updatedTags = updatedTrainees
            .filter((trainee) => trainee.attended)
            .map((trainee) => trainee.fullNameEnglish);

        setTrainees(updatedTrainees);
        setTags(updatedTags);
    };

    const handleRemoveTag = (tagName) => {
        const updatedTags = tags.filter(tag => tag !== tagName);
        const updatedTrainees = trainees.map((trainee) =>
            trainee.fullNameEnglish === tagName ? { ...trainee, attended: false } : trainee
        );

        setTrainees(updatedTrainees);
        setTags(updatedTags);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} >
            <h2 className='header-text-edit-project'>Attending trainees</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">

                <div className="trainees-container">
                    {label && <label>{label}{required && <span className="required-mark">*</span>}</label>}
                    <div className="scroll-x-container">

                        <div className="tag-input">
                            {tags.map((tag, index) => (
                                <span className="tag" key={index}>
                                    {tag} <button type="button" onClick={() => handleRemoveTag(tag)}><CloseIcon /></button>
                                </span>
                            ))}
                            <input
                                type="text"
                                placeholder="Add name..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className="trainees-table">

                        <table >
                            <thead>
                                <tr>
                                    <th>Full Name (English)</th>
                                    <th>Full Name (Arabic)</th>
                                    <th>Type</th>
                                    <th>Attended</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTrainees.map((trainee) => (
                                    <tr key={trainee.id}>
                                        <td>{trainee.fullNameEnglish}</td>
                                        <td>{trainee.fullNameArabic}</td>
                                        <td>{trainee.type}</td>
                                        <td>
                                            {/* <input
                                                type="checkbox"
                                                checked={trainee.attended}
                                                onChange={() => handleCheckboxChange(trainee.id)}
                                            /> */}
                                            <Checkbox
                                                label=""
                                                checked={trainee.attended}
                                                onChange={() => handleCheckboxChange(trainee.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

            </form>
        </Modal >
    );
};

export default AttendingTrainees;
