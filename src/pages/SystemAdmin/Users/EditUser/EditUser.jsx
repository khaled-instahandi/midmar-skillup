import React, { useState, useEffect } from "react";
import Button from "src/elements/Buttons/Button";
import InputField from "src/elements/DynamicInput/InputField";
import Dropdown from "src/elements/Dropdown/Dropdown";
import DatePicker from "src/elements/DatePicker/DatePicker";
import Modal from "src/pages/Modal";

import lineUnder from "../../../../images/under-title-opration.svg";

const EditUser = ({ isOpen, onClose, userData, onSave }) => {
    const [formData, setFormData] = useState({
        firstNameArabic: "",
        lastNameArabic: "",
        firstNameEnglish: "",
        lastNameEnglish: "",
        gender: "",
        birthDate: "",
        countryOfResidence: "",
        stateOfResidence: "",
        educationLevel: "",
        type: "",
        privileges: "",
        directManager: "",
        phoneNumber: "",
        workStartDate: "",
        email: ""
    });

    useEffect(() => {
        if (userData) {
            setFormData({
                firstNameArabic: userData.firstNameArabic || "",
                lastNameArabic: userData.lastNameArabic || "",
                firstNameEnglish: userData.firstNameEnglish || "",
                lastNameEnglish: userData.lastNameEnglish || "",
                gender: userData.gender || "",
                birthDate: userData.birthDate || "",
                countryOfResidence: userData.countryOfResidence || "",
                stateOfResidence: userData.stateOfResidence || "",
                educationLevel: userData.educationLevel || "",
                type: userData.type || "",
                privileges: userData.privileges || "",
                directManager: userData.directManager || "",
                phoneNumber: userData.phoneNumber || "",
                workStartDate: userData.workStartDate || "",
                email: userData.email || ""
            });
        }
    }, [userData]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstNameArabic && formData.email) {
            onSave(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} width={"800px"}>
            <h2 className="header-text-edit-project">Edit User</h2>
            <img src={lineUnder} alt="" />
            <form onSubmit={handleSubmit} className="edit-project-form">

                <InputField
                    label="First Name (arabic)"
                    placeholder={"Enter the First Name (arabic)"}
                    required={true}
                    type="text"
                    value={formData.firstNameArabic}
                    onChange={(e) => handleInputChange('firstNameArabic', e.target.value)}
                />
                <InputField
                    label="Last Name (arabic)"
                    placeholder={"Enter the Last Name (arabic)"}
                    required={true}
                    type="text"
                    value={formData.lastNameArabic}
                    onChange={(e) => handleInputChange('lastNameArabic', e.target.value)}
                />


                <InputField
                    label="First Name (english)"
                    placeholder={"Enter the First Name (english)"}
                    required={true}
                    type="text"
                    value={formData.firstNameEnglish}
                    onChange={(e) => handleInputChange('firstNameEnglish', e.target.value)}
                />

                <InputField
                    label="Last Name (english)"
                    placeholder={"Enter the Last Name (english)"}
                    required={true}
                    type="text"
                    value={formData.lastNameEnglish}
                    onChange={(e) => handleInputChange('lastNameEnglish', e.target.value)}
                />



                <Dropdown
                    label="Gender"
                    placeHolder={"Select"}
                    options={["Male", "Female"]}
                    required={true}
                    value={formData.gender}
                    onChange={(value) => handleInputChange('gender', value)}
                />

                <DatePicker
                    label="Birth Date"
                    placeholder="Year / Month / Day"
                    required={true}
                    value={formData.birthDate}
                    onChange={(value) => handleInputChange('birthDate', value)}
                />


                <Dropdown
                    label="Country of Residence"
                    placeHolder={"Select country"}
                    options={["Syria", "Turkey", "Jordan", "Lebanon"]}
                    required={true}
                    value={formData.countryOfResidence}
                    onChange={(value) => handleInputChange('countryOfResidence', value)}
                />

                <Dropdown
                    label="State of Residence"
                    placeHolder={"Select Region"}
                    options={["Damascus", "Aleppo", "Homs", "Latakia"]}
                    required={true}
                    value={formData.stateOfResidence}
                    onChange={(value) => handleInputChange('stateOfResidence', value)}
                />



                <Dropdown
                    label="Education Level"
                    placeHolder={"Select"}
                    options={["High School", "Bachelor", "Master", "PhD"]}
                    required={true}
                    value={formData.educationLevel}
                    onChange={(value) => handleInputChange('educationLevel', value)}
                />

                <Dropdown
                    label="Type"
                    placeHolder={"Select"}
                    options={["Management", "type1", "type2"]}
                    required={true}
                    value={formData.type}
                    onChange={(value) => handleInputChange('type', value)}
                />


                <Dropdown
                    label="Privileges"
                    placeHolder={"Select"}
                    options={["Staff", "User", "SysAdmin"]}
                    required={true}
                    value={formData.privileges}
                    onChange={(value) => handleInputChange('privileges', value)}
                />

                <Dropdown
                    label="Direct Manager"
                    placeHolder={"Select"}
                    options={["Manager 1", "Manager 2", "Manager 3"]}
                    required={true}
                    value={formData.directManager}
                    onChange={(value) => handleInputChange('directManager', value)}
                />


                <InputField
                    label="Phone Number"
                    placeholder={"Enter the Phone Number"}
                    required={true}
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                />

                <DatePicker
                    label="Work Start Date"
                    placeholder="Year / Month / Day"
                    required={true}
                    value={formData.workStartDate}
                    onChange={(value) => handleInputChange('workStartDate', value)}
                />


                <InputField
                    label="Email"
                    placeholder={"Enter the Email"}
                    required={true}
                    type="email"
                    customClass='name-edit-project'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                />

                <Button
                    type="submit"
                    label="Update"
                    className={"button-edit-project"}
                    height={"3rem"}
                />
            </form>
        </Modal>
    );
};

export default EditUser;
