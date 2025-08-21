import React, { useState } from 'react';
import './Login.css';
import logo from '../../../images/logo.svg'
import Checkbox from '../../../elements/Checkbox/Checkbox';
import InputField from '../../../elements/DynamicInput/InputField';
import Button from '../../../elements/Buttons/Button';
const LoginAr = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe); // Toggle randomize state
    };
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(email, password, rememberMe);
    };

    return (
        <div className="login-container" dir='rtl'>
            <div className="login-card">
                <div className="logo">
                    {/* Your logo here */}
                    <img src={logo} alt="Skill Up" />
                </div>
                <h2>تسجيل الدخول إلى حسابك</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        {/* <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        /> */}
                        <InputField label={'الإيميل'} type='text' placeholder={'الإيميل'} />
                    </div>
                    <div className="form-group">
                        <InputField label={'كلمة المرور'} type='password' placeholder={'كلمة المرور'} />
                    </div>
                    <div className="form-utilities">
                        <Checkbox label={'تذكرني'}
                            onChange={() => handleCheckboxChange()} checked={rememberMe}
                        />
                        <a href="/forgot-password">نسيت كلمة المرور؟</a>
                    </div>
                    <Button
                        label="تسجيل الدخول"
                        onClick={() => console.log('Clicked button')}
                        className="button-login"
                        fontSize={'1.5rem'}
                        width={'100%'}
                        height={'auto'}

                    />
                </form>


            </div>
            <div className="sharp-background">

            </div>
        </div>
    );
};

export default LoginAr;
