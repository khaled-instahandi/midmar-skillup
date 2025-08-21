import React from 'react';
import './EmailVerification.css';
import verificationImage from '../../images/verification-image.svg';
import Button from '../../elements/Buttons/Button';

const EmailVerificationAr = () => {
    const userEmail = 'm.nour.eng@gmail.com';

    const handleVerifyEmail = () => {
        console.log('Verify email logic goes here');
    };

    return (
        <div className="email-verification-container" dir='rtl'>
            <div className="email-verification-card">
                <img src={verificationImage} alt="Verify Email" className="verification-image" />
                <h2>التحقق من عنوان البريد الإلكتروني الخاص بك</h2>
                <p>لقد قمت بإدخال <strong>{userEmail}</strong> كعنوان البريد الإلكتروني لحسابك.</p>
                <p>يرجى التحقق من عنوان البريد الإلكتروني هذا عن طريق النقر على الزر أدناه.</p>
                <Button
                    typeBtn={'subment'}
                    label="قم بتأكيد بريدك الألكتروني"
                    onClick={() => console.log('Clicked button')}
                    className="button-login"
                    width={'55%'}
                    height={'64.026px'}
                    fontSize={'1.375rem'}
                />
            </div>
            <div className="sharp-background">

            </div>
        </div>
    );
};

export default EmailVerificationAr;
