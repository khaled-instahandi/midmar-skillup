import React, { useState } from "react";
import Modal from "../../../Modal";
import InputField from "../../../../elements/DynamicInput/InputField";
import Dropdown from "../../../../elements/Dropdown/Dropdown";
import Button from "../../../../elements/Buttons/Button";
import lineUnder from "../../../../images/under-title-opration.svg";

const AddTrainer = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        trainerName: "",
        trainerEmail: "",
        trainerPhone: "",
        trainerSpecialities: "",
        trainerPayRate: "",
        trainerQuantity: ""
    });

    const quantityOptions = [
        "Per Month",
        "Per Day", 
        "Per Hour",
        "Per Year",
        "Per Service",
        "Per Session"
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.trainerName && formData.trainerEmail && formData.trainerPhone && 
            formData.trainerSpecialities && formData.trainerPayRate && formData.trainerQuantity) {
            
            const trainerData = {
                fullName: formData.trainerName,
                email: formData.trainerEmail,
                phone: formData.trainerPhone,
                specialities: formData.trainerSpecialities,
                payRate: formData.trainerPayRate,
                quantity: formData.trainerQuantity
            };
            onSave(trainerData);
            // Reset form
            setFormData({
                trainerName: "",
                trainerEmail: "",
                trainerPhone: "",
                trainerSpecialities: "",
                trainerPayRate: "",
                trainerQuantity: ""
            });
        }
    };

    const handleClose = () => {
        setFormData({
            trainerName: "",
            trainerEmail: "",
            trainerPhone: "",
            trainerSpecialities: "",
            trainerPayRate: "",
            trainerQuantity: ""
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={handleClose} width={"auto"}>
            <h2 className="header-text-edit-project">Add Trainer</h2>
            <img src={lineUnder} alt="" />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <InputField
                    label="Trainer name"
                    placeholder="Enter the Trainer name"
                    required={true}
                    type="text"
                    value={formData.trainerName}
                    onChange={(e) => handleInputChange('trainerName', e.target.value)}
                />
                <InputField
                    label="Trainer Email"
                    placeholder="Enter the Trainer Email"
                    required={true}
                    type="email"
                    value={formData.trainerEmail}
                    onChange={(e) => handleInputChange('trainerEmail', e.target.value)}
                />
                <InputField
                    label="Trainer phone"
                    placeholder="Enter the Trainer phone"
                    required={true}
                    type="tel"
                    value={formData.trainerPhone}
                    onChange={(e) => handleInputChange('trainerPhone', e.target.value)}
                />
                <InputField
                    label="Trainer specialities"
                    placeholder="Programming,Graphic Design,etc..."
                    required={true}
                    type="text"
                    value={formData.trainerSpecialities}
                    onChange={(e) => handleInputChange('trainerSpecialities', e.target.value)}
                />
                <InputField
                    label="Trainer pay rate"
                    placeholder="Enter the pay rate"
                    required={true}
                    type="text"
                    value={formData.trainerPayRate}
                    onChange={(e) => handleInputChange('trainerPayRate', e.target.value)}
                />
                <Dropdown
                    label="Trainer quantity"
                    placeHolder="Select"
                    options={quantityOptions}
                    required={true}
                    onSelectionChange={(value) => handleInputChange('trainerQuantity', value)}
                />

                <Button
                    type="submit"
                    label="Add Trainer"
                    className={"button-edit-project"}
                    height={"3rem"}
                />
            </form>
        </Modal>
    );
};

export default AddTrainer;
