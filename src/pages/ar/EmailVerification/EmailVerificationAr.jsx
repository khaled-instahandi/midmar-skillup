import React from 'react';
import './EmailVerification.css'; 
import verificationImage from '../../images/verification-image.svg';
import Button from '../../elements/Buttons/Button';

const EmailVerification = () => {
    const userEmail = 'm.nour.eng@gmail.com'; 

    const handleVerifyEmail = () => {
        console.log('Verify email logic goes here');
    };

    return (
        <div className="email-verification-container">
            <div className="email-verification-card">
                <img src={verificationImage} alt="Verify Email" className="verification-image" />
                <h2>Verify your email address</h2>
                <p>You have entered <strong>{userEmail}</strong> as the email address for your account.</p>
                <p>Please verify this email address by clicking the button below.</p>
                <Button
                    typeBtn={'subment'}
                    label="Verify your email"
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

export default EmailVerification;
