import React, { useState } from 'react';
import Modal from '../../Modal';

import Button from '../../../elements/Buttons/Button';
import lineUnder from '../../../images/under-title-opration.svg'
import exportIcon from '../../../images/export-icon.svg'

import ImageUploadInput from '../../../elements/ImageUploadInput/ExcelUploadInput';
import ExcelUploadInput from '../../../elements/ImageUploadInput/ExcelUploadInput';
const ImportBudget = ({ isOpen, onClose, projectData, onSave, height }) => {





    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'90%'} width={"auto"}>
            <h2 className='header-text-edit-project'>Import Budget (xlsx)</h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="edit-project-form mtop-3">
                {/* <InputField
                    customClass='name-edit-project'
                    type='text'

                    label="Category name"
                    placeholder={'Enter the Category name'}
                    required={true}
                /> */}
                <ExcelUploadInput
                    label={'Attach a document'}
                    width="100%"
                    height="100%"
                    icon={exportIcon}
                    required
                />

                <Button type="submit" label="Import Budget" className={'button-edit-project'} height={'3rem'} />
                <Button type="submit" label="Download Template" className={'button-login-out'} height={'3rem'} />

            </form>
        </Modal>
    );
};

export default ImportBudget;
