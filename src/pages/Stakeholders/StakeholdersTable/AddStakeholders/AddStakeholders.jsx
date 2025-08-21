import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';
import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
import DatePicker from '../../../../elements/DatePicker/DatePicker';

const AddStakeholders = ({ isOpen, onClose, projectData, onSave }) => {




    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose}  height={'100%'} width={"auto"}>
            <h2 className='header-text-edit-project'>Add a Stakeholder</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <InputField
                    label="SStakeholder"
                    placeholder={'Enter the Stakeholder'}
                    required={true}
                    type='text'
                />
                <InputField
                    label="Type "
                    placeholder={'Enter the Type '}
                    required={true}
                    type='text'
                />


                <Dropdown
                    label="Role"
                    placeHolder={'Select a Role'}
                    options={['Category 1', 'Category 2']}
                    required={true}
                />


                <InputField
                    type='text'

                    label="Desired "
                    placeholder={'Enter the Desired '}
                    required={true}
                />
                <Dropdown
                    label="Interest level"
                    placeHolder={'Select a Interest level'}
                    options={['Category 1', 'Category 2']}
                    required={true}
                />
                <InputField
                    type='text'

                    label="Power level "
                    placeholder={'Enter the Power level '}
                    required={true}
                />
                <InputField
                    type='text'

                    label="required action "
                    placeholder={'Enter the required action '}
                    required={true}
                />
                <InputField
                    type='text'

                    label="Responsible "
                    placeholder={'Enter the Responsible '}
                    required={true}
                />
                <InputField
                    type='text'

                    label="Engagement strategy "
                    placeholder={'Enter the Engagement strategy '}
                    required={true}
                />
                <InputField
                    type='text'

                    label="Communication method "
                    placeholder={'Enter the Communication method '}
                    required={true}
                />
                <Button type="submit" label="Add a Stakeholder" className={'button-edit-project'} height={'3rem'} />
            </form>
        </Modal>
    );
};

export default AddStakeholders;
