import React, { useState } from 'react';
import './SignUp.css'; // Path to your SignUp CSS file
import Button from '../../../elements/Buttons/Button';
import InputField from '../../../elements/DynamicInput/InputField';
import Dropdown from '../../../elements/Dropdown/Dropdown';
import logo from '../../../images/logo.svg'
import DatePicker from '../../../elements/DatePicker/DatePicker';
import Checkbox from '../../../elements/Checkbox/Checkbox';
const SignUpAr = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe); // Toggle randomize state
    };
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
        <div className="signup-container" dir='rtl'>
            <div className="sharp-background-top">

            </div>
            <div className="signup-card">
                <img src={logo} alt="Logo" className="signup-logo" />
                <h2 className="signup-title">إنشاء حساب</h2>
                <p className="signup-description">للوصول إلى خدماتنا</p>
                <form onSubmit={handleSubmit} className="signup-form">
                    <InputField
                        type="text"
                        id="first-name"
                        label={'الاسم الأول (عربي)'}
                        placeholder="الاسم الأول (عربي)"
                        onChange={(value) => console.log(value)}
                        Value={'خالد'}
                    />
                    <InputField
                        type="text"
                        id="last-name"
                        label={'الكنية (عربي)'}
                        Value={'الاحمد'}
                        placeholder="الكنية (عربي)"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="text"
                        id="first-name-en"
                        label={'الاسم الأول (إنكليزي)'}
                        placeholder="الاسم الأول (إنكليزي)"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="text"
                        id="last-name-en"
                        label={'الكنية (إنكليزي)'}
                        placeholder="الكنية (إنكليزي)"
                        onChange={(value) => console.log(value)}
                    />
                    <Dropdown
                        label="الجنس"
                        state={'ss'}
                        options={['ذكر', 'انثى']}
                        placeHolder={'اختيار'}
                    />
                    <Dropdown
                        label="مستوى التعليم"
                        state={'ss'}
                        options={['1', '2']}
                        placeHolder={'اختيار'}
                    />
                    <Dropdown
                        label="الحالة الإجتماعية"
                        state={'ss'}
                        options={['عازب', 'متزوج']}
                        placeHolder={'اختيار'}
                    />
                    <DatePicker lable={'تاريخ الميلاد'} />
                    <Dropdown
                        label="البلد"
                        state={'ss'}
                        options={['تركيا', 'سوريا']}
                        placeHolder={'اختيار'}
                    />
                    <Dropdown
                        label="المدينة"
                        state={'ss'}
                        options={['حلب', 'ادلب']}
                        placeHolder={'اختيار'}
                    />
                    <InputField
                        type="text"
                        id="phone"
                        label={'رقم الهاتف'}
                        placeholder="رقم الهاتف"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="email"
                        id="email"
                        label={'البريد الإلكتروني'}
                        placeholder="البريد الإلكتروني"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="password"
                        id="password"
                        label={'كلمة المرور'}
                        placeholder="كلمة المرور"
                        onChange={(value) => console.log(value)}
                    />
                    <InputField
                        type="password"
                        id="password-confirmation"
                        label={'تأكيد كلمة المرور'}
                        placeholder="تأكيد كلمة المرور"
                        onChange={(value) => console.log(value)}
                    />
                    <div className="terms-checkbox">

                        <Checkbox syleCheckBox={{ display: 'block' }} label="موافق على جميع "
                            labelTow={'الشروط والأحكام'}
                            onChange={() => handleCheckboxChange()} checked={rememberMe}

                        />
                    </div>
                    <Button
                        typeBtn={'subment'}
                        label="إنشاء حساب"
                        onClick={() => console.log('Clicked button')}
                        className="button-login"
                        width={'100%'}
                        height={'64.026px'}
                        fontSize={'1.375rem'}
                    />
                </form>

                <div className="login-link">
                    لدي حساب بالفعل؟ <a href="/ar/login">تسجيل الدخول</a>
                </div>
            </div>
            <div className="sharp-background">

            </div>
        </div>
    );
};

export default SignUpAr;
