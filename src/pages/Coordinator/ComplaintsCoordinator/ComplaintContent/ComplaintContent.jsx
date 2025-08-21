import React, { useState } from 'react';
import Modal from '../../../Modal';
import lineUnder from '../../../../images/under-title-opration.svg'
import userIcon from '../../../../images/user-octagon.svg'
import noteIcon from '../../../../images/stickynote-icon.svg'
import boardIcon from '../../../../images/clipboard-export.svg'

const ComplaintContent = ({ isOpen, onClose, projectData, onSave, height, handleBtn, width }) => {



    const userIdentity = 'Akeel Bakkour';
    const complaintText = 'He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvinarHe needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvinar'
    const complaintReply = 'He needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvinarHe needs a big smile. Mauris flatters the elit, needs the tincidunt nibh pulvinar';

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} height={height} width={width}>
            <h2 className='header-text-edit-project'>Complaint Content
            </h2>
            <img src={lineUnder} alt='' />
            <div className="user-complaint-container">
                <div className="user-identity-section">
                    <h3>  <img src={userIcon} alt="" />User Identity:</h3>
                    <p>{userIdentity}</p>
                </div>
                <div className="complaint-text-section">
                    <h3>  <img src={noteIcon} alt="" />The Complaint text:</h3>
                    <p>{complaintText}</p>
                </div>
                <div className="complaint-reply-section">
                    <h3>
                        <img src={boardIcon} alt="" />The Complaint Reply:</h3>
                    <p>{complaintReply}</p>
                </div>
            </div>
        </Modal>
    );
};

export default ComplaintContent;
