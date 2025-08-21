import React, { useState } from 'react';
import Modal from '../../../Modal';
import InputField from '../../../../elements/DynamicInput/InputField';
import Dropdown from '../../../../elements/Dropdown/Dropdown';

import Button from '../../../../elements/Buttons/Button';
import lineUnder from '../../../../images/under-title-opration.svg'
const FillComplaint = ({ isOpen, onClose, projectData, onSave, height, handleBtn }) => {





    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={height} width={'auto'}>
            <h2 className='header-text-edit-project'>تعبئة الشكوى
            </h2>
            <img src={lineUnder} alt='' />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <Dropdown
                    label="هوية المستخدم"
                    placeHolder={'اختر هوية المستخدم'}
                    options={['Category 1', 'Category 2']}
                    customClass='name-edit-project'

                    textError={'لا يمكنك تلقي الرد على شكوى مجهولة المصدر'}
                    required={true}
                />
                <InputField
                    customClass='name-edit-project min-height-100'
                    label="نص الشكوى"
                    placeholder={'أدخل نص الشكوى'}
                    required={true}
                    isTextarea
                    numberRows={3}
                />


                <Button onClick={() => { handleBtn() }} type="submit" label="إرسال" className={'button-edit-project'} height={'3rem'} />
            </form>
        </Modal>
    );
};

export default FillComplaint;
