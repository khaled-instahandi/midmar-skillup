import React, { useState } from 'react';
import './AccountCreated.css'; // Path to your CSS file
import logo from '../../images/logo.svg'; // Path to your logo image
import { ReactComponent as CopyIcon } from '../../images/copy-icon.svg'; // Import your copy icon SVG here

const AccountCreated = () => {
    const [copied, setCopied] = useState(false);

    const userInfo = {
        username: 'Khaled',
        email: 'khaled@skillup.org',
        password: 'skillup123456' // Note: Displaying passwords is not secure practice
    };

    const copyToClipboard = (text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    setCopied(true);
    
                    setTimeout(() => {
                        setCopied(false);
                    }, 2000);
                })
                .catch((error) => {
                    console.error('Unable to copy to clipboard', error);
                });
        } else {
            console.warn('Clipboard API not supported, copying text manually');
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
    
            setCopied(true);
    
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    };
    


    return (
        <div className="account-created-container">
            <div className="account-created-card">
                <img src={logo} alt="Skill Up" className="account-logo" />
                <h1>Hello <strong> {userInfo.username}!</strong></h1>
                <p>The project administrator has created an account for you on this platform</p>
                <hr className="divider" />
                <div className="account-details">
                    <div className="info-field">
                        <label>Email:</label>
                        <div className="input-group">
                            <input type="text" value={userInfo.email} readOnly />
                            <button
                                onClick={() => copyToClipboard(userInfo.email)}
                                onTouchEnd={() => setCopied(false)}
                                className={`copy-btn ${copied ? 'copied' : ''}`}>
                                <CopyIcon />
                            </button>
                        </div>
                    </div>
                    <div className="info-field">
                        <label>Password:</label>
                        <div className="input-group">
                            <input type="text" value={userInfo.password} readOnly />
                            <button
                                onClick={() => copyToClipboard(userInfo.password)}
                                onTouchEnd={() => setCopied(false)}

                                className={`copy-btn ${copied ? 'copied' : ''}`}>
                                <CopyIcon />
                            </button>
                        </div>
                    </div>
                </div>
                <p className="instruction-text">Please go to the website and log in</p>
                <p>Thank you for your attention</p>

            </div>
            <div className="buttom-account-btn">
                <p> Go to the website!</p>
                <a onClick={() => window.location.href = '/login'} className="get-started-button">
                    get started
                </a>
            </div>

        </div>
    );
};

export default AccountCreated;
