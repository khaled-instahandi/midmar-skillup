
import React, { useState } from 'react';
import AlertMessage from './AlertMessage';
import infoCircle from '../../images/info-circle2.svg';

import verify from '../../images/verify2.svg';


const TestAlert = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertConfirm, setShowAlertConfirm] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);

    };

    const handleCloseAlert = () => {
        setShowAlert(false);

    };
    const handleShowAlertS = () => {
        setShowAlertConfirm(true);

    };

    const handleCloseAlertS = () => {
        setShowAlertConfirm(false);

    };
    const handleShowAlertD = () => {
        setShowAlertDelete(true);

    };

    const handleCloseAlertD = () => {
        setShowAlertDelete(false);

    };
    return (
        <div>
            <button onClick={handleShowAlert}>Show Alert</button>
            {showAlert && <AlertMessage lableButtonOne={'Cancel'} lableButtonTow={"Details"} buttomTowActive={true} headerText={'Congratulations!!'} logo={verify} ButtonClassTow={'button-details'} buttonClassFirst={'button-cancel'} buttomText={'Note: The notification has been sent via'} linkText={'email'} onClose={handleCloseAlert} />}
            <button onClick={handleShowAlertS}>Show Alert confirm</button>

            {showAlertConfirm && <AlertMessage closeButton={true} lableButtonOne={'Cancel'} lableButtonTow={'Yes, delete it !!'} buttomTowActive={true} headerText={'Are you sure to delete?'} logo={infoCircle} ButtonClassTow={'button-confirm-delete'} buttonClassFirst={'button-cancel'} buttomText={'You will not be able to recover this project !!'} buttomTextMiddle={true} onClose={handleCloseAlertS} />}
            <button onClick={handleShowAlertD}>Show Alert delete</button>

            {showAlertDelete &&
                <AlertMessage
                    lableButtonOne={'Ok'}
                    buttomTowActive={false}
                    headerText={'Deleted !!'}
                    logo={verify}
                    buttonClassFirst={'button-delete-t'}
                    buttomText={'Hey, This project has been deleted!!'}
                    buttomTextMiddle={true}
                    onClose={handleCloseAlertD} />}

        </div>
    );
};

export default TestAlert;