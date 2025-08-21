import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import InputField from "src/elements/DynamicInput/InputField";
import QuillEditor from "src/components/QuillEditor/QuillEditor";
import Modal from "src/pages/Modal";

import lineUnder from "../../../../images/under-title-opration.svg";

const SendEmail = ({ isOpen, onClose, selectedUsers, onRemoveUser }) => {
    const [formData, setFormData] = useState({
        title: "",
        messageDescription: ""
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const removeUser = (userToRemove) => {
        if (onRemoveUser) {
            onRemoveUser(userToRemove);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title && formData.messageDescription && selectedUsers.length > 0) {
            console.log("Sending email to:", selectedUsers);
            console.log("Email data:", formData);
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} width={"auto"}>
            <h2 className="header-text-edit-project">Send email for selected users</h2>
            <img src={lineUnder} alt="" />
            <form onSubmit={handleSubmit} className="edit-project-form send-email-form">
                <div className="selected-users-section">
                    <label className="form-label">Selected users *</label>
                    <div className="selected-users-container">
                        {selectedUsers.map((user, index) => (
                            <span key={index} className="selected-user-tag">
                                {user.firstNameEnglish}
                                <button
                                    type="button"
                                    onClick={() => removeUser(user)}
                                    className="remove-user-btn"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                <InputField
                    label="Title"
                    placeholder={"Enter a title"}
                    required={true}
                    type="text"
                    customClass='name-edit-project'
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                />

                {/* <div className="message-editor-section"> */}
                <QuillEditor
                    label="Message description"
                    required={true}
                    customClass="message-editor"
                    onData={(value) => handleInputChange('messageDescription', value)}
                />
                {/* </div> */}

                <Button
                    type="submit"
                    label="Send emails"
                    className={"button-edit-project"}
                    height={"3rem"}
                />
            </form>
        </Modal>
    );
};

export default SendEmail;
