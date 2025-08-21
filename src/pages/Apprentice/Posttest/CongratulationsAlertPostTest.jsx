import React, { useEffect, useState } from 'react';
import './AlertMessage.css';
import checkmarkIcon from '../../images/success-icon.svg';
import checkmarkIcon2 from '../../images/sucess2-icon.svg';
import closeSquare from '../../images/close-square.svg';

import Button from '../Buttons/Button';

const CongratulationsAlertPostTest = ({ btnOneActive = false, closeButton = false, OnClickBtnTow, onClose, buttomTextMiddle = false, lableButtonTow, lableButtonOne, buttomText, linkText, logo, headerText, buttonClassFirst, ButtonClassTow, buttomTowActive = false }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose();

    };
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleDetails = () => {
        setIsVisible(true);
    };

    return (
        isVisible && (
            <div className="alert-message-container">

                <div className="alert-message">
                    {closeButton && (<>
                        <div className="close-button" onClick={handleClose}>
                            <img src={closeSquare} alt="" />

                        </div>
                    </>)}

                    <div className="alert-message-icon">
                        <img src={logo} alt="" />
                    </div>
                    <h2>{headerText}</h2>
                    {buttomTextMiddle ? <> <p>{buttomText}</p></> : ''}

                    <div className="alert-message-actions">
                        {btnOneActive && (

                            <>

                                <Button

                                    label={lableButtonOne}
                                    onClick={handleClose}
                                    className={buttonClassFirst}
                                    width={'40%'}


                                />

                            </>
                        )}
                        {buttomTowActive && (
                            <>
                                <Button
                                    label={lableButtonTow}
                                    onClick={() => OnClickBtnTow()}
                                    className={ButtonClassTow}
                                    width={'40%'}


                                />
                            </>)}


                    </div>
                    {buttomTextMiddle ? '' : <> <p>{buttomText}
                        <a className='alert-link' href="mailto:email@example.com">{linkText}</a></p></>}

                </div>
            </div>
        )
    );
};

export default CongratulationsAlertPostTest;
