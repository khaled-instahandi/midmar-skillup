import React from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';

import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
import QuillEditor from '../../../../components/QuillEditor/QuillEditor';
const SendEmails = ({ isOpen, onClose, projectData, onSave, height, handleBtn }) => {





    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'auto'}>
            <h2 className='header-text-edit-project'>Send emails
            </h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">

                <InputField
                    customClass='name-edit-project'
                    label="Title"
                    placeholder={'Enter The Title'}
                    required={true}

                />
                <QuillEditor
                    customClass={'objectives-input objectives-input-q'}
                    label={'Message description'}
                    required />


                <Button onClick={() => { handleBtn() }} type="Send emails" label="Send" className={'button-edit-project'} height={'3rem'} />
            </form>
        </Modal>
    );
};

export default SendEmails;
