import React, { useState } from 'react';
import Checkbox from '../../../../elements/Checkbox/Checkbox';
import Button from '../../../../elements/Buttons/Button';
import ReasonofReject from '../../TrainingSessions/SRNReport/ReasonofReject';
import verify from '../../../../images/verify2.svg';
import AlertMessage from '../../../../elements/AlertMessage/AlertMessage';

function DirectManagerSignature({ isOpen, onClose, projectData, onSave }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedProjectData, setSelectedProjectData] = useState(null);
    const [showAlertDelete, setShowAlertDelete] = useState(false);

    const handleModalClose = () => {
        setIsAddModalOpen(false);
        setShowAlertDelete(false)
        onClose(true)
    };
    const handleSaveAddedProject = (editedData) => {
        console.log('Edited project data:', editedData);
        handleModalClose();
    };
    return (
        <div className='approval'>
            <div className="header-buttom-title">
                Direct Manager Signature
            </div>
            <section className="test-result">
                <div className="sgin-rejects-t">
                    <div className="reciver-name">
                        <h6>    Reciver Name, Date and signature</h6>
                        <div className="btn-signatures">
                            <Button width={'40%'} label="Sign" className="sign-button" height={'2.5REM'} onClick={() => setShowAlertDelete(true)} />
                            <Button width={'40%'} label="Reject" className="reject-button" height={'2.5REM'} onClick={() => setIsAddModalOpen(true)} />
                        </div>
                    </div>
                    <div className="manager-name">
                        <h6>Direct Manager Name, Date and signature</h6>
                        <div className="btn-signatures">
                            <Button width={'40%'} label="Sign" className="sign-button" height={'2.5REM'} onClick={() => setShowAlertDelete(true)} />
                            <Button width={'40%'} label="Reject" className="reject-button" height={'2.5REM'} onClick={() => setIsAddModalOpen(true)} />
                        </div>


                    </div>
                </div>
            </section>
            <ReasonofReject
                isOpen={isAddModalOpen}
                onClose={handleModalClose}
                projectData={selectedProjectData}
                onSave={handleSaveAddedProject}
            />   {showAlertDelete &&
                <AlertMessage
                
                    lableButtonOne={'Ok'}
                    buttomTowActive={false}
                    headerText={'Done!!'}
                    logo={verify}
                    buttonClassFirst={'button-delete-t'}
                    buttomText={'Your leave request has been submitted successfully, thank you'}
                    buttomTextMiddle={true}
                    onClose={handleModalClose} />}
        </div>
    );
}

export default DirectManagerSignature;
