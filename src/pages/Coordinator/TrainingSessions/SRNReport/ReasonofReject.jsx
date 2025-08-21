import React from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';

import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
import QuillEditor from '../../../../components/QuillEditor/QuillEditor';
const ReasonofReject = ({ isOpen, onClose, projectData, onSave, height, handleBtn ,width}) => {





    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={'auto'} width={width}>
            <h2 className='header-text-edit-project'>Reason of Reject
            </h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="add-sub-activity">

              
                <QuillEditor
                    customClass={'objectives-input objectives-input-q'}
                    label={'Reason of Reject'}
                    required />


                <Button onClick={() => { handleBtn() }} type="submit" label="Send" className={'button-edit-project'} height={'3rem'} />
            </form>
        </Modal>
    );
};

export default ReasonofReject;
