import React, { useState } from 'react';
import './SignUp.css'; // Path to your SignUp CSS file
import Button from '../../elements/Buttons/Button';
import InputField from '../../elements/DynamicInput/InputField';
import Dropdown from '../../elements/Dropdown/Dropdown';
import logo from '../../images/logo.svg'
import DatePicker from '../../elements/DatePicker/DatePicker';
import Checkbox from '../../elements/Checkbox/Checkbox';
const SignUp = () => {
    const [formData, setFormData] = useState({
        firstNameArabic: '',
        lastNameArabic: '',
        firstNameEnglish: '',
        lastNameEnglish: '',
        gender: '',
        educationLevel: '',
        country: '',
        state: '',
        date: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit form data
        console.log(formData);
    };

    // Add more form controls and styles as per your design

    return (
        <div className="signup-container">
            <div className="sharp-background-top">

            </div>
            <div className="signup-card">
                <img src={logo} alt="Logo" className="signup-logo" />
                <h2 className="signup-title">Sign up</h2>
                <p className="signup-description">to get access to our services</p>
                <form onSubmit={handleSubmit} className="signup-form">
                    <InputField
                        type="text"
                        id="first-name"
                        label={'First Name (Arabic)'}
                        placeholder="First Name (Arabic)"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="text"
                        id="last-name"
                        label={'Last Name (Arabic)'}
                        placeholder="Last Name (Arabic)"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="text"
                        id="first-name-en"
                        label={'First Name (English)'}
                        placeholder="First Name (English)"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="text"
                        id="last-name-en"
                        label={'Last Name (English)'}
                        placeholder="Last Name (English)"
                        onChange={(value) => console.log(value)}
                    />
                    <Dropdown
                        label="Gender"
                        state={'ss'}
                        options={['Male', 'Female']}
                        placeHolder={'Select'}
                    />
                    <Dropdown
                        label="Education Level"
                        state={'ss'}
                        options={['1', '2']}
                        placeHolder={'Select'}
                    />

                    <DatePicker lable={'Date'} />
                    <InputField
                        type="text"
                        id="phone"
                        label={'Phone Number'}
                        placeholder="Phone Number"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="email"
                        id="email"
                        label={'Email'}
                        placeholder="Email"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="password"
                        id="password"
                        label={'Password'}
                        placeholder="Password"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="password"
                        id="password-confirmation"
                        label={'Password Confirmation'}
                        placeholder="Password Confirmation"
                        onChange={(value) => console.log(value)}
                    />
                    <div className="terms-checkbox">

                        <Checkbox syleCheckBox={{ display: 'block' }} label="I agree to th Terms of Service and Privacy Policy." />
                    </div>
                    <Button
                        typeBtn={'subment'}
                        label="Sign up "
                        onClick={() => console.log('Clicked button')}
                        className="button-login"
                        width={'100%'}
                        height={'64.026px'}
                        fontSize={'1.375rem'}
                    />
                </form>

                <div className="login-link">
                    Already have an account? <a href="/login">Login</a>
                </div>
            </div>
            <div className="sharp-background">

            </div>
        </div>
    );
};

export default SignUp;
