import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import DatePicker from '../../../../elements/DatePicker/DatePicker';
import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
import TimePicker from '../../../../elements/TimePicker/TimePicker';
const AddTrainingSessions = ({ isOpen, onClose, projectData, onSave }) => {


    const [formData, setFormData] = useState(projectData);

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
        <Modal onClose={onClose} width={''}>
            <h2 className='header-text-edit-project'>Add Training Sessions</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">

                <DatePicker
                    lable="Session Date"
                    required={true}
                />
                <TimePicker
                    label="Start At"
                    required={true}
                />
                <TimePicker
                    label="End At"
                    required={true}
                />
                <Dropdown
                    label="Trainees Name"
                    placeHolder={'Who would you like to add?'}
                    options={['activity 1', 'activity 2']}

                    required={true}
                />
                <Button type="submit" label="Add Training Sessions" className={'button-edit-project'} />
            </form>
        </Modal>
    );
};

export default AddTrainingSessions;
