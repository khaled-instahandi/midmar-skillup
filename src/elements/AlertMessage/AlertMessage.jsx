import React, { useEffect, useState } from 'react';
import './AlertMessage.css';
import checkmarkIcon from '../../images/success-icon.svg';
import checkmarkIcon2 from '../../images/sucess2-icon.svg';
import closeSquare from '../../images/close-square.svg';
import tickIcon from '../../images/tick-circle.svg'

import Button from '../Buttons/Button';

const AlertMessage = ({ hundelBtnThree, datatable = false, btnOneActive = false, closeButton = false, OnClickBtnTow, onClose, headerTextClass, widthBtnTow, buttomTextMiddle = false, lableButtonTow, lableButtonOne, buttomText, linkText, logo, headerText, buttonClassFirst, ButtonClassTow, buttomTowActive = false, isMark = false, mark, btnThreeActive = false }) => {
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
                    <h1 className='alert-test-mark'>{isMark && <>
                        {mark}
                    </>}
                    </h1>
                    <h2 className={`${headerTextClass}`}>{headerText}</h2>
                    {datatable ? <>
                        <table className='table-result-posttest'>
                            <thead>
                                <tr>
                                    <th>نتيجة الاختبار القبلي</th>
                                    <th>نتيجة الاختبار البعدي</th>
                                    <th>نسبة التحسن</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>70 %</td>
                                    <td>96 %</td>
                                    <td className='complite-p'>30 % <img src={tickIcon} alt="" /></td>
                                </tr>
                            </tbody>
                        </table>


                    </> : <>

                        {buttomTextMiddle ? <>
                            <p>{buttomText}</p>
                        </> : ''}
                    </>}

                    <div className={`alert-message-actions ${btnThreeActive && 'alert-message-actions-dsd'}`}>
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
                                    width={`${widthBtnTow ? widthBtnTow : '40%'}`}


                                />
                            </>)}
                        {btnThreeActive && <>
                            <Button
                                label="إجراء تقييم النشاط"
                                onClick={() => hundelBtnThree()}
                                className="button-login-out mt-5"
                                fontSize={'1.5rem'}
                                width={'50%'}
                                height={'auto'}
                            />
                        </>}

                    </div>
                    {buttomTextMiddle ? '' : <> <p>{buttomText}
                        <a className='alert-link' href="mailto:email@example.com">{linkText}</a></p></>}

                </div>
            </div>
        )
    );
};

export default AlertMessage;
