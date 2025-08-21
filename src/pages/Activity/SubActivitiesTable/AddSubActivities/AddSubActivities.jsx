import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import DatePicker from '../../../../elements/DatePicker/DatePicker';
import Button from '../../../../elements/Buttons/Button';
import './AddSubActivities.css';
import lineUnder from '../../../../images/under-title-opration.svg'
const AddSubActivities = ({ isOpen, onClose, projectData, onSave }) => {


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
        <Modal onClose={onClose} height={'100%'} width={'40%'}>
            <h2 className='header-text-edit-project'>Add Sub Activity</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">
                <InputField
                    label="Sub-activity"
                    placeholder={'Enter the Activity name'}
                    type='text'
                    required={true}
                />
                <Dropdown
                    label="Type of activity"
                    placeHolder={'Enter the Type of activity'}
                    options={['activity 1', 'activity 2']}

                    required={true}
                />
                <InputField
                    label="Activity description"
                    placeholder={'Enter the Activity description'}
                    type='text'
                    required={true}
                    isTextarea
                />
                <Dropdown
                    label="Sub-activity method"
                    placeHolder={'Enter the Sub-activity method'}
                    options={['activity 1', 'activity 2']}

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
                <Button type="submit" label="Add Sub Activity" className={'button-edit-project'} />
            </form>
        </Modal>
    );
};

export default AddSubActivities;
