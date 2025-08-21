import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
import DatePicker from '../../../../elements/DatePicker/DatePicker';

const AddRecruitmentPlan = ({ isOpen, onClose, projectData, onSave, height }) => {




    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose}  height={'80%'} width={"auto"}>
            <h2 className='header-text-edit-project'>Add a Recruitment plan</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <InputField
                    label="Human resource"
                    placeholder={'Enter the Human resource'}
                    required={true}
                    type='text'
                />


                <DatePicker lable={'Planned date'} />


                <InputField
                    type='text'

                    label="Contract duration in months"
                    placeholder={'Enter the Contract duration in months'}
                    required={true}
                />
                <InputField
                    type='text'

                    label="Duration in days "
                    placeholder={'Enter the Duration in days'}
                    required={true}
                />
                <DatePicker lable={'Required work start date'} />

                <InputField
                    type='text'

                    label="Responsibilities"
                    placeholder={'Enter the Responsibilities'}
                    required={true}
                />

                <Button type="submit" label="Add a Recruitment plan" className={'button-edit-project'} height={'3rem'} />
            </form>
        </Modal>
    );
};

export default AddRecruitmentPlan;
