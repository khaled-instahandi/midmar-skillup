import React, { useState } from "react";
import Button from "src/elements/Buttons/Button";
import InputField from "src/elements/DynamicInput/InputField";
import Checkbox from "src/elements/Checkbox/Checkbox";
import Modal from "src/pages/Modal";

import lineUnder from "../../../../images/under-title-opration.svg";

const AddUserProfile = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        privileges: []
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handlePrivilegeChange = (privilegeId, isChecked) => {
        setFormData(prev => ({
            ...prev,
            privileges: isChecked 
                ? [...prev.privileges, privilegeId]
                : prev.privileges.filter(p => p !== privilegeId)
        }));
    };

    const removePrivilege = (privilegeToRemove) => {
        setFormData(prev => ({
            ...prev,
            privileges: prev.privileges.filter(p => p !== privilegeToRemove)
        }));
    };

    const addPrivilegeFromDropdown = (e) => {
        const value = e.target.value;
        if (value && !formData.privileges.includes(value)) {
            setFormData(prev => ({
                ...prev,
                privileges: [...prev.privileges, value]
            }));
        }
        e.target.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.privileges.length > 0) {
            onSave(formData);
        }
    };

    if (!isOpen) return null;

    return (
        <Modal onClose={onClose} width={"auto"}>
            <h2 className="header-text-edit-project">Add Profiles</h2>
            <img src={lineUnder} alt="" />
            <form onSubmit={handleSubmit} className="edit-project-form">
                <InputField
                    label="Name"
                    placeholder={"Enter the Name"}
                    required={true}
                    type="text"
                    customClass='name-edit-project'
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                />

                <div className="privileges-section name-edit-project">
                    <label className="privileges-label">Privileges *</label>
                    
                    {/* Selected Privileges Display Area - exactly like the image */}
                    <div className="selected-privileges-display">
                        {formData.privileges.map((privilege, index) => (
                            <span key={index} className="privilege-tag-selected">
                                {privilege}
                                <button 
                                    type="button"
                                    onClick={() => removePrivilege(privilege)}
                                    className="privilege-remove-x"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        
                        {/* Plus dropdown button */}
                        {/* <select 
                            className="privilege-add-dropdown"
                            onChange={addPrivilegeFromDropdown}
                        >
                            <option value="">⊕</option>
                            <option value="Trainee Pages">Trainee Pages</option>
                            <option value="Purchase Requests Signatures">Purchase Requests Signatures</option>
                            <option value="Hold Up to 250 Budget">Hold Up to 250 Budget</option>
                            <option value="Delete Delegations">Delete Delegations</option>
                            <option value="Upload Files">Upload Files</option>
                            <option value="Statistics Budget">Statistics Budget</option>
                            <option value="View Activities">View Activities</option>
                            <option value="Edit Projects">Edit Projects</option>
                            <option value="Instructor Pages">Instructor Pages</option>
                        </select> */}
                    </div>
                    
                    {/* Hierarchical Privilege Tree - exactly like the image */}
                    <div className="privileges-tree-container">
                        <div className="privilege-tree-item">
                            <Checkbox 
                                name="activities"
                                label="Activities"
                                checked={formData.privileges.includes("Activities")}
                                onChange={(checked) => handlePrivilegeChange("Activities", checked)}
                            />
                        </div>

                        <div className="privilege-tree-item">
                            <Checkbox 
                                name="budget"
                                label="Budget"
                                checked={formData.privileges.includes("Budget")}
                                onChange={(checked) => handlePrivilegeChange("Budget", checked)}
                            />
                        </div>

                        <div className="privilege-tree-item">
                            <Checkbox 
                                name="purchase-requests-signatures"
                                label="Purchase Requests Signatures"
                                checked={formData.privileges.includes("Purchase Requests Signatures")}
                                onChange={(checked) => handlePrivilegeChange("Purchase Requests Signatures", checked)}
                            />
                        </div>

                        <div className="privilege-tree-item">
                            <Checkbox 
                                name="trainee-pages"
                                label="Trainee Pages"
                                checked={formData.privileges.includes("Trainee Pages")}
                                onChange={(checked) => handlePrivilegeChange("Trainee Pages", checked)}
                            />
                            
                            {/* Sub-items for Trainee Pages */}
                            <div className="privilege-sub-items">
                                <div className="privilege-sub-item">
                                    <Checkbox 
                                        name="delete-delegations"
                                        label="Delete Delegations"
                                        checked={formData.privileges.includes("Delete Delegations")}
                                        onChange={(checked) => handlePrivilegeChange("Delete Delegations", checked)}
                                    />
                                </div>
                                <div className="privilege-sub-item">
                                    <Checkbox 
                                        name="budget-sub"
                                        label="Budget"
                                        checked={formData.privileges.includes("Budget")}
                                        onChange={(checked) => handlePrivilegeChange("Budget", checked)}
                                    />
                                </div>
                                <div className="privilege-sub-item">
                                    <Checkbox 
                                        name="statistics-budget"
                                        label="Statistics Budget"
                                        checked={formData.privileges.includes("Statistics Budget")}
                                        onChange={(checked) => handlePrivilegeChange("Statistics Budget", checked)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="privilege-tree-item">
                            <Checkbox 
                                name="purchase-requests-signatures-2"
                                label="Purchase Requests Signatures"
                                checked={formData.privileges.includes("Purchase Requests Signatures")}
                                onChange={(checked) => handlePrivilegeChange("Purchase Requests Signatures", checked)}
                            />
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    label="Add Profiles"
                    className={"button-edit-project"}
                    height={"3rem"}
                />
            </form>
        </Modal>
    );
};

export default AddUserProfile;
