import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import DatePicker from '../../../../elements/DatePicker/DatePicker';
import Button from '../../../../elements/Buttons/Button';
import './EditActivity.css';
import lineUnder from '../../../../images/under-title-opration.svg'
import Checkbox from '../../../../elements/Checkbox/Checkbox'

const EditActivity = ({ isOpen, onClose, projectData, onSave }) => {


    const [formData, setFormData] = useState(projectData);
    const [randomize, setRandomize] = useState(true); // State for randomization checkbox

    const handleCheckboxChange = () => {
        setRandomize(!randomize); // Toggle randomize state
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'100%'} width={'auto'}>
            <h2 className='header-text-edit-project'>Edit Activity</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <Dropdown
                    label="Output"
                    placeHolder={'Select'}
                    options={['State 1', 'State 2']}

                    required={true}
                />
                <InputField
                    type='text'

                    label="Activity Name"
                    placeholder={'Enter the Activity description'}
                    isTextarea
                    required={true}
                />


                <DatePicker
                    lable="Start date"
                    required={true}

                />
                <DatePicker
                    lable="End date"
                    required={true}

                />
                <InputField
                    type='number'

                    label="Planned value"
                    placeholder={'Enter the Planned value'}
                    required={true}
                />
                <Dropdown
                    label="Activity relationship"
                    placeHolder={'SelChoose the activity relationshipect'}
                    options={['State 1', 'State 2']}

                    required={true}
                />
                <InputField
                    type='number'

                    label="Planned beneficiaries "
                    placeholder={'Enter the beneficiaries number '}
                    required={true}
                />
                <Dropdown
                    label="Relationship type"
                    placeHolder={'Enter the relationship type'}
                    options={['State 1', 'State 2']}

                    required={true}
                />
                <InputField
                    label="Detailed description"
                    placeholder={'Enter a detailed description of the activity'}
                    isTextarea
                    required={true}
                />
                <InputField
                    label="Assumption"
                    placeholder={'Enter assumption of the activity'}
                    isTextarea
                    required={true}
                />
                <Checkbox label="Is Milestone activity or not" ClassName={'name-add-activity'} onChange={() => handleCheckboxChange()} checked={randomize} />

                <Button type="submit" label="Edit Active" className={'button-edit-project'} />
            </form>
        </Modal>
    );
};

export default EditActivity;
